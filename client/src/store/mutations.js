import {
  TOGGLE_IS_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from './mutations-types'

export default {
  [TOGGLE_IS_LOADING] (state) {
    state.isLoading = !state.isLoading
  },

  [SIGN_IN_SUCCESS] (state, user) {
    state.user = user
    state.errors = {}
  },

  [SIGN_IN_FAILURE] (state, { errors }) {
    state.errors = errors
  },

  [SIGN_UP_SUCCESS] (state, user) {
    state.user = user
    state.errors = {}
  },

  [SIGN_UP_FAILURE] (state, { errors }) {
    state.errors = errors
  },

  [SIGN_OUT_SUCCESS] (state) {
    state.user = {}
  },

  [SIGN_OUT_FAILURE] () { }
}
