// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/lib/bootstrap/bootstrap.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

/* new Vue({
  el: '#demo',
  router,
  components: {Test},
  template: '<Test/>',
  data () {
    return {
      btn: false
    }
  },
  render (createElement) {
    return createElement(
      'ul',
      {
        class: {
          bg: this.btn
        },
        style: {
          fontSize: '18px'
        },
        attrs: {
          abc: 'youyou'
        },
        domProps: {
          innerHTML: '<li>我是html</li>'
        }
      },
      [
        createElement('li', 1),
        createElement('li', 2),
        createElement('li', 3)
      ]
    )
  }
}) */
