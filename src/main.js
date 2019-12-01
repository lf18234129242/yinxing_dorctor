// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import './assets/js/fontsize.js'
import { RadioGroup, Radio, CellGroup, Cell, Button, Popup, Picker, Toast, Uploader } from 'vant';

Vue.use(RadioGroup).use(Radio).use(CellGroup).use(Cell).use(Button).use(Popup).use(Picker).use(Toast).use(Uploader);

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // 为页面添加标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
