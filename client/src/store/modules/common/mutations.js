import {
  TOGGLE_IS_LOADING
} from './mutations-types'

export default {
  [TOGGLE_IS_LOADING] (state) {
    state.isLoading = !state.isLoading
  }
}
