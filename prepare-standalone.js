/*
  Copies static assets into the standalone output so that
  `node .next/standalone/server.js` can serve them correctly.
*/
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const standaloneDir = path.join(root, '.next', 'standalone');
const staticSrc = path.join(root, '.next', 'static');
const publicSrc = path.join(root, 'public');
const staticDest = path.join(standaloneDir, '.next', 'static');
const publicDest = path.join(standaloneDir, 'public');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else if (entry.isSymbolicLink()) {
      const target = fs.readlinkSync(s);
      try {
        fs.symlinkSync(target, d);
      } catch (_) {
        /* skip on windows if fails */
      }
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

try {
  // Ensure nested .next exists inside standalone for static assets
  fs.mkdirSync(path.join(standaloneDir, '.next'), { recursive: true });
  copyDir(staticSrc, staticDest);
  copyDir(publicSrc, publicDest);
  console.log('[prepare-standalone] Copied static and public assets.');
} catch (err) {
  console.error('[prepare-standalone:error]', err);
  process.exitCode = 0; // do not fail build hard
}
