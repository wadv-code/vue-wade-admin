import { Session } from '@wade/core';
import { $t } from '@wade/locales';
import { toast } from '@wade/ui';
import type { AxiosInstance } from 'axios';
import axios from 'axios';

// token key
// const TokenKey = "Authorization";
// 超时时间
const timeout = 10 * 1000;

// 配置新建一个 axios 实例
const http: AxiosInstance = axios.create({
  // adapter: cacheAdapter,
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: '',
  timeout,
});

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么 token
    // if (token.value) config.headers![TokenKey] = `Bearer ${token.value}`;
    // config.headers[headerSign] = getCryptoString();
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
http.interceptors.response.use(
  async (response) => {
    const res = response.data;
    if (res.code !== 200) {
      toast.warning($t('tips.toast'), {
        description: res.message,
        action: {
          label: $t('common.undo'),
          onClick: () => console.log($t('common.undo')),
        },
      });
      return Promise.reject(http.interceptors.response);
    }
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response.status === 401) {
      toast.warning($t('tips.toast'), {
        description: $t('tips.reauthorized'),
        action: {
          label: $t('common.undo'),
          onClick: () => console.log($t('common.undo')),
        },
      });
      Session.clear(); // 清除浏览器全部临时缓存
      // window.location.href = "/"; // 去登录页
    } else if (error.response.status === 504) {
      toast.error($t('tips.toast'), {
        description: $t('tips.notApi'),
        action: {
          label: $t('common.undo'),
          onClick: () => console.log($t('common.undo')),
        },
      });
    } else if (error.message.indexOf('timeout') !== -1) {
      console.warn('网络超时');
    } else if (error.message === 'Network Error') {
      console.warn('网络连接错误');
    } else {
      if (error.response.data) console.warn(error.response.statusText);
      else console.warn('接口路径找不到');
    }
    return Promise.reject(error);
  },
);

// 导出 axios 实例
export { http };
