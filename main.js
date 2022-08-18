
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import './common/mineIcon/iconfont.css'
import './common/mineNavIcon/iconfont.css'
import './common/wx/iconfont.css'
Vue.config.productionTip = false

// 引入loadsh
import _ from 'lodash'
// 将loadsh挂载到全局
Vue.prototype.loadsh = _

App.mpType = 'app'

import store from "@/store/index"
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif