<template>
  <div>
    <div class="">
      <div class="alert alert-warning">
        <div class="container">任务列表</div>
      </div>
      <div class="container">
        <h5>添加任务>></h5>
        <input type="text" class="form-control" @keyup.enter="addTodo" placeholder="请输入你想添加的任务，并按enter确定添加"
               v-model="todo">
        <div class="clearfix sumContainer" v-show="todoList.length">
          <span class="sum float-left">{{unFinishedNum}}任务没有完成</span>
          <nav class="nav justify-content-end float-right">
            <li class="nav-item">
              <a href="#all" class="nav-link" >全部任务</a>
            </li>
            <li class="nav-item">
              <a href="#finished" class="nav-link">已完成任务</a>
            </li>
            <li class="nav-item">
              <a href="#unfinish" class="nav-link">未完成任务</a>
            </li>
          </nav>
        </div>
        <h5 class="pt-2">任务列表>></h5>
        <ul class="list-group">
          <li class="no-listItem list-group-item" v-show="!todoList.length">当前没有任务</li>
          <li class="list-group-item" @key="index" v-for="todo,index in todoList"
              :class="{'finished-task':todo.isFinished,
          'isEditTodo':isEditTodo === todo}">
            <div class="views">
              <input type="checkbox" v-model="todo.isFinished">
              <label class="title" @dblclick="openEdit(todo)">{{todo.title}}</label>
              <button type="button" class="close" aria-label="Close" @click="delTodo(todo)">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <input type="text" class="form-control" v-model="todo.title" v-focus="isEditTodo === todo"
                   @keyup.enter="editTodo" @blur="editTodo" @keyup.esc="cancelEdit(todo)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script src="@/lib/bootstrap/jquery-1.11.2.min.js"></script>
<script>
  var store = {
    fetch (key) {
      return JSON.parse(localStorage.getItem(key)) || []
    },
    set (key, value) {
      return localStorage.setItem(key, JSON.stringify(value))
    }
  }
var vm = {
  data () {
    return {
      todo: '',
      todoList: store.fetch('todoList'),
      isEditTodo: '',
      beforeTitle : ''
    }
  },
  computed: {
    unFinishedNum () {
      return this.todoList.filter( (item) => !item.isFinished).length
    }
  },
  methods: {
    addTodo () {
      this.todoList.push({
        title: this.todo,
        isFinished: false
      })
      this.todo = ''
    },
    delTodo (todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
    },
    openEdit (todo) {
      this.beforeTitle = todo.title
      this.isEditTodo = todo
    },
    editTodo () {
      this.isEditTodo = ''
    },
    cancelEdit (todo) {
      let index = this.todoList.indexOf(todo);
      this.todoList[index].title = this.beforeTitle
      this.isEditTodo = ''
      this.beforeTitle = ''
    }
  },
  watch: {
    todoList: {
      handler () {
        store.set('todoList', this.todoList)
      },
      deep: true
    }
  },
  directives: {
    'focus': {
      update (el, bindings) {
        if(bindings.value === true) {
          el.focus()
        }
      }
    }
  }
}
  export default vm
</script>
<style>
  .list-group-item .form-control{
    display: none;
  }
  .list-group-item.isEditTodo .views{
    display: none;
  }
  .list-group-item.isEditTodo .form-control {
    display: block;
  }
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
