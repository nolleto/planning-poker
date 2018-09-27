import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users/sign_in',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/users/sign_up',
      name: 'Sign Up',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `Planning Poker - ${to.name}`
  next()
})

export default router
