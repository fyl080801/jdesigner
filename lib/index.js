import Vue from 'vue'
// import Button from 'element-ui/lib/button'
// import Form from 'element-ui/lib/form'
// import FormItem from 'element-ui/lib/form-item'
// import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

import JFormer from 'jformer'

import { Main } from './layouts'

// Vue.use(Button)
// Vue.use(Form)
// Vue.use(FormItem)
Vue.use(JFormer)

const install = function(Vue) {
  Vue.component('j-designer', Main)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ...Main,
  install,
  base: JFormer.base
}
