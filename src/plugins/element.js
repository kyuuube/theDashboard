import Vue from 'vue';
import { Select, Option, DatePicker, MessageBox, Dialog, Loading, Upload, Button, Message } from 'element-ui';

Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Upload);
Vue.use(Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
