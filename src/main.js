// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import remLayout from './components/js/remLayout.js'
import Mui from './lib/mui/js/mui.min.js'
import Qiniu from 'qiniu'
// import publicHeader from './components/header'

Vue.config.productionTip = false
Vue.prototype.$remLayout=remLayout.remLayout
Vue.prototype.$mediaUrl=remLayout.mediaUrl
Vue.prototype.$post=remLayout.post
Vue.prototype.$baseUrl=remLayout.baseUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
