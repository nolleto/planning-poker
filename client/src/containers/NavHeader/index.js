import { connect } from 'vuex-connect'
import router from '../../routers'
import NavHeader from '../../components/NavHeader'

export default connect({
  actionsToEvents: {
    'go-home': () => router.push('/')
  }
})('NavHeaderContainer', NavHeader)
