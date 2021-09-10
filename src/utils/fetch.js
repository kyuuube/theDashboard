/* eslint-disable */
// import { Message } from 'element-ui';
// import store from '@/store';
// import * as $account from '@/store/modules/account/types';

const jsonParse = (data) => {
    return JSON.parse(data.resultJson);
};

const getPayload = () => {
    //     let currentCompanyId = store.getters[`${$account.namespace}/${$account.getters.currentCompanyId}`];
    //     let currentCommunityId = store.getters[`${$account.namespace}/${$account.getters.currentCommunityId}`];
    //     let level = store.getters[`${$account.namespace}/${$account.getters.level}`];
    const payload = {};
    //     if (level === 1) {
    //         payload.companyId = currentCompanyId;
    //     }
    //     if (level === 2) {
    //         payload.companyId = currentCompanyId;
    //         payload.communityId = currentCommunityId;
    //     }
    return payload;
};

export default fetch = async (f, payload) => {
    return new Promise(async (resolve, reject) => {
        //         const payload = getPayload();
        const { data, code } = await f(payload).catch((e) => e);
        if (code !== 0) {
            Message.error('获取数据失败');
            return reject();
        }
        const result = data;
        resolve({ result });
    });
};
