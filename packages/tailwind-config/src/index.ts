import path from 'node:path';
import { getPackagesSync } from '@manypkg/get-packages';
import type { Config } from 'tailwindcss';

const { packages } = getPackagesSync(process.cwd());

const tailwindPackages: string[] = [];

for (const pkg of packages) {
  // apps目录下和 @wade/tailwind-ui 包需要使用到 tailwindcss ui
  // if (fs.existsSync(path.join(pkg.dir, 'tailwind.config.mjs'))) {
  tailwindPackages.push(pkg.dir);
  // }
}

// // 共享的颜色配置
// export const colors = {
// 	primary: "#165DFF",
// 	secondary: "#722ED1",
// 	success: "#00B42A",
// 	warning: "#FF7D00",
// 	danger: "#F53F3F",
// 	dark: "#1D2129",
// 	"dark-2": "#4E5969",
// 	"dark-3": "#86909C",
// 	"light-1": "#F2F3F5",
// 	"light-2": "#F7F8FA",
// 	"light-3": "#FFFFFF",
// };

// // 共享的字体配置
// export const fontFamily = {
// 	inter: ["Inter", "system-ui", "sans-serif"],
// };

// 基础配置
export const baseConfig: Partial<Config> = {
  content: [
    // "../../apps/**/*.{js,ts,jsx,tsx}",
    // "../../packages/**/*.{js,ts,jsx,tsx}",
    // "../../backend/**/*.{js,ts,jsx,tsx}",
    './index.html',
    ...tailwindPackages.map((item) =>
      path.join(item, 'src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,html}'),
    ),
  ],
  // theme: {
  // 	extend: {
  // 		colors,
  // 		fontFamily,
  // 		spacing: {
  // 			"128": "32rem",
  // 			"144": "36rem",
  // 		},
  // 		borderRadius: {
  // 			"4xl": "2rem",
  // 		},
  // 	},
  // },
  plugins: [
    // require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    // require("@tailwindcss/aspect-ratio"),
  ],
};

// 默认导出整个配置
export default baseConfig;
