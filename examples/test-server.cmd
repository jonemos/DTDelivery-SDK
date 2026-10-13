@echo off
setlocal DisableDelayedExpansion
chcp 65001 >nul
cd /d "%~dp0web"
where node >nul 2>nul
if errorlevel 1 goto missing_tools
where pnpm >nul 2>nul
if errorlevel 1 goto missing_tools
node -e "const [a,b]=process.versions.node.split('.').map(Number);process.exit(a>24||a===24&&b>=16?0:1)"
if errorlevel 1 goto missing_tools
call pnpm install --ignore-scripts
if errorlevel 1 goto failed
call pnpm update @dt/delivery-sdk --no-save --ignore-scripts
if errorlevel 1 goto failed
rem Local file dependency fetching may link SDK source files even with copy imports.
rem Detach only hash-verified public files; leave installed copies and SDK content unchanged.
node -e "const f=require('node:fs'),p=require('node:path'),c=require('node:crypto'),r=p.resolve('../..'),m=p.join(r,'sdk-manifest.json'),b=f.readFileSync(m),a=[...JSON.parse(b).files,{path:'sdk-manifest.json',sha256:c.createHash('sha256').update(b).digest('hex')}];for(const e of a){const t=p.resolve(r,e.path),s=f.lstatSync(t);if(!t.startsWith(r+p.sep)||s.isSymbolicLink()||f.realpathSync(t).toLowerCase()!==t.toLowerCase())throw Error('Unsafe SDK path');if(s.nlink>1){const v=f.readFileSync(t);if(c.createHash('sha256').update(v).digest('hex')!==e.sha256)throw Error('Changed SDK file');const n=t+'.copy-'+c.randomUUID();f.writeFileSync(n,v,{flag:'wx'});f.renameSync(n,t);}}"
if errorlevel 1 goto failed
echo Opening http://127.0.0.1:5183/ - keep this window open. Ctrl+C stops the test server.
call pnpm exec vite --host 127.0.0.1 --port 5183 --strictPort --open
set "result=%errorlevel%"
if not "%result%"=="0" pause
exit /b %result%
:missing_tools
echo Install Node.js 24.16 or later and pnpm, then run this file again.
pause
exit /b 1
:failed
echo Test page dependencies could not be installed. Check the preceding error.
pause
exit /b 1
