import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router'
import router from '../routers'
import NavHeader from '../components/NavHeader'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    components: { NavHeader }
  })
})
