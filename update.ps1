param([switch]$NoPause, [switch]$Library)
$ErrorActionPreference = 'Stop'

function Get-SdkHash([byte[]]$Bytes) {
  $sha = [Security.Cryptography.SHA256]::Create()
  try { return [BitConverter]::ToString($sha.ComputeHash($Bytes)).Replace('-', '').ToLowerInvariant() } finally { $sha.Dispose() }
}
function Get-SdkPath([string]$Root, [string]$Relative) {
  if ($Relative -match '[\\:\x00-\x1f]' -or $Relative.StartsWith('/') -or @($Relative.Split('/') | Where-Object { -not $_ -or $_ -eq '.' -or $_ -eq '..' -or $_ -match '[ .]$|[<>"|?*]' }).Count) { throw 'Unsafe SDK path.' }
  $rootPath = [IO.Path]::GetFullPath($Root).TrimEnd('\')
  $path = [IO.Path]::GetFullPath([IO.Path]::Combine($rootPath, $Relative.Replace('/', '\')))
  if (-not $path.StartsWith($rootPath + '\', [StringComparison]::OrdinalIgnoreCase)) { throw 'SDK path leaves its directory.' }
  $walk = $path
  while ($walk) {
    if (([IO.File]::Exists($walk) -or [IO.Directory]::Exists($walk)) -and ([IO.File]::GetAttributes($walk) -band [IO.FileAttributes]::ReparsePoint)) { throw 'Redirected SDK path refused.' }
    $walk = [IO.Path]::GetDirectoryName($walk)
  }
  return $path
}
function Test-SdkPublicPath([string]$Path) {
  return $Path -cmatch '^(package\.json|LICENSE|THIRD_PARTY_LICENSES\.txt|README\.md|CHANGELOG\.md|\.gitignore|\.gitattributes|update\.cmd|update\.ps1|runtime/[A-Za-z0-9_.-]+\.(js|css)|types/(index\.d\.ts|viewport\.css\.d\.ts|modules/m[a-f0-9]{12}\.d\.ts)|docs/(API|GITHUB_DESKTOP|UPDATING)\.md|docs/guides/(README|[0-9]{2}_[A-Z_]+)\.md|examples/(test-server\.cmd|test-server\.ps1|dev-server\.cmd|detach-sdk\.mjs)|examples/standalone/(index\.html|assets/[A-Za-z0-9_-]+\.(js|css|wasm))|examples/web/(package\.json|index\.html|main\.ts|featureExamples\.ts|featurePanel\.ts|style\.css|tsconfig\.json|vite\.config\.mjs|pnpm-workspace\.yaml|README\.md))$'
}
function Read-SdkPackage([string]$Root) {
  $path = Get-SdkPath $Root 'sdk-manifest.json'
  if (-not [IO.File]::Exists($path) -or ([IO.FileInfo]$path).Length -gt 524288) { throw 'Missing or invalid SDK manifest. Use the complete SDK folder.' }
  $manifestBytes = [IO.File]::ReadAllBytes($path)
  $manifest = [Text.Encoding]::UTF8.GetString($manifestBytes) | ConvertFrom-Json
  if ($manifest.schemaVersion -ne 1 -or $manifest.transport -ne 'direct' -or $manifest.license -ne 'MIT' -or $manifest.version -cnotmatch '^(0|[1-9][0-9]{0,5})\.(0|[1-9][0-9]{0,5})\.(0|[1-9][0-9]{0,5})$' -or @($manifest.files).Count -lt 1 -or @($manifest.files).Count -gt 500) { throw 'Invalid direct SDK manifest.' }
  $files = @{}; $total = 0
  foreach ($entry in $manifest.files) {
    if (-not (Test-SdkPublicPath $entry.path) -or $entry.sha256 -cnotmatch '^[a-f0-9]{64}$' -or $entry.bytes -lt 0 -or $entry.bytes -gt 33554432 -or $files.ContainsKey($entry.path)) { throw 'Invalid or duplicate SDK file entry.' }
    $file = Get-SdkPath $Root $entry.path
    if (-not [IO.File]::Exists($file) -or ([IO.FileInfo]$file).Length -ne $entry.bytes) { throw ('SDK file missing or changed: ' + $entry.path) }
    $bytes = [IO.File]::ReadAllBytes($file); $total += $bytes.Length
    if ($total -gt 33554432 -or (Get-SdkHash $bytes) -cne $entry.sha256) { throw ('SDK file changed: ' + $entry.path + '. Keep your edits before updating.') }
    $files[$entry.path] = $entry
  }
  foreach ($required in @('package.json', 'runtime/index.js', 'runtime/sdk.js', 'runtime/viewport.css', 'types/index.d.ts', 'LICENSE', 'README.md')) { if (-not $files.ContainsKey($required)) { throw 'Incomplete SDK package.' } }
  if ($files.ContainsKey('update.cmd') -ne $files.ContainsKey('update.ps1')) { throw 'Incomplete SDK updater pair.' }
  $package = [IO.File]::ReadAllText((Get-SdkPath $Root 'package.json')) | ConvertFrom-Json
  if ($package.name -cne '@dt/delivery-sdk' -or $package.version -cne $manifest.version) { throw 'SDK version mismatch.' }
  $files['sdk-manifest.json'] = [pscustomobject]@{ path = 'sdk-manifest.json'; bytes = $manifestBytes.Length; sha256 = Get-SdkHash $manifestBytes }
  return [pscustomobject]@{ Version = $manifest.version; Files = $files }
}
function Save-SdkDownload([string]$Url, [string]$Destination, [int]$Limit) {
  # Only callers below construct URLs, from this fixed official repository.
  $request = [Net.HttpWebRequest]::Create($Url)
  $request.AllowAutoRedirect = $false; $request.Timeout = 30000; $request.ReadWriteTimeout = 30000
  $request.UserAgent = 'DTDelivery-SDK-Updater'; $request.Accept = 'application/vnd.github+json'
  $response = $null; $inputStream = $null; $outputStream = $null
  try {
    $response = $request.GetResponse()
    if ([int]$response.StatusCode -ne 200 -or $response.ContentLength -gt $Limit) { throw 'Invalid update response.' }
    $inputStream = $response.GetResponseStream(); $outputStream = [IO.File]::Open($Destination, 'CreateNew', 'Write', 'None')
    $buffer = [byte[]]::new(65536); $total = 0
    while (($count = $inputStream.Read($buffer, 0, $buffer.Length)) -gt 0) {
      $total += $count; if ($total -gt $Limit) { throw 'Update download exceeds its size limit.' }
      $outputStream.Write($buffer, 0, $count)
    }
  } finally { if ($outputStream) { $outputStream.Dispose() }; if ($inputStream) { $inputStream.Dispose() }; if ($response) { $response.Dispose() } }
}
function Get-SdkRemoteCommit([string]$Stage) {
  $file = Get-SdkPath $Stage 'commit.json'
  Save-SdkDownload 'https://api.github.com/repos/jonemos/DTDelivery-SDK/commits/main' $file 1048576
  $commit = ([IO.File]::ReadAllText($file) | ConvertFrom-Json).sha
  if ($commit -cnotmatch '^[a-f0-9]{40}$') { throw 'Invalid official SDK commit.' }
  return $commit
}
function Save-SdkArchive([string]$Commit, [string]$Destination) {
  if ($Commit -cnotmatch '^[a-f0-9]{40}$') { throw 'Invalid SDK commit.' }
  Save-SdkDownload "https://codeload.github.com/jonemos/DTDelivery-SDK/zip/$Commit" $Destination 33554432
}
function Expand-SdkArchive([string]$Zip, [string]$Directory, [string]$Commit) {
  Add-Type -AssemblyName System.IO.Compression.FileSystem
  $archive = [IO.Compression.ZipFile]::OpenRead($Zip); $seen = @{}; $total = 0
  try {
    if ($archive.Entries.Count -gt 650) { throw 'Too many SDK archive entries.' }
    $prefix = "DTDelivery-SDK-$Commit/"
    foreach ($entry in $archive.Entries) {
      if (-not $entry.FullName.StartsWith($prefix, [StringComparison]::Ordinal)) { throw 'Unexpected SDK archive root.' }
      $relative = $entry.FullName.Substring($prefix.Length)
      if (-not $relative) { continue }
      if (($entry.ExternalAttributes -shr 16 -band 61440) -eq 40960) { throw 'SDK archive links are forbidden.' }
      if ($entry.FullName.EndsWith('/')) { $null = Get-SdkPath $Directory $relative.TrimEnd('/'); continue }
      if (($relative -cne 'sdk-manifest.json' -and -not (Test-SdkPublicPath $relative)) -or $seen.ContainsKey($relative)) { throw 'Unexpected or duplicate SDK archive file.' }
      $total += $entry.Length; if ($total -gt 33554432 -or $entry.Length -gt 33554432) { throw 'Expanded SDK exceeds its size limit.' }
      $target = Get-SdkPath $Directory $relative; $null = [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($target))
      [IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $target, $false); $seen[$relative] = $true
    }
  } finally { $archive.Dispose() }
  $package = Read-SdkPackage $Directory
  if ($seen.Count -ne $package.Files.Count) { throw 'SDK archive inventory mismatch.' }
  return $package
}
function Write-SdkAtomic([string]$Path, [byte[]]$Bytes) {
  $temporary = $Path + '.update-' + [Guid]::NewGuid().ToString('N')
  $null = [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($Path))
  try {
    [IO.File]::WriteAllBytes($temporary, $Bytes)
    if ([IO.File]::Exists($Path)) { [IO.File]::Replace($temporary, $Path, [System.Management.Automation.Language.NullString]::Value) } else { [IO.File]::Move($temporary, $Path) }
  } finally { if ([IO.File]::Exists($temporary)) { [IO.File]::Delete($temporary) } }
}
function Invoke-SdkGit([string]$Git, [string]$Root, [string]$State, [string[]]$GitArguments) {
  $saved = $ErrorActionPreference
  try {
    $ErrorActionPreference = 'Continue'
    $output = & $Git -c core.autocrlf=false -c core.fsmonitor=false -c "core.hooksPath=$State/no-hooks" -C $Root @GitArguments 2>&1
    $code = $LASTEXITCODE
  } finally { $ErrorActionPreference = $saved }
  if ($code -ne 0) { throw ('Git update step failed: ' + $GitArguments[0] + '. Existing SDK files and backup are preserved.') }
  return (($output | ForEach-Object { $_.ToString() }) -join "`n").Trim()
}
function Restore-SdkUpdate([string]$Root, [string]$State, $Journal, [string]$Git) {
  if ($Journal.Root -cne $Root -or $Journal.Id -cnotmatch '^[a-f0-9]{32}$' -or ($Journal.GitHead -and $Journal.GitHead -cnotmatch '^[a-f0-9]{40}$') -or @($Journal.Items).Count -gt 1000) { throw 'Invalid SDK recovery journal.' }
  $backup = Get-SdkPath $State ('backups/' + $Journal.Id)
  # Validate every old copy and all current destinations before restoring any.
  foreach ($item in $Journal.Items) {
    if (-not (Test-SdkPublicPath $item.Path) -and $item.Path -cne 'sdk-manifest.json') { throw 'Invalid recovery file.' }
    $target = Get-SdkPath $Root $item.Path
    if ($item.Before) {
      $old = Get-SdkPath $backup $item.Path
      if ((Get-SdkHash ([IO.File]::ReadAllBytes($old))) -cne $item.Before) { throw 'SDK backup changed; recovery stopped.' }
    }
    if ([IO.File]::Exists($target)) {
      $hash = Get-SdkHash ([IO.File]::ReadAllBytes($target))
      if ($hash -cne $item.Before -and $hash -cne $item.After) { throw 'A newer local edit prevents recovery. Keep the backup and your edits.' }
    }
  }
  foreach ($item in @($Journal.Items | Sort-Object { $_.Path -eq 'sdk-manifest.json' }, Path)) {
    $target = Get-SdkPath $Root $item.Path
    if ($item.Before) {
      if ([IO.File]::Exists($target) -and (Get-SdkHash ([IO.File]::ReadAllBytes($target))) -ceq $item.Before) { continue }
      Write-SdkAtomic $target ([IO.File]::ReadAllBytes((Get-SdkPath $backup $item.Path)))
    }
    elseif ([IO.File]::Exists($target)) { [IO.File]::Delete($target) }
  }
  if ($Journal.GitHead) {
    if (-not $Git) { throw 'Git is required to finish recovery of this Git checkout.' }
    $null = Invoke-SdkGit $Git $Root $State @('switch', '--detach', $Journal.GitHead)
  }
  $null = Read-SdkPackage $Root
  [IO.File]::Delete((Get-SdkPath $State 'pending.json'))
  Write-Output 'The previous SDK update was restored from its backup.'
}
function Install-SdkSnapshot([string]$Root, [string]$State, [string]$Stage, [string]$Commit, $Current, $Incoming, [string]$Git) {
  $names = @(@($Current.Files.Keys) + @($Incoming.Files.Keys) | Sort-Object -Unique)
  $id = [Guid]::NewGuid().ToString('N'); $backup = Get-SdkPath $State ('backups/' + $id); $null = [IO.Directory]::CreateDirectory($backup)
  $items = @(); $oldHead = $null
  foreach ($name in $names) {
    $target = Get-SdkPath $Root $name; $before = $null; $after = $null
    if ($Incoming.Files.ContainsKey($name)) { $after = $Incoming.Files[$name].sha256 }
    if ([IO.File]::Exists($target)) {
      $bytes = [IO.File]::ReadAllBytes($target); $before = Get-SdkHash $bytes
      if (-not $Current.Files.ContainsKey($name) -and $before -cne $after) { throw ('A local file occupies a new SDK path: ' + $name) }
      $copy = Get-SdkPath $backup $name; $null = [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($copy)); [IO.File]::WriteAllBytes($copy, $bytes)
    } elseif ([IO.Directory]::Exists($target)) { throw 'An SDK file path is occupied by a local directory.' }
    $items += [pscustomobject]@{ Path = $name; Before = $before; After = $after }
  }
  if ($Git) {
    $top = Invoke-SdkGit $Git $Root $State @('rev-parse', '--show-toplevel')
    if ([IO.Path]::GetFullPath($top).TrimEnd('\') -ine $Root) { throw 'Use a standalone SDK Git checkout.' }
    if (Invoke-SdkGit $Git $Root $State @('status', '--porcelain', '--untracked-files=no')) { throw 'Keep or commit your tracked SDK edits before updating.' }
    $origin = Invoke-SdkGit $Git $Root $State @('config', '--get', 'remote.origin.url')
    if ($origin -notmatch '^(https://github\.com/|git@github\.com:)jonemos/(DTDelivery-SDK|DTWebEditor_SDK)(\.git)?$') { throw 'This checkout does not use the official SDK repository.' }
    $oldHead = Invoke-SdkGit $Git $Root $State @('rev-parse', 'HEAD')
    Write-Output 'Fetching the verified SDK commit...'
    $null = Invoke-SdkGit $Git $Root $State @('fetch', '--no-tags', 'https://github.com/jonemos/DTDelivery-SDK.git', $Commit)
  }
  $journal = [pscustomobject]@{ Root = $Root; Id = $id; GitHead = $oldHead; Items = $items }
  $pending = Get-SdkPath $State 'pending.json'
  Write-SdkAtomic $pending ([Text.Encoding]::UTF8.GetBytes(($journal | ConvertTo-Json -Depth 8)))
  try {
    if ($Git) {
      # Sever pnpm-created hardlinks by byte-identical atomic replacement before
      # Git writes any tracked file. Installed consumers keep their old code.
      foreach ($name in $Current.Files.Keys) { Write-SdkAtomic (Get-SdkPath $Root $name) ([IO.File]::ReadAllBytes((Get-SdkPath $backup $name))) }
      # Only identical bootstrap files may predate their first tracked version.
      foreach ($item in $items) { if ($item.Before -and -not $Current.Files.ContainsKey($item.Path)) { [IO.File]::Delete((Get-SdkPath $Root $item.Path)) } }
      $null = Invoke-SdkGit $Git $Root $State @('switch', '--detach', '--no-overwrite-ignore', $Commit)
    } else {
      foreach ($name in @($Incoming.Files.Keys | Where-Object { $_ -ne 'sdk-manifest.json' } | Sort-Object)) { Write-SdkAtomic (Get-SdkPath $Root $name) ([IO.File]::ReadAllBytes((Get-SdkPath $Stage $name))) }
      foreach ($name in $Current.Files.Keys) { if (-not $Incoming.Files.ContainsKey($name)) { [IO.File]::Delete((Get-SdkPath $Root $name)) } }
      Write-SdkAtomic (Get-SdkPath $Root 'sdk-manifest.json') ([IO.File]::ReadAllBytes((Get-SdkPath $Stage 'sdk-manifest.json')))
    }
    $result = Read-SdkPackage $Root
    if ($result.Files['sdk-manifest.json'].sha256 -cne $Incoming.Files['sdk-manifest.json'].sha256) { throw 'Installed SDK does not match the selected commit.' }
    Write-SdkAtomic (Get-SdkPath $State 'last-update.json') ([Text.Encoding]::UTF8.GetBytes((@{ version = $result.Version; commit = $Commit; manifestSha256 = $result.Files['sdk-manifest.json'].sha256; backup = $backup } | ConvertTo-Json)))
    [IO.File]::Delete($pending)
    Write-Output ('Updated SDK ' + $Current.Version + ' -> ' + $result.Version + '.')
    Write-Output ('Backup: ' + $backup)
  } catch {
    $reason = $_.Exception.Message
    try { Restore-SdkUpdate $Root $State $journal $Git } catch { throw ($reason + ' Recovery requires attention: ' + $_.Exception.Message + ' Backup: ' + $backup) }
    throw ($reason + ' The previous SDK has been restored.')
  }
}
function Invoke-SdkUpdate([string]$Directory) {
  $root = [IO.Path]::GetFullPath($Directory).TrimEnd('\'); $null = Get-SdkPath $root 'sdk-manifest.json'
  $key = (Get-SdkHash ([Text.Encoding]::UTF8.GetBytes($root.ToUpperInvariant()))).Substring(0, 24)
  $mutex = [Threading.Mutex]::new($false, "Local\DTDeliverySdk-$key"); $owned = $false
  try {
    try { $owned = $mutex.WaitOne(0) } catch [Threading.AbandonedMutexException] { $owned = $true }
    if (-not $owned) { throw 'Close this SDK test server or the other updater before updating.' }
    $state = [IO.Path]::Combine([IO.Path]::GetDirectoryName($root), '.dt-sdk-update-' + $key)
    $null = Get-SdkPath ([IO.Path]::GetDirectoryName($root)) ('.dt-sdk-update-' + $key)
    $null = [IO.Directory]::CreateDirectory($state)
    $marker = Get-SdkPath $state 'owner.json'
    if ([IO.File]::Exists($marker)) {
      $owner = [IO.File]::ReadAllText($marker) | ConvertFrom-Json
      if ($owner.kind -cne 'dt-sdk-updater-v1' -or $owner.root -cne $root) { throw 'Updater state belongs to a different SDK.' }
    } else {
      if ([IO.Directory]::GetFileSystemEntries($state).Length) { throw 'Unexpected files in updater state directory.' }
      [IO.File]::WriteAllText($marker, (@{ kind = 'dt-sdk-updater-v1'; root = $root } | ConvertTo-Json))
    }
    $git = $null
    if ([IO.Directory]::Exists([IO.Path]::Combine($root, '.git'))) {
      $command = Get-Command git.exe -CommandType Application -ErrorAction SilentlyContinue
      if (-not $command) { throw 'A Git checkout requires Git to preserve its history. ZIP copies update without Git.' }
      $git = @($command)[0].Source
    } elseif ([IO.File]::Exists([IO.Path]::Combine($root, '.git'))) { throw 'Use a standalone SDK Git checkout or a ZIP copy.' }
    $pending = Get-SdkPath $state 'pending.json'
    if ([IO.File]::Exists($pending)) { Restore-SdkUpdate $root $state ([IO.File]::ReadAllText($pending) | ConvertFrom-Json) $git }
    $current = Read-SdkPackage $root
    Write-Output ('Current SDK ' + $current.Version + '. Checking the official repository...')
    $stage = Get-SdkPath $state ('downloads/' + [Guid]::NewGuid().ToString('N')); $null = [IO.Directory]::CreateDirectory($stage)
    $commit = Get-SdkRemoteCommit $stage
    $lastFile = Get-SdkPath $state 'last-update.json'
    if ([IO.File]::Exists($lastFile)) {
      $last = [IO.File]::ReadAllText($lastFile) | ConvertFrom-Json
      if ($last.commit -ceq $commit -and $last.manifestSha256 -ceq $current.Files['sdk-manifest.json'].sha256) { Write-Output ('SDK ' + $current.Version + ' is already up to date.'); return }
    }
    $archive = Get-SdkPath $stage 'sdk.zip'
    Save-SdkArchive $commit $archive
    $packageRoot = Get-SdkPath $stage 'package'; $null = [IO.Directory]::CreateDirectory($packageRoot)
    $incoming = Expand-SdkArchive $archive $packageRoot $commit
    $left = $current.Version.Split('.'); $right = $incoming.Version.Split('.')
    for ($i = 0; $i -lt 3; $i++) {
      if ([int]$left[$i] -gt [int]$right[$i]) { Write-Output 'The local SDK is newer. No downgrade was performed.'; return }
      if ([int]$left[$i] -lt [int]$right[$i]) { break }
    }
    if ($current.Files['sdk-manifest.json'].sha256 -ceq $incoming.Files['sdk-manifest.json'].sha256) { Write-Output ('SDK ' + $current.Version + ' is already up to date.'); return }
    Install-SdkSnapshot $root $state $packageRoot $commit $current $incoming $git
    Write-Output 'Run examples\test-server.cmd, then refresh your browser.'
  } finally { if ($owned) { $mutex.ReleaseMutex() }; $mutex.Dispose() }
}

if ($Library) { return }
$result = 0
try {
  [Net.ServicePointManager]::SecurityProtocol = [Net.ServicePointManager]::SecurityProtocol -bor [Net.SecurityProtocolType]::Tls12
  Invoke-SdkUpdate $PSScriptRoot
} catch { Write-Output ('Update stopped: ' + $_.Exception.Message); $result = 1 }
if (-not $NoPause) { $null = Read-Host 'Press Enter to close' }
exit $result
