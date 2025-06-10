/**
 * 等待时间
 * @param wait
 * @returns
 */
export const sleep = async (wait = 2000) => {
  return new Promise((resolve) => setTimeout(resolve, wait));
};
