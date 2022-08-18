
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

const app = new Vue({
    ...App
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