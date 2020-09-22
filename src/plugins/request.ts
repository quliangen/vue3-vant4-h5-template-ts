import axios from 'axios';
import { Toast, Dialog } from 'vant';
const projectSettings = require('@/settings.js');

// 创建axios实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API + projectSettings.apiPath,
  timeout: 30000, // 请求超时时间
});

// request拦截器
// Add a request interceptor
instance.interceptors.request.use(
  config => {
    Toast.loading({
      message: '加载中...',
      duration: 0,
      forbidClick: true, //禁止背景点击
    });
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // 关闭loading
    Toast.clear();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const res = response.data;
    // res.code http status code  res.sysCode 自定义业务码 示例：0标识服务器处理正常，可与后台商定后设置
    if (res.code === 200 && res.sysCode === 0) {
      if (res.msg) {
        // api操作提示，建议后台给msg值，前端弹出即可。
        Toast.success({
          message: res.msg,
          duration: 3 * 1000,
        });
      }
      return response.data;
    } else {
      // 非200状态码 弹出非空业务异常提示信息：errorMsg
      if (res.errorMsg) {
        Toast({
          message: res.errorMsg,
          duration: 5 * 1000,
        });
      }
      return Promise.reject(res);
    }
  },
  error => {
    // 关闭loading
    Toast.clear();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Dialog.confirm({
      title: '提示',
      message: '服务器异常' + (error.message.indexOf('timeout') > -1 ? '请求超时' : '抱歉服务器忙！请稍后重试！'),
      confirmButtonText: '我知道了',
    });
    return Promise.reject(error);
  },
);

export default instance;
