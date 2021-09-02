import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import { resizeFontsize } from './utils';
import * as utils from './utils';
import eventBut from './utils/eventBut';
import fetch from './utils/fetch';

Vue.prototype.$utils = utils;
Vue.prototype.$eventBut = eventBut;
Vue.prototype.$fetch = fetch;
Vue.config.productionTip = false
resizeFontsize();
router.beforeResolve((to, from, next) => {
    setTimeout(() => {
        window.initSuccess && window.initSuccess();
        // animationBg();
    }, 300);
    next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
