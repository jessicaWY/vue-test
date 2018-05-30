<template>
  <div>
  <nav class="navbar bg-light">
    <ul class="nav">
      <router-link class="nav-item" :key="index" v-for="item,index of list" :to="{path:'/user/'+item.userId,query:
      {info:'follow'}}">
        <a class="nav-link">{{item.name}}</a>
      </router-link>
    </ul>
  </nav>
  <div class="card"  v-if="$route.params.userId" v-for="userInfo in userInfo">
    <div class="card-body">
      <p>性别：{{userInfo.sex}}</p>
      <p>年龄: {{userInfo.age}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
      <hr>
      <div style="text-align: center">
        <router-link :to="{path: '',query: {info: 'follow'}}" exact>他的收藏</router-link>
        <router-link :to="{path: '',query: {info: 'share'}}" exact>他的分享</router-link>
        <p>{{$route.query.info}}</p>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            userId: '01',
            name: 'leo1',
            sex: '男',
            age: 23,
            hobby: '吃饭'
          },
          {
            userId: '02',
            name: 'leo2',
            sex: '女',
            age: 24,
            hobby: '睡觉'
          },
          {
            userId: '03',
            name: 'leo3',
            sex: '男',
            age: 25,
            hobby: '打豆豆'
          }
        ],
        userInfo: {}
      }
    },
    created () {
      this.getUserInfo()
    },
    watch: {
      $route () {
        console.log(typeof this.$route.params.userId)
        this.getUserInfo()
      }
    },
    methods: {
      getUserInfo () {
        let id = this.$route.params.userId
        this.userInfo = this.list.filter((item) => {
          return item.userId === id
        })
        console.log(this.userInfo)
      }
    }
  }
</script>
<style>
  .is-active{
    background: yellow;
  }
</style>
