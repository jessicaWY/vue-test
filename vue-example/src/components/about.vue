<template>
  <div>
  <div>关于我</div>
  <nav class="navbar bg-light">
    <ul class="nav">
      <router-link :to="{name: 'About'}" tag="li" class="nav-item" active-class="active" exact>
        <a class="nav-link">Hobby</a>
      </router-link>
      <router-link :to="{name: 'Study'}" tag="li" class="nav-item" active-class="active">
        <a class="nav-link">Study</a>
      </router-link>
      <router-link :to="{name: 'Other'}" tag="li" class="nav-item" active-class="active">
        <a class="nav-link">Other</a>
      </router-link>
    </ul>
  </nav>
    <router-view></router-view>
  </div>
</template>
<style>
  .active{
    background: yellow;
  }
</style>
