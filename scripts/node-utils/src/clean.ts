import { normalize } from 'node:path';
import { cleanTargetsRecursively } from './file';
import type { StartCleanOptions } from './type';

/**
 * 全局替换
 * @param {string} root 指定根目录
 * @param {string[]} targets 替换集合
 * @param {string[]} excludes 排除文件
 */
async function startClean(option: StartCleanOptions) {
  const { targets = [], excludes = [], root = process.cwd() } = option;
  // 去掉node和文件路径
  const args = process.argv.slice(2);
  const rootPath = args.find((arg) => arg.startsWith('--root'))?.split('=')[1];
  const rootSrc = normalize(rootPath || '') || root;

  const deleteLockFile = process.argv.includes('--del-lock');
  const cleanupTargets = [...targets];
  if (deleteLockFile) {
    cleanupTargets.push('pnpm-lock.yaml');
    // cleanupTargets.push("package-lock.json");
  }

  console.log('\x1B[46mStarting cleanup.\x1B[0m');
  console.log();
  console.log(`\x1B[36mTargets: ${cleanupTargets.join(', ')}\x1B[0m`);
  console.log(`\x1B[36mRoot: ${rootSrc}\x1B[0m`);
  console.log();

  try {
    await cleanTargetsRecursively(rootSrc, cleanupTargets, excludes);
    console.log();
    console.log('\x1B[42mCleanup process completed.\x1B[0m');
    console.log();
  } catch (error) {
    // console.error(`Unexpected error during cleanup: ${error.message}`);
  }
}

export { startClean };
