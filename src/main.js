import Vue from 'vue'
import App from './App.vue'
import router from './router'

import JDesigner from '../lib'

Vue.config.productionTip = false

Vue.use(JDesigner)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
