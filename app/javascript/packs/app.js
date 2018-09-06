import Vue from 'vue/dist/vue.esm'
import App from '../pages/Home'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    render: h => h(App)
  })
})
