import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router/index' //引入router 目录下面的index.js路由
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router, //调用
  render: h => h(App)
})
