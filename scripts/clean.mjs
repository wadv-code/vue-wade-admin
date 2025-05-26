import { startClean } from '@wade/node-utils';

/**
 * 全局替换
 * @param {string} root 指定根目录
 * @param {string[]} excludes 排除文件
 * @param {string[]} targets 替换集合
 */
(async () => {
  // 排除文件（作者电脑配置需要排除的一些目录）
  const excludes = [
    // 排除我本地
    '**/scripts/node-utils/dist',
    // 排除我的Electron开发包
    '**/projects/Electron/electron-am-win',
    '**/projects/Electron/electron-deployer-win',
  ];
  // 要删除的目录及文件名称
  const targets = [
    'dist',
    '.turbo',
    'dist.7z',
    'dist.tar',
    'dist.zip',
    'backup_file',
    'node_modules',
  ];
  await startClean({
    // 目标集合
    targets,
    // 排除文件
    excludes,
    // 不填默认为根目录
    // root: "D:\\projects\\Outside\\wade-admin",
  });
})();
