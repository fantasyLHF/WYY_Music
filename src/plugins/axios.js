"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {//axios的配置http://musicapi.leanapp.cn/
  baseURL: 'http://music.kele8.cn/'
  // baseURL: process.env.baseURL || process.env.apiUrl || ""//设置请求的域名
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);//根据配置创建axios实例
//请求的前置配置
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
//请求的后置配置,得到结果对其操作
// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Plugin.install = function(Vue, options) {
//install方法就是插件安装方法
Plugin.install = function (Vue) {//插件配置
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {//给Vue原型对象添加属性
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};
//安装插件
Vue.use(Plugin)

export default Plugin;
