import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Task from '@/components/task1'

Vue.use(Router)

import Home from '@/components/home'
import Document from '@/components/document'
import Title from '@/components/title'
import About from '@/components/about'
import Study from '@/components/about/study'
import Hobby from '@/components/about/hobby'
import Other from '@/components/about/other'
import User from '@/components/user'

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior (to, from, savePosition) {
    // console.log(to)
    // console.log(from)
    // console.log(savePosition)
    if(savePosition) {
      return savePosition
    }else{
      return {x:0,y:0}
    }
    if(to.hash){
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/document',
      name: 'Document',
      components: {
        default: Document,
        title: Title
      }
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '/about',
          name: 'About',
          component: Hobby
        },
        {
          path: 'study',
          name: 'Study',
          component: Study
        },
        {
          path: 'other',
          name: 'Other',
          component: Other
        }
      ]
    },
    {
      path: '/user/:userId?',
      name: 'User',
      component: User
    }
  ]
})
