import { getUserInfo } from '@/api/user';
import avatarImg from '@/assets/image/avatar.jpg';
import { Session } from '@wade/core';
import { defineStore } from 'pinia';

/**
 * 用户信息
 * @methods getUserInfo 获取用户信息
 */
export const useUserInfo = defineStore('user', {
  state: (): UserInfoState => ({
    userInfo: {
      id: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'admin',
      name: 'Wade',
      password: '',
      sex: 0,
      seq: 0,
      age: 0,
      avatar: avatarImg,
      remarks: '',
      email: '853925809@qq.com',
    },
    username: Session.get('username'),
  }),
  actions: {
    async getUserInfo() {
      const { data } = await getUserInfo();
      this.username = data.username;
      this.userInfo = data;
      Session.set('username', data.username);
    },
  },
});
