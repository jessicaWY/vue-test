<template>
  <div>
    <div class="">
      <div class="alert alert-warning">
        <div class="container">任务列表</div>
      </div>
      <div class="container">
        <h5>添加任务>></h5>
        <input type="text" class="form-control" @keyup.enter="addTask" v-model="inputContent"
               placeholder="请输入你想添加的任务，并按enter确定添加">
        <div class="clearfix sumContainer" v-show="list.length">
          <span class="sum float-left">{{unfinishedTask}}任务没有完成</span>
          <nav class="nav justify-content-end float-right">
            <li class="nav-item">
              <a href="#all" class="nav-link" :class="{'active':visibility==='all'}">全部任务</a>
            </li>
            <li class="nav-item">
              <a href="#finished" class="nav-link" :class="{'active':visibility==='finished'}">已完成任务</a>
            </li>
            <li class="nav-item">
              <a href="#unfinish" class="nav-link" :class="{'active':visibility==='unfinish'}">未完成任务</a>
            </li>
          </nav>
        </div>
        <h5 class="pt-2">任务列表>></h5>
        <ul class="list-group">
          <li class="no-listItem list-group-item" v-show="!list.length">当前没有任务</li>
          <li class="list-group-item" v-for="listItem in filteredList" :class="{'finished-task':listItem.isFineshed}">
            <div class="views" v-show="listItem != editTaskContent">
              <input type="checkbox" v-model="listItem.isFineshed">
              <label class="title" @dblclick="editTask(listItem)">{{listItem.title}}</label>
              <button type="button" class="close" aria-label="Close" @click="delTask(listItem)">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <input v-show="listItem === editTaskContent" type="text" class="form-control"
                   v-model="listItem.title"
            @keyup.enter="editedTask" @blur="editedTask" @keyup.esc="cancelEditTask(listItem)" v-focus="listItem === editTaskContent">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script src="@/lib/bootstrap/jquery-1.11.2.min.js"></script>
<script>
  var store = {
    set (key, value) {
      return localStorage.setItem(key, JSON.stringify(value))
    },
    fetch (key) {
      return JSON.parse(localStorage.getItem(key)) || []
    }
  }
var vm = {
  data () {
    return {
      inputContent: '',
      editTaskContent: '', //记录编辑的任务项
      beforeTask: '', //记录编辑之前的任务项
      list: store.fetch('taskList'),
      visibility: 'all'
    }
  },
  computed: {
    unfinishedTask (){
      return this.list.filter((item, index) => {
        return !item.isFineshed
      }).length
    },
    filteredList () {
      console.log(11)
      switch (this.visibility) {
        case 'finished':
          return this.list.filter((item) => {return item.isFineshed});
          break;
        case 'unfinish':
          return this.list.filter((item) => {return !item.isFineshed});
          break;
        default:
          return this.list
      }
    }
  },
  methods: {
    addTask () {
      if (this.inputContent !== '') {
        this.list.push({title: this.inputContent, isFineshed: false})
        store.set('taskList', JSON.stringify(this.list))
        this.inputContent = ''
      }
    },
    delTask (listItem) {
      let index = this.list.indexOf(listItem);
      this.list.splice(index, 1)
    },
    editTask (listItem) {
      this.beforeTask = listItem.title
      this.editTaskContent = listItem
    },
    editedTask () {
      this.editTaskContent = ''
    },
    cancelEditTask (listItem) {
      let index = this.list.indexOf(listItem)
      this.list[index].title = this.beforeTask
      this.beforeTask = ''
      this.editTaskContent = ''
    }
  },
  watch: {
    list : {
      handler: function () {
        store.set('taskList', this.list)
      },
      deep: true
    }
  },
  directives: {
    'focus': {
      update (el, bindings) {
        if(bindings.value === true){
          el.focus();
        }
      }
    }
  }
}
  window.onhashchange = function(hashObj){
    var hash = window.location.hash.slice(1);console.log(vm);
    vm.data().visibility = hash;
  }
  export default vm
</script>
<style>
  .btn-remove{
display: inline-block;
    width: 10px;
    height: 10px;
  }
  .finished-task label{
    color: #dddddd;
    text-decoration: line-through;
  }
  .list-group-item .title{
    cursor: pointer;
  }
  .nav-link.active{
    border: 1px solid #818182;
  }
  .sumContainer{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .sumContainer .sum{
    line-height: 40px;
  }
</style>
