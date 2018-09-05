import Vue from 'vue/dist/vue.esm'
import App from '../pages/Home'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    components: { App }
  })
})
