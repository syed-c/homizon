#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(process.cwd(), 'app');
const SHARED_IMPORT = "@/app/[service]/[area]/service-area-page-client";

function walk(dir, out = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next') continue;
      walk(p, out);
    } else if (e.isFile()) {
      out.push(p);
    }
  }
  return out;
}

function fixFile(fp) {
  if (!fp.endsWith('page.tsx')) return false;
  let src = fs.readFileSync(fp, 'utf8');
  const before = src;
  // Replace ./service-area-page-client and ../service-area-page-client with shared path
  src = src
    .replace(/from\s+["']\.\/service-area-page-client["']/g, `from '${SHARED_IMPORT}'`)
    .replace(/from\s+["']\.\.\/service-area-page-client["']/g, `from '${SHARED_IMPORT}'`);

  if (src !== before) {
    fs.writeFileSync(fp, src, 'utf8');
    console.log('Fixed:', path.relative(process.cwd(), fp));
    return true;
  }
  return false;
}

(function run(){
  if (!fs.existsSync(APP_DIR)) {
    console.error('App directory not found');
    process.exit(1);
  }
  const files = walk(APP_DIR);
  let changed = 0;
  for (const f of files) {
    try { if (fixFile(f)) changed++; } catch (e) { console.error('Error on', f, e.message); }
  }
  console.log('Updated files:', changed);
})();
