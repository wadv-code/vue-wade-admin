import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

/**
 * 是否是移动端
 * @returns { isMobile }
 */
export function useIsMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = breakpoints.smaller('md');
  return { isMobile };
}
