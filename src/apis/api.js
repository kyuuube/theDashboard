import request from '../utils/request';

// 根据日期获取用户
export const getUserByDate = (params) => request.get('/api/getUserByDate', { params });

// 获取详情
export const getDetail = (id) => request.get(`/api/getDetail/${id}`);

// 导入
export const importData = (data) => request.post(`/api/import`, data);