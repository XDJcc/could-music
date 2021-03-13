import Vue from 'vue'
import App from './App.vue'

// 导入Element-ui
import element from '@/utils/element'
Vue.use(element)

// 导入全局初始化样式
import '@/style/base.scss';

// 导入路由组件
import router from '@/router/index.js'

// 导入moment插件
import moment from 'moment';

// 全局过滤器
Vue.filter('formatDuration', (dt) => {
  // 转分
  let min = Math.floor(dt / 1000 / 60);
  min = min < 10 ? '0' + min : min;
  // 秒
  let sec = Math.floor((dt / 1000) % 60);
  sec = sec < 10 ? '0' + sec : sec;
  return min + ':' + sec;
})
Vue.filter('formatTime', (time) => {
  return moment(time).format('YYYY-MM-DD hh:mm:ss');
})
Vue.filter('formatCount', (count) => {
  if (count / 10000 > 10) {
    return parseInt(count / 10000) + '万';
  } else {
    return count;
  }
})

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')