import {
  CLEAN_ERROR,
  CLEAN_ERRORS,
  SET_ERRORS,
  SET_USER,
  CLEAN_USER
} from './mutations-types'

export default {
  [SET_USER] (state, user) {
    state.user = user
  },

  [CLEAN_USER] (state) {
    state.user = {}
  },

  [SET_ERRORS] (state, { path, errors }) {
    state.errors[path] = errors
  },

  [CLEAN_ERRORS] (state, { path }) {
    state.errors[path] = {}
  },

  [CLEAN_ERROR] (state, { path, errorName }) {
    delete state.errors[path][errorName]
  }
}
