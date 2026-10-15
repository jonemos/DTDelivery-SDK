param([switch]$NoBrowser, [ValidateRange(0, 65535)][int]$Port = 5183)
$ErrorActionPreference = 'Stop'

# Windows PowerShell 5.1 and .NET are the only server requirements.
# Load only the release's hash-validated, prebuilt page into memory. No build,
# package installation, filesystem proxy, model read or configuration write.
$sdkRoot = [IO.Path]::GetFullPath([IO.Path]::Combine($PSScriptRoot, '..')).TrimEnd('\')
function Get-PlainFilePath([string]$Relative) {
  $path = [IO.Path]::GetFullPath([IO.Path]::Combine($sdkRoot, $Relative.Replace('/', '\')))
  if (-not $path.StartsWith($sdkRoot + '\', [StringComparison]::OrdinalIgnoreCase)) { throw 'Invalid test page path.' }
  $walk = $path
  while ($walk) {
    if (([IO.File]::GetAttributes($walk) -band [IO.FileAttributes]::ReparsePoint) -ne 0) { throw 'Redirected test page path.' }
    $walk = [IO.Path]::GetDirectoryName($walk)
  }
  return $path
}

$listener = $null
try {
  Write-Output 'Verifying the prebuilt SDK test page. No Node.js, pnpm or download is required.'
  $manifest = [IO.File]::ReadAllText((Get-PlainFilePath 'sdk-manifest.json')) | ConvertFrom-Json
  if ($manifest.schemaVersion -ne 1 -or $manifest.transport -ne 'direct') { throw 'Invalid SDK manifest.' }
  $files = @{}; $total = 0
  $mime = @{ '.html' = 'text/html; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.wasm' = 'application/wasm' }
  foreach ($entry in $manifest.files) {
    if (-not $entry.path.StartsWith('examples/standalone/', [StringComparison]::Ordinal) -and -not $entry.path.StartsWith('runtime/', [StringComparison]::Ordinal)) { continue }
    if ($entry.path -cnotmatch '^(examples/standalone/(index\.html|assets/[A-Za-z0-9_-]+\.(js|css|wasm))|runtime/[A-Za-z0-9_.-]+\.(js|css))$' -or $entry.sha256 -cnotmatch '^[a-f0-9]{64}$' -or $entry.bytes -le 0 -or $entry.bytes -gt 33554432) { throw 'Invalid prebuilt test page entry.' }
    $route = '/' + $entry.path
    if ($entry.path.StartsWith('examples/standalone/', [StringComparison]::Ordinal)) { $route = '/' + $entry.path.Substring('examples/standalone/'.Length) }
    if ($files.ContainsKey($route) -or $files.Count -ge 100) { throw 'Duplicate or excessive test page files.' }
    $path = Get-PlainFilePath $entry.path
    if (([IO.FileInfo]$path).Length -ne $entry.bytes) { throw ('Test page size mismatch: ' + $entry.path) }
    $bytes = [IO.File]::ReadAllBytes($path); $total += $bytes.Length
    if ($total -gt 33554432) { throw 'Test page size limit exceeded.' }
    $sha = [Security.Cryptography.SHA256]::Create()
    try { $hash = [BitConverter]::ToString($sha.ComputeHash($bytes)).Replace('-', '').ToLowerInvariant() } finally { $sha.Dispose() }
    if ($hash -cne $entry.sha256) { throw ('Test page hash mismatch: ' + $entry.path) }
    $files[$route] = @{ Bytes = $bytes; Mime = $mime[[IO.Path]::GetExtension($path)] }
  }
  if (-not $files.ContainsKey('/index.html') -or -not $files.ContainsKey('/runtime/index.js') -or -not $files.ContainsKey('/runtime/sdk.js') -or -not @($files.Keys | Where-Object { $_.StartsWith('/assets/') -and $_.EndsWith('.js') }).Count) { throw 'Missing prebuilt test page. Extract the complete SDK ZIP.' }
  $listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $Port)
  try { $listener.Start() } catch { throw ('Cannot start localhost port ' + $Port + '. Stop the previous test server and retry.') }
  $serverPort = $listener.LocalEndpoint.Port
  $url = "http://127.0.0.1:$serverPort/"
  Write-Output ('SDK ' + $manifest.version + ' test server is ready. Keep this window open; Ctrl+C stops it.')
  Write-Output "EXAMPLE_URL=$url"
  if (-not $NoBrowser) {
    try { Start-Process $url } catch { Write-Warning ('Open Chrome or Edge at ' + $url) }
  }
  while ($true) {
    $client = $listener.AcceptTcpClient()
    $client.ReceiveTimeout = 3000; $client.SendTimeout = 10000
    $stream = $client.GetStream()
    try {
      $headers = [Collections.Generic.List[byte]]::new(); $complete = $false
      while ($headers.Count -lt 8192) {
        $next = $stream.ReadByte()
        if ($next -lt 0) { break }
        $headers.Add([byte]$next); $count = $headers.Count
        if ($count -ge 4 -and $headers[$count-4] -eq 13 -and $headers[$count-3] -eq 10 -and $headers[$count-2] -eq 13 -and $headers[$count-1] -eq 10) { $complete = $true; break }
      }
      $text = [Text.Encoding]::ASCII.GetString($headers.ToArray())
      $request = $text.Split("`r`n")[0]; $method = ''; $body = [byte[]]@(); $contentType = 'text/plain'; $status = '403 Forbidden'
      $hosts = [regex]::Matches($text, '(?im)^Host: ([^\r\n]+)\r?$')
      $origins = [regex]::Matches($text, '(?im)^Origin: ([^\r\n]+)\r?$')
      $fetchSites = [regex]::Matches($text, '(?im)^Sec-Fetch-Site: ([^\r\n]+)\r?$')
      $validOrigin = $origins.Count -eq 0 -or ($origins.Count -eq 1 -and $origins[0].Groups[1].Value -ceq $url.TrimEnd('/'))
      $validSite = $fetchSites.Count -eq 0 -or ($fetchSites.Count -eq 1 -and $fetchSites[0].Groups[1].Value -cin @('none', 'same-origin'))
      if ($complete -and $hosts.Count -eq 1 -and $hosts[0].Groups[1].Value -ceq "127.0.0.1:$serverPort" -and $validOrigin -and $validSite -and $request -cmatch '^(GET|HEAD) (/[^ ]*) HTTP/1\.[01]$') {
        $method = $Matches[1]; $route = $Matches[2].Split('?')[0]
        # Exact routes only: never decode traversal, read arbitrary paths, or expose SDK settings.
        if ($route -ceq '/') { $route = '/index.html' }
        if ($files.ContainsKey($route)) { $file = $files[$route]; $body = $file.Bytes; $contentType = $file.Mime; $status = '200 OK' }
        else { $status = '404 Not Found' }
      }
      $policy = "default-src 'self'; script-src 'self' blob: 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self' https: http: blob:; worker-src 'self' blob:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"
      $response = [Text.Encoding]::ASCII.GetBytes("HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`nCache-Control: no-store`r`nX-Content-Type-Options: nosniff`r`nReferrer-Policy: no-referrer`r`nContent-Security-Policy: $policy`r`n`r`n")
      $stream.Write($response, 0, $response.Length)
      if ($method -ceq 'GET' -and $body.Length) { $stream.Write($body, 0, $body.Length) }
    } catch { Write-Verbose $_ }
    finally { $stream.Dispose(); $client.Dispose() }
  }
} catch {
  Write-Output ('Test server could not start: ' + $_.Exception.Message)
  exit 1
} finally { if ($listener) { $listener.Stop() } }
