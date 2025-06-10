import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { minimatch } from 'minimatch';

/**
 * 复制一个目录的所有文件到另一个目录
 * @param src
 * @param dest
 */
export async function clearAndCopy(src: string, dest: string) {
  // 创建目标目录
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  // 删除目标目录所有文件
  await cleanRecursively(dest);

  // 读取源目录
  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      // 递归处理子目录
      clearAndCopy(srcPath, destPath);
    } else {
      // 复制文件
      copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * 匹配排除目录或文件
 * @param {string} itemPath - 当前遍历的目录路径
 * @param {string[]} excludes - 匹配目标
 */
export function matchPattern(itemPath: string, excludes: string[]) {
  return excludes.some((pattern) =>
    minimatch(itemPath, pattern, { matchBase: true }),
  );
}

/**
 * 递归查找并删除目标目录
 * @param {string} currentDir - 当前遍历的目录路径
 * @param {string[]} isCleanRoot - 是否最后删除根目录
 */
export async function cleanRecursively(
  currentDir: string,
  isCleanRoot?: boolean,
) {
  if (!existsSync(currentDir)) return;
  const items = await fs.readdir(currentDir);
  for (const item of items) {
    try {
      const itemPath = join(currentDir, item);
      // 匹配到目标目录或文件时直接删除
      await fs.rm(itemPath, { force: true, recursive: true });
      const stat = await fs.lstat(itemPath);
      if (stat.isDirectory()) {
        await cleanRecursively(itemPath);
      }
    } catch (error) {
      // console.error(`Error handling item ${item} in ${currentDir}: ${error.message}`);
    }
  }
  // 删除空文件夹
  isCleanRoot && (await fs.rm(currentDir, { force: true, recursive: true }));
}

/**
 * 递归查找并删除目标目录(只删除目标文件)
 * @param {string} currentDir - 当前遍历的目录路径
 * @param {string[]} targets - 目标集合
 * @param {string[]} excludes - 排除集合
 */
export async function cleanTargetsRecursively(
  currentDir: string,
  targets: string[],
  excludes: string[],
) {
  const files = await fs.readdir(currentDir);

  for (const file of files) {
    try {
      const filePath = join(currentDir, file);
      // 不能是排除文件
      if (!matchPattern(filePath, excludes)) {
        // 锁定文件
        if (matchPattern(filePath, targets)) {
          // 匹配到目标目录或文件时直接删除
          await fs.rm(filePath, { force: true, recursive: true });
          console.log(`\x1B[32m- Deleted: ${filePath}\x1B[0m`);
        }
        const stat = await fs.lstat(filePath);
        if (stat.isDirectory()) {
          await cleanTargetsRecursively(filePath, targets, excludes);
        }
      } else {
        console.log(`\x1B[2m* Skip: ${filePath}\x1B[0m`);
      }
    } catch (error) {
      // console.error(`Error handling file ${file} in ${currentDir}: ${error.message}`);
    }
  }
}

/**
 * 获取工程目录所有的dist文件
 * @param rootDir
 * @returns
 */
export async function findDistDirs(
  rootDir: string,
  exclude: string[],
  results: string[] = [],
) {
  const excludes = exclude || ['node_modules'];
  const files = await fs.readdir(rootDir);

  for (const file of files) {
    try {
      const filePath = join(rootDir, file);
      // 不能是排除文件
      if (!matchPattern(filePath, excludes)) {
        const stat = await fs.lstat(filePath);
        if (stat.isDirectory()) {
          if (file === 'dist') {
            results.push(filePath);
          } else {
            await findDistDirs(filePath, excludes, results);
          }
        }
      }
    } catch (error) {
      // console.error(`Error handling file ${file} in ${currentDir}: ${error.message}`);
    }
  }
  return results;
}

/**
 * 过来找到的dist文件（过来条件传入正则）
 * @param rootDirs
 * @returns
 */
export async function filterDistDirs(
  rootDirs: string[],
  regex: RegExp = /\.html$/i,
) {
  const results: string[] = [];
  async function filterDist() {
    for (const filePath of rootDirs) {
      const files = await fs.readdir(filePath);
      if (files.some((s) => regex.test(s))) {
        results.push(filePath);
      }
    }
  }
  await filterDist();
  return results;
}
