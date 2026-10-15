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
node ..\detach-sdk.mjs
if errorlevel 1 goto failed
echo Opening http://127.0.0.1:5183/ - keep this window open. Ctrl+C stops the dev server.
call pnpm exec vite --host 127.0.0.1 --port 5183 --strictPort --open
set "result=%errorlevel%"
if not "%result%"=="0" pause
exit /b %result%
:missing_tools
echo Install Node.js 24.16 or later and pnpm for source development, or use test-server.cmd without installing them.
pause
exit /b 1
:failed
echo Development dependencies could not be installed. Check the preceding error.
pause
exit /b 1
