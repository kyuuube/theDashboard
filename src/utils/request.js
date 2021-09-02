import axios from 'axios';
const config = require('../../config/index');
import { MessageBox, Message } from 'element-ui';
const request = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? config.build.api : config.dev.api,
});

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        const accountInfo = JSON.parse(localStorage.getItem('account') || '{}');
        config.headers = {
            token: accountInfo.token || window.localStorage.getItem('token'),
            filename: 'utf-8',
        };
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

let isReset = false;

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        if (axios.isCancel(response)) {
            return Promise.reject(response);
        }
        response = response.data;
        if (response.code === 401) {
            if (!isReset) {
                isReset = true;
                // console.log(this.$alert)
                MessageBox.alert('登录信息过时，请重新登录！', '登录超时', {
                    confirmButtonText: '返回登录页',
                    callback: () => {
                        window.location.href = `/#/login?redirect=${window.encodeURIComponent(window.location.hash.substring(1))}`;
                    },
                });
            }
            return Promise.reject();
        }

        if (response.code === 403) {
            Message.error('没有操作权限，请联系上级管理员');
            return Promise.reject();
        }

        if (response.code === 404) {
            Message.error('找不到资源');
            return Promise.reject();
        }

        if (response.code === 500) {
            if (response.msg != null && response.msg.indexOf('Exception') > -1) {
                Message.error('服务器繁忙');
                return Promise.reject();
            } else if (response.msg === null) {
                Message.error('服务器繁忙');
                return Promise.reject();
            }
        }

        if (response.code === 503 || response.status === 500 || response.status === 503 || response.status === 404) {
            Message.error('服务器繁忙');
            return Promise.reject();
        }
        return response;
    },
    (error) => {
        if (axios.isCancel(error)) {
            return Promise.reject({
                cancel: true,
            });
        }
        const msg = '服务器繁忙';
        Message.error(msg);
        return Promise.reject();
    }
);

export default request;
