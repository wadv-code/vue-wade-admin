const path = require('node:path');
const fs = require('node:fs');
const { getPackagesSync } = require('@manypkg/get-packages');

const tailwindPackages = [];

const { packages } = getPackagesSync(process.cwd());

for (const pkg of packages) {
  // 指定路径解析
  if (fs.existsSync(path.join(pkg.dir, 'postcss.config.mjs'))) {
    tailwindPackages.push(pkg.dir);
  }
}

const content = tailwindPackages.map((item) =>
  path
    .join(item, 'src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}')
    .replace(/\\/g, '/'),
);

module.exports = {
  content,
};
