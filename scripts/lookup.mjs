import { startLookup } from '@wade/node-utils';

/**
 * 全局搜索
 * pnpm lookup --root=查找目录 --reg=查找字符串或者正则
 * --root=指定查找目录（默认执行根目录）
 * --reg=指定查找字符串或者正则（注意：--reg=不要头和尾的"/"斜杠）
 * --delete（加上就会把所有找到的删除掉）
 * @param {string} root 指定根目录
 * @param {string[]} excludes 排除文件
 * @param {ReplaceTargets} targets 搜索集合
 * @description targets => [
 *  {
 *    name: '项目名称（备份用）',
 *    regex: '正则',
 *    root: '匹配指定目录，不填默认本mjs为根目录目录',
 *  }
 * ]
 */
(async () => {
  // 排除目录或文件夹
  const excludes = ['node_modules', 'dist', '.git', '.turbo', 'dist.zip'];
  // 要修改的文件
  const targets = [
    // {
    //   name: "查找中文文件",
    //   regex: /[\u4e00-\u9fff]/,
    //   pattern: "**/*",
    // },
    // {
    //   name: "查找带copy的文件",
    //   regex: /copy/,
    //   pattern: "**/*",
    // },
    {
      name: '正则匹配中文名称文件',
      pattern: '**/*',
    },
  ];
  await startLookup({
    // 目标集合
    targets,
    // 排除文件
    excludes,
    // 不填默认为根目录
    // root: 'D:\\projects\\Outside\\wade-admin',
  });
})();
