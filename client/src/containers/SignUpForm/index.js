import { connect } from 'vuex-connect'
import SignUpForm from '@/components/SignUpForm'

export default connect({
  gettersToProps: {
    getErrorByName: 'login/getErrorByName'
  },

  stateToProps: {
    isLoading: ({ isLoading }) => isLoading
  },

  actionsToEvents: {
    'sign-up': (dispatch, data) => dispatch('login/signUp', data)
  }
})('SignUpFormContainer', SignUpForm)
