import Main from './layouts/Main.vue'

const install = function(Vue) {
  Vue.component('j-designer', Main)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ...Main,
  install
}
