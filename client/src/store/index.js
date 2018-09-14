import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import common from './modules/common'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  ...common,
  plugins: [
    createPersistedState({
      paths: ['auth.user']
    })
  ]
})
