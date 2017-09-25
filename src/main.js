// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//将路由引入到router变量中
//如果引入的是文件夹内部的index.js文件 可以省略不写index
import router from './router'

//全局样式
import './assets/css/reset.css';

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
