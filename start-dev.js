const { spawn } = require('child_process');
const path = require('path');

// Try to find the Next.js CLI
const nextPaths = [
  path.join(__dirname, 'node_modules', 'next', 'dist', 'cli', 'next-dev.js'),
  path.join(__dirname, 'node_modules', 'next', 'cli.js'),
  path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next'),
];

let nextPath = null;
for (const p of nextPaths) {
  try {
    const fs = require('fs');
    if (fs.existsSync(p)) {
      nextPath = p;
      break;
    }
  } catch (e) {
    // Continue to next path
  }
}

if (!nextPath) {
  console.error('Could not find Next.js CLI. Please check your installation.');
  process.exit(1);
}

console.log(`Starting Next.js dev server using: ${nextPath}`);

const devProcess = spawn('C:\\Program Files\\nodejs\\node.exe', [nextPath, 'dev'], {
  stdio: 'inherit',
  cwd: __dirname
});

devProcess.on('close', (code) => {
  console.log(`Next.js dev server exited with code ${code}`);
});