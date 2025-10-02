#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  const key = process.argv[i];
  const val = process.argv[i + 1] || '';
  if (key && key.startsWith('--')) args.set(key.slice(2), val);
}

const pkgPath = path.resolve(process.cwd(), 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (args.get('name')) pkg.name = args.get('name');
if (args.get('description')) pkg.description = args.get('description');
if (args.get('repo')) {
  const repo = args.get('repo');
  pkg.repository = { type: 'git', url: `git+https://github.com/${repo}.git` };
  pkg.bugs = { url: `https://github.com/${repo}/issues` };
  pkg.homepage = `https://github.com/${repo}#readme`;
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log('Updated package.json:', { name: pkg.name, description: pkg.description });

