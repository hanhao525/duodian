// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//将路由引入到router变量中
//如果引入的是文件夹内部的index.js文件 可以省略不写index
import router from './router'

//引入axios
import axios from 'axios'
Vue.prototype.axios = axios;

//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import resource from 'vue-resource'
Vue.use(resource);
//全局样式
import './assets/css/reset.css';
import './font_347965_t3ra0og8n2l3ow29/iconfont.css'

//屏幕适配
import flexible from './assets/js/flexible'
flexible(window)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router //挂载到实例
})
