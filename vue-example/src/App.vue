<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark">
    <ul class="nav nav-pills">
      <router-link tag="li" class="nav-item" active-class="active" to="/" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/document">
        <a class="nav-link">Document</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/about">
        <a class="nav-link">About</a>
      </router-link>
      <router-link tag="li" class="nav-item" active-class="active" to="/user">
        <a class="nav-link">User</a>
      </router-link>
    </ul>
    </nav>
    <div class="card">
      <div class="card-body">
        <router-view name="title" class="card-title"/>
        <router-view class="card-text"/>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  .active{
    background: yellow;
  }
</style>
