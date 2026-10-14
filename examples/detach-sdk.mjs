import { readFile, lstat, realpath, writeFile, rename } from 'node:fs/promises';
import { resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import process from 'node:process';

const root = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), '..'));
const manifestPath = resolve(root, 'sdk-manifest.json'), manifestBytes = await readFile(manifestPath);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const files = [...JSON.parse(manifestBytes).files, { path: 'sdk-manifest.json', sha256: hash(manifestBytes) }], linked = [];
for (const file of files) {
  const path = resolve(root, file.path), stat = await lstat(path);
  if (!path.startsWith(root + sep) || !stat.isFile() || stat.isSymbolicLink() || (await realpath(path)).toLowerCase() !== path.toLowerCase()) throw new Error('Unsafe SDK path: ' + file.path);
  const bytes = await readFile(path);
  if (hash(bytes) !== file.sha256) throw new Error('Changed SDK public file: ' + file.path + '. Keep developer settings outside the SDK package.');
  if (stat.nlink > 1) linked.push({ path, bytes });
}
for (const { path, bytes } of linked) {
  const temporary = path + '.copy-' + randomUUID(); await writeFile(temporary, bytes, { flag: 'wx' }); await rename(temporary, path);
}
process.stdout.write(`SDK public files verified; detached ${linked.length} local dependency links.\n`);
