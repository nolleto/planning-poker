import { connect } from 'vuex-connect'
import SignUpForm from '../../components/SignUpForm'

export default connect({
  gettersToProps: {
    getErrorByName: 'getErrorByName'
  },

  stateToProps: {
    isLoading: ({ isLoading }) => isLoading
  },

  actionsToEvents: {
    'sign-up': (dispatch, data) => dispatch('signUp', data)
  }
})('SignUpFormContainer', SignUpForm)
