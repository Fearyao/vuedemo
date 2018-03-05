import Router from 'vue-router'
import HomePage from '../pages/HomePage'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
})

