import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import Api from './utils/Api.js'

Vue.prototype.dayjs = dayjs
Vue.prototype.Api = Api

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
