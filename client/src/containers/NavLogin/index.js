import { connect } from 'vuex-connect'
import router from '../../routers'
import NavLogin from '../../components/NavLogin'

export default connect({
  gettersToProps: {
    isUserSignedIn: 'auth/isUserSignedIn',
    username: 'auth/username'
  },

  actionsToEvents: {
    'sign-out': dispatch => dispatch('auth/signOut'),
    'sign-in': () => router.push('/users/sign_in'),
    'sign-up': () => router.push('/users/sign_up')
  }
})('NavLoginContainer', NavLogin)
