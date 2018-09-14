import { TOGGLE_IS_LOADING } from '../common/mutations-types'
import {
  CLEAN_ERRORS,
  SET_ERRORS,
  SET_USER,
  CLEAN_USER
} from './mutations-types'
import router from '@/routers'
import { create } from '@/api/users'
import { signIn, signOut } from '@/api/sessions'

export default {
  signIn ({ commit }, { userOrEmail, password }) {
    const path = 'signIn'
    commit(TOGGLE_IS_LOADING, null, { root: true })
    commit(CLEAN_ERRORS, { path })

    signIn(userOrEmail, password)
      .then(
        ({ user }) => {
          commit(SET_USER, user)
          router.push('/')
        }, ({ response }) => {
          commit(SET_ERRORS, { ...response.data, path })
        }
      )
      .finally(() => commit(TOGGLE_IS_LOADING, null, { root: true }))
  },

  signUp ({ commit }, data) {
    const path = 'signUp'
    commit(TOGGLE_IS_LOADING, null, { root: true })
    commit(CLEAN_ERRORS, { path })

    create(data)
      .then(
        ({ user }) => {
          commit(SET_USER, user)
          router.push('/')
        }, ({ response }) => {
          commit(SET_ERRORS, { ...response.data, path })
        }
      )
      .finally(() => commit(TOGGLE_IS_LOADING, null, { root: true }))
  },

  signOut ({ commit }) {
    const path = 'signOut'
    commit(TOGGLE_IS_LOADING, null, { root: true })
    commit(CLEAN_ERRORS, { path })

    signOut()
      .then(
        () => {
          commit(CLEAN_USER)
          router.push('/')
        }, ({ response }) => {
          commit(SET_ERRORS, { ...response.data, path })
        }
      )
      .finally(() => commit(TOGGLE_IS_LOADING, null, { root: true }))
  }
}
