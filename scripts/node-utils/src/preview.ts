import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { basename, dirname, join } from 'node:path';
import { startLookup } from './lookup';
import {
  cleanRecursively,
  clearAndCopy,
  filterDistDirs,
  findDistDirs,
} from './file';
import consola from 'consola';
import { colors } from '.';

async function startPreview() {
  const results = await findDistDirs(process.cwd(), [
    'node_modules',
    '.git',
    '.turbo',
    'dist.zip',
    '**/scripts/node-utils/preview/*',
  ]);
  // 只保留前端包
  const roots = await filterDistDirs(results, /\.html$/i);
  consola.log(
    `  ${colors.green('❤')}  ${colors.yellow(`Found ${roots.length} front-end packages.`)}`,
  );
  console.log();
  const previewName = 'preview';
  // 所有前端集合
  // const roots = filterDist.map((v) => dirname(v));
  const previewPath = join(__dirname, `../${previewName}`);
  // 删除目标目录所有文件
  await cleanRecursively(previewPath, false);
  // 复制dist到{previewName}文件中
  for (const path of roots) {
    const name = basename(
      join(path, path.indexOf('.vitepress') !== -1 ? '../../' : '../'),
    );
    await clearAndCopy(path, join(previewPath, name));
  }
  // 创建服务
  const app = express();
  const PORT = 9999;
  // 托管前端dist目录
  app.use(express.static(previewPath));
  // API代理配置
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
  app.listen(PORT, '0.0.0.0', () => {
    for (const path of roots) {
      const name = basename(
        join(path, path.indexOf('.vitepress') !== -1 ? '../../' : '../'),
      );
      consola.log(colors.grey(`  ★  ${path}`));
      consola.log(
        `  ${colors.green('➜')}  ${colors.bold(name)}: ${colors.cyan(`http://localhost:${PORT}/${name}`)}`,
      );
    }
    console.log();
  });
}

export { startPreview };
