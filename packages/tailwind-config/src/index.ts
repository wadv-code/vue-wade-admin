import path from 'node:path';
import { getPackagesSync } from '@manypkg/get-packages';
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const { packages } = getPackagesSync(process.cwd());

const tailwindPackages: string[] = [];

for (const pkg of packages) {
  tailwindPackages.push(pkg.dir);
}

// 基础配置
export const baseConfig: Partial<Config> = {
  content: [
    './index.html',
    ...tailwindPackages.map((item) =>
      path.join(item, 'src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}'),
    ),
  ],
  plugins: [animate, typographyPlugin, formsPlugin],
};

// 默认导出整个配置
export default baseConfig;
