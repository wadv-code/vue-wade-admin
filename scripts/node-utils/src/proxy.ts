import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path, { dirname } from 'node:path';
import { getPackagesSync } from '@manypkg/get-packages';
import { startLookup } from './lookup';

async function startProxy() {
  const { packages } = getPackagesSync(process.cwd());
  // 排除目录或文件夹
  const excludes = ['node_modules', '.git', '.turbo', 'dist.zip'];
  // 要修改的文件
  const targets = [
    // {
    //   name: "查找中文文件",
    //   regex: /[\u4e00-\u9fff]/,
    //   pattern: "**/*",
    // },
    {
      name: '查找带html的文件',
      regex: /\.html$/i,
      pattern: '**/*',
    },
    // {
    //   name: '正则匹配中文名称文件',
    //   pattern: 'dist',
    // },
  ];
  const results = await startLookup({
    // 目标集合
    targets,
    // 排除文件
    excludes,
    // 不填默认为根目录
    log: false,
  });

  // 所有前端集合
  const roots = results.map((v) => dirname(v));
  console.log('results', roots);

  const app = express();
  const PORT = 9999;

  app.use('/web', express.static(roots[0]));
  app.use('/wade', express.static(roots[1]));

  // 托管前端dist目录
  // app.use(express.static(path.join(__dirname, '../dist')));
  // 静态页面
  // 这里一般设置你的静态资源路径
  // app.use(express.static(path.join(__dirname, '../www')));

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

  // // 处理前端路由
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../dist/index.html'));
  // });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export { startProxy };
