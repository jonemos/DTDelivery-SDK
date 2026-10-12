#!/usr/bin/env node
import { access, copyFile, mkdir, unlink } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';
import { loadDeliveryApiConfiguration, registerDeliveryPublication, startDeliveryApi } from './api.mjs';

const usage = 'dt-delivery-api init | start | register --job <completed-job.json> [--config <delivery-api.config.json>]';
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
    process.stdout.write('Created delivery-api.config.json, s3-profiles.json and .env. Edit these private files, then register the completed editor job. See docs/SERVER.md.\n');
  } else {
    try { await access(join(root, '.env')); process.loadEnvFile(join(root, '.env')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    const config = await loadDeliveryApiConfiguration(configPath);
    if (command === 'register') {
      if (!flags.has('--job')) throw new Error(usage);
      process.stdout.write('Validating completed publication and all referenced storage files…\n');
      const result = await registerDeliveryPublication(config, resolve(flags.get('--job')));
      process.stdout.write(JSON.stringify(result) + '\n');
    } else {
      const host = await startDeliveryApi(config, { token: process.env.DT_DELIVERY_API_TOKEN });
      const address = host.server.address(), port = typeof address === 'object' ? address.port : config.port;
      const name = config.host.includes(':') ? `[${config.host}]` : config.host;
      process.stdout.write(`Delivery API listening: http://${name}:${port}/\nAllowed web origin: ${config.origin}\nScope: ${config.scope}\n`);
      if (host.tokenFile) process.stdout.write(`Local API token file (value not printed): ${host.tokenFile}\n`);
      else process.stdout.write('Authorization supplied by DT_DELIVERY_API_TOKEN.\n');
      for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => { void host.close().catch(() => { process.exitCode = 1; }); });
    }
  }
} catch (error) { process.stderr.write((error.code ? 'Cannot read configuration or start API; check file access, settings and port.' : error.message) + '\n'); process.exitCode = 1; }
