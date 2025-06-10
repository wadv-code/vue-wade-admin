import { getUserInfo } from '@/api/user';
import { Local, Session } from '@wade/core';
import { defineStore } from 'pinia';

/**
 * 用户信息
 * @methods getUserInfo 获取用户信息
 */
export const useUserInfo = defineStore('user', {
  state: (): UserInfoState => ({
    userInfo: {
      id: '',
      login_name: '',
      avatar: '',
      job: '',
      name: '',
      organization: '',
      role: '',
      dep_id: '',
      org_id: '',
      sex: '0',
    },
    login_name: Local.get('login_name'),
  }),
  actions: {
    async getUserInfo() {
      const { data } = await getUserInfo();
      this.userInfo = data;
    },
  },
});
