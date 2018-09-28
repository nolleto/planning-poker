import { connect } from 'vuex-connect'
import {
  CLEAN_ERROR,
  CLEAN_ERRORS
} from '@/store/modules/auth/mutations-types'
import { getFromModule } from '@/adapters/vuex'
import SignUpForm from '@/components/SignUpForm'

const fromModule = getFromModule('auth')

export default connect({
  stateToProps: {
    isLoading: ({ isLoading }) => isLoading,
    serverErrors: fromModule(({ errors }) => errors.signUp)
  },

  mutationsToEvents: {
    'clean-server-error': (dispatch, errorName) => {
      dispatch(`auth/${CLEAN_ERROR}`, { path: 'signUp', errorName })
    },
    'clean-server-errors': dispatch => {
      dispatch(`auth/${CLEAN_ERRORS}`, { path: 'signUp' })
    }
  },

  actionsToEvents: {
    'sign-up': (dispatch, data) => dispatch('auth/signUp', data)
  }
})('SignUpFormContainer', SignUpForm)
