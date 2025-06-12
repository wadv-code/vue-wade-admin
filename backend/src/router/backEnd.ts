import { getUserInfo } from '@/api/user';
import { token } from '@wade/core';

/**
 * 后端控制路由：初始化方法，防止刷新时路由丢失
 * @method NextLoading 界面 loading 动画开始执行
 * @method useUserInfo().setUserInfos() 触发初始化用户信息 pinia
 * @method useRequestOldRoutes().setRequestOldRoutes() 存储接口原始路由（未处理component），根据需求选择使用
 * @method setAddRoute 添加动态路由
 * @method setFilterMenuAndCacheTagsViewRoutes 设置路由到 pinia routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
 */
export async function initBackEndControlRoutes() {
  // 无 token 停止执行下一步
  if (!token.value) return false;
  // 触发初始化用户信息 pinia
  const { data } = await getUserInfo();
  console.log('data', data);
  // // 存储接口原始路由（未处理component），根据需求选择使用
  // useRequestOldRoutes().setRequestOldRoutes(
  //   JSON.parse(JSON.stringify(business)),
  // );
  // // 处理路由（component），替换 dynamicRoutes（@/router/route）第一个顶级 children 的路由
  // dynamicRoutes[0].children = await backEndComponent(business);
  // // 添加动态路由
  // await setAddRoute();
  // // 设置路由到 pinia routesList 中（已处理成多级嵌套路由）及缓存多级嵌套数组处理后的一维数组
  // setFilterMenuAndCacheTagsViewRoutes();
}
