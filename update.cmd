@echo off
setlocal DisableDelayedExpansion
rem Parse this block before PowerShell replaces this CMD during an update.
(
  "%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -File "%~dp0update.ps1" %*
  exit /b
)
