import Vue from 'vue'
import App from './App.vue'
import observer from './utils/observer.js'
Vue.prototype.$observer = observer
import router from './router/router.js'
import store from './store/index.js'
import './common/components/index.js'
import "../public/fonticon/iconfont.css"
import "../public/reset.css"
import './components1/index.js'
import VueTouch from "vue-touch";
Vue.use(VueTouch,{name:'v-touch'})


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
