#!/usr/bin/env node
import { access, copyFile, mkdir, unlink } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';
import { loadDeliveryApiConfiguration, registerDeliveryPublication, startDeliveryApi } from './api.mjs';

const usage = 'dt-delivery-api init | start | register --job <completed-job.json> [--config <delivery-api.config.json>]';
let stage = 'arguments';
try {
  const [command = 'help', ...args] = process.argv.slice(2), flags = new Map();
  for (let i = 0; i < args.length; i += 2) {
    if (!['--config', '--job'].includes(args[i]) || !args[i + 1] || flags.has(args[i])) throw new Error(usage);
    flags.set(args[i], args[i + 1]);
  }
  if (!['init', 'start', 'register', 'help', '--help', '-h'].includes(command) || flags.has('--job') && command !== 'register') throw new Error(usage);
  const configPath = resolve(flags.get('--config') ?? 'delivery-api.config.json'), root = dirname(configPath);
  if (['help', '--help', '-h'].includes(command)) process.stdout.write(usage + '\nNode.js 24.16+ · SDK browser import and API server execution are separate.\n');
  else if (command === 'init') {
    const templates = dirname(fileURLToPath(import.meta.url));
    const targets = [[configPath, 'delivery-api.config.example.json'], [join(root, 's3-profiles.json'), 's3-profiles.example.json'], [join(root, '.env'), 'environment.example.txt']];
    for (const [target] of targets) {
      try { await access(target); throw new Error('Initialization refused: a configuration file already exists'); }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
    }
    await mkdir(root, { recursive: true }); const created = [];
    try {
      for (const [target, source] of targets) { await copyFile(join(templates, source), target, constants.COPYFILE_EXCL); created.push(target); }
    } catch (error) { for (const target of created) await unlink(target); throw error; }
    process.stdout.write('Created delivery-api.config.json, s3-profiles.json and .env. Set the actual storage configuration and compositionIds, then start the API. Remote publications are checked automatically; no completed-job download is required. See docs/SERVER.md.\n');
  } else {
    let jobPath;
    if (command === 'register') {
      if (!flags.has('--job')) throw new Error(usage);
      stage = 'job'; jobPath = resolve(flags.get('--job'));
      await access(jobPath, constants.R_OK);
    }
    stage = 'configuration';
    try { await access(join(root, '.env')); process.loadEnvFile(join(root, '.env')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    const config = await loadDeliveryApiConfiguration(configPath);
    if (command === 'register') {
      stage = 'registration';
      process.stdout.write('Validating completed publication and all referenced storage files…\n');
      const result = await registerDeliveryPublication(config, jobPath);
      process.stdout.write(JSON.stringify(result) + '\n');
    } else {
      stage = 'startup';
      if (config.s3Profiles) process.stdout.write('Checking remote publications once before API startup; new releases are fully validated before registration…\n');
      const host = await startDeliveryApi(config, { token: process.env.DT_DELIVERY_API_TOKEN, onPublicationSync: status => {
        process.stdout.write(`Startup publication check: ${JSON.stringify({ checked: status.checked, registered: status.registered, failureCount: status.failures.length, failures: status.failures.slice(0, 5) })}\n`);
        if (!status.checked && !status.failures.length) process.stdout.write('No composition IDs configured or registered yet. Set compositionIds in delivery-api.config.json and restart to connect your model.\n');
      } });
      const address = host.server.address(), port = typeof address === 'object' ? address.port : config.port;
      const name = config.host.includes(':') ? `[${config.host}]` : config.host;
      process.stdout.write(`Delivery API listening: http://${name}:${port}/\nAllowed web origin: ${config.origin}\nScope: ${config.scope}\n`);
      if (config.s3Profiles) process.stdout.write('Remote publication check completed. No periodic monitoring. Restart the API after publishing changes.\n');
      if (host.tokenFile) process.stdout.write(`Local API token file (value not printed): ${host.tokenFile}\n`);
      else process.stdout.write('Authorization supplied by DT_DELIVERY_API_TOKEN.\n');
      for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => { void host.close().catch(() => { process.exitCode = 1; }); });
    }
  }
} catch (error) {
  const hints = {
    invalid: 'Invalid publication data. Use the unedited completed job and matching editor/server configuration.',
    missing: 'A referenced storage file is missing. Check the published storage and scope.',
    corrupt: 'A referenced storage file failed hash validation. The previous catalog was preserved.',
    denied: 'Storage access denied. Check the server storage credentials and read permission.',
    unavailable: 'Storage unavailable. Check its endpoint and network connection.',
    conflict: 'Publication conflict. Obtain the latest completed job from the editor.',
    EADDRINUSE: 'API port is already in use. Stop the existing API or choose another port.',
  };
  const message = stage === 'job' && error.code === 'ENOENT'
    ? 'Completed job file not found. api:init does not create completed-job.json. For automatic updates, set compositionIds in delivery-api.config.json and start the API. For manual registration, open 작업 이력 → 게시 완료 JSON 받기 in the editor and place the file at the --job path. See README step 5.'
    : stage === 'job' ? 'Cannot read the --job file. Check its path and file read permission.'
    : error.code === 'ENOENT' ? `A required file is missing during ${stage}. Check delivery-api.config.json, s3-profiles.json and the configured storage paths.`
    : ['EACCES', 'EPERM'].includes(error.code) ? `File access denied during ${stage}. Check file and directory permissions.`
    : hints[error.code] ?? (error.code ? `Operation failed during ${stage}; check configuration and storage availability.` : error.message);
  process.stderr.write(message + '\n'); process.exitCode = 1;
}
