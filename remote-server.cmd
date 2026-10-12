@echo off
setlocal DisableDelayedExpansion
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js 24.16 or later, then run this file again.
  pause
  exit /b 1
)
node server/cli.mjs start --config delivery-api.config.json
set "result=%errorlevel%"
if not "%result%"=="0" pause
exit /b %result%
