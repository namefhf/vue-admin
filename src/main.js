import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import LottiePlayer from 'lottie-player-vue'
import bus from './utils/bus.js'
Vue.prototype.$bus = bus
Vue.use(LottiePlayer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
