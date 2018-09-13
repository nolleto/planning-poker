import { connect } from 'vuex-connect'
import SignInForm from '../../components/SignInForm'

export default connect({
  stateToProps: {
    error: ({ errors }) => errors && errors[0],
    isLoading: ({ isLoading }) => isLoading
  },

  actionsToEvents: {
    'sign-in': (dispatch, data) => dispatch('signIn', data)
  }
})('SignInFormContainer', SignInForm)
