import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Content from '@/views/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    }
  ]
})
