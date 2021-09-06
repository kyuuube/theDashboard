import Vue from 'vue'
import { Select, Option, DatePicker, MessageBox, Dialog} from 'element-ui'

Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.prototype.$msgbox = MessageBox