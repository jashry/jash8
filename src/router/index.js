import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Home from '@/components/Home'
import About from '@/components/About'
import Me from '@/components/Me'
import Article from '@/components/Article'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
