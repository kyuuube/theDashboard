import Vue from 'vue'
import { Select, Option, DatePicker, MessageBox, Dialog, Loading} from 'element-ui'

Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Loading)
Vue.prototype.$msgbox = MessageBox