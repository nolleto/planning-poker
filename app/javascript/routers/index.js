import VueRouter from 'vue-router'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const routes = [
  { path: '/', component: Home },
  { path: '/users/sign_in', component: SignIn },
  { path: '/users/sign_up', component: SignUp }
]

export default new VueRouter({
  mode: 'history',
  routes
})
