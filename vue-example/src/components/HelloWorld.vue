<template>
  <div class="hello">
    <div v-if="isExist" v-my-directive="param"></div>
    <h1>{{ msg }}</h1>
    <h2>Essential Linksssssssssssss</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2 :id="param">Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
      <router-link
        :to="{path: '/test'}"
        target="_blank"
      >
        到我的文件
      </router-link>
    </li>
      <li>
        <router-link
          :to="{path: '/task'}"
          target="_blank"
        >
          任务
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('my-directive', {
  bind: function () {
    console.log('bind', arguments)
  },
  update: function (newValue, oldValue) {
    console.log('update', newValue, oldValue)
  },
  unbind: function () {
    console.log('unbind', arguments)
  }
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Congradulations, you have start your jourery!!',
      isExist: true,
      param: 'first'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
