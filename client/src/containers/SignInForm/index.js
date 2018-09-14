import { connect } from 'vuex-connect'
import { getFromModule } from '@/adapters/vuex'
import SignInForm from '@/components/SignInForm'

const fromModule = getFromModule('login')

export default connect({
  stateToProps: {
    error: fromModule(({ errors }) => errors && errors[0]),
    isLoading: ({ isLoading }) => isLoading
  },

  actionsToEvents: {
    'sign-in': (dispatch, data) => dispatch('login/signIn', data)
  }
})('SignInFormContainer', SignInForm)
