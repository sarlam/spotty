import Vue from 'vue'
import './plugins/vueKonva'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss/base.scss'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
const isE2E = process.env.VUE_APP_IS_E2E || false

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (isE2E) window.App = vue // attach the window to access the store from e2e
