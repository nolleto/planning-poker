import {
  TOGGLE_IS_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from './mutations-types'
import router from '../routers'
import { create } from '../api/users'
import { signIn, signOut } from '../api/sessions'

export default {
  signIn ({ commit }, { userOrEmail, password }) {
    commit(TOGGLE_IS_LOADING)

    signIn(userOrEmail, password)
      .then(
        ({ user }) => {
          commit(SIGN_IN_SUCCESS, user)
          router.push('/')
        }, ({ response }) => {
          commit(SIGN_IN_FAILURE, response.data)
        }
      )
      .finally(() => commit(TOGGLE_IS_LOADING))
  },

  signUp ({ commit }, data) {
    commit(TOGGLE_IS_LOADING)

    create(data)
      .then(
        ({ user }) => {
          commit(SIGN_UP_SUCCESS, user)
          router.push('/')
        }, ({ response }) => {
          commit(SIGN_UP_FAILURE, response.data)
        }
      )
      .finally(() => commit(TOGGLE_IS_LOADING))
  },

  signOut ({ commit }) {
    commit(TOGGLE_IS_LOADING)

    signOut()
      .then(
        () => {
          commit(SIGN_OUT_SUCCESS)
          router.push('/')
        }, () => {
          commit(SIGN_OUT_FAILURE)
        }
      )
      .finally(() => commit(TOGGLE_IS_LOADING))
  }
}
