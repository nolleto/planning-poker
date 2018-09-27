import { connect } from 'vuex-connect'
import { CLEAN_ERRORS } from '@/store/modules/auth/mutations-types'
import { getFromModule } from '@/adapters/vuex'
import SignInForm from '@/components/SignInForm'

const fromModule = getFromModule('auth')

export default connect({
  stateToProps: {
    error: fromModule(({ errors }) => errors.signIn && errors.signIn[0]),
    isLoading: ({ isLoading }) => isLoading
  },

  mutationsToEvents: {
    'clean-server-errors': dispatch => {
      dispatch(`auth/${CLEAN_ERRORS}`, { path: 'signIn' })
    }
  },

  actionsToEvents: {
    'sign-in': (dispatch, data) => dispatch('auth/signIn', data)
  }
})('SignInFormContainer', SignInForm)
