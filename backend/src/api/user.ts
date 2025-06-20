import { http } from '@wade/request';

/**
 * 用户信息
 * @returns
 */
export async function getUserInfo() {
  return http<UserInfo>({
    url: '/api/userInfo',
    method: 'get',
  });
}

/**
 * 全部用户列表
 * @returns
 */
export async function getUserList() {
  return http<HttpResponse<UserInfo[]>>({
    url: '/api/user',
    method: 'get',
  });
}
