/* eslint-disable */
import isPlainObject from 'lodash/isPlainObject';
export const createProxy = (obj, config = {}) => {
    const proxy = Object.assign({}, obj);

    Object.keys(proxy).forEach((key) => {
        Object.defineProperty(proxy, key, {
            get() {
                return config.get ? config.get(obj, key) : obj[key];
            },
            set(value) {
                config.set ? config.set(obj, key, value) : (obj[key] = value);
            },
        });

        const value = obj[key];
        if (config.deep && isPlainObject(value)) {
            obj[key] = createProxy(value, config);
        }
    });

    return proxy;
};
export const resizeFontsize = (screenRatioByDesign = 16 / 9) => {
    let docEle = document.documentElement;

    function setHtmlFontSize() {
        var screenRatio = docEle.clientWidth / docEle.clientHeight;
        var fontSize = ((screenRatio > screenRatioByDesign ? screenRatioByDesign / screenRatio : 1) * docEle.clientWidth) / 100;

        docEle.style.fontSize = fontSize.toFixed(3) + 'px';
    }

    setHtmlFontSize();

    window.addEventListener('resize', setHtmlFontSize);
};

export const persistedState = (storeKey, storeState, state) => {
    let item = window.localStorage.getItem(storeKey);
    if (item !== undefined) {
        item = JSON.parse(item);
        Object.keys(storeState).forEach((key) => {
            storeState[key] = item && item[key] !== undefined ? item[key] : storeState[key];
        });
    }
    const storeStateProxy = createProxy(storeState, {
        deep: true,
        set(obj, key, value) {
            obj[key] = value;
            window.localStorage.setItem(storeKey, JSON.stringify(storeState));
        },
    });

    const proxyState = createProxy(Object.assign({}, storeStateProxy, state), {
        get(obj, key) {
            return key in storeStateProxy ? storeStateProxy[key] : state[key];
        },
        set(obj, key, value) {
            key in storeStateProxy ? (storeStateProxy[key] = value) : (state[key] = value);
        },
    });
    return proxyState;
};

export const toThousands = (number) => {
    const numberString = (number - 0 || 0).toString();

    const nums = numberString.split('.');
    let num = nums[0];

    let result = '';
    while (num.length > 3) {
        if (number < 0 && num.length === 4) {
            result = num.slice(-3) + result;
        } else {
            result = ',' + num.slice(-3) + result;
        }
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        nums[0] = num + result;
    }
    return nums[0];
};

export const getQueryVariable = (variable) => {
    const vars = window.location.href.split('?');
    const query = vars[1].split('&');
    for (let i = 0; i < query.length; i++) {
        let pair = query[i].split('=');
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
};

export const isEmpty = function (val) {
    // null or undefined
    if (val == null) return true;

    if (typeof val === 'undefined') return true;

    if (val === '') return true;

    return false;
};

export const strip = (num) => {
    if (num < 0.01) {
        return '0.01';
    } else {
        return Number.parseFloat(num).toFixed(2);
    }
};

export const setTitle = (node) => {
    const companyName = node.name.replace('公司', '');
    document.title = node.name.replace('公司', '') + '物业智能数据监控中心';
    const $title = document.querySelector('.main-title');
    console.log(companyName.length, companyName);
    if (companyName.length >= 10) {
        $title.style.fontSize = '1.26708rem';
    } else if (companyName.length > 2 && companyName.length < 10) {
        $title.style.fontSize = '1.52708rem';
    } else {
        $title.style.fontSize = '1.92708rem';
    }
};
export let nowClientWidth = document.documentElement.clientWidth;

export function nowSize(val, initWidth = 1920) {
    return val * (nowClientWidth / initWidth);
}

export const downFile = (blob, fileName) => {
    // 非IE下载
    if ('download' in document.createElement('a')) {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob); // 创建下载的链接
        link.download = fileName; // 下载后文件名
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click(); // 点击下载
        window.URL.revokeObjectURL(link.href); // 释放掉blob对象
        document.body.removeChild(link); // 下载完成移除元素
    } else {
        // IE10+下载
        window.navigator.msSaveBlob(blob, fileName);
    }
};