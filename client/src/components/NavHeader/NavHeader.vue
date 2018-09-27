<template>
  <nav :class="[bootstrap.navbar, bootstrap.navbarExpandLg, bootstrap.navbarLight, bootstrap.bgLight]">
    <a
      :class="bootstrap.navbarBrand"
      @click="$emit('go-home')"
    >
      Planning Poker
    </a>

    <button
      :class="bootstrap.navbarToggler"
      :aria-expanded="ui.expanded"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-label="Toggle navigation"
      @click="ui.expanded = !ui.expanded"
    >
      <span :class="bootstrap.navbarTogglerIcon"></span>
    </button>

    <div
      :class="[
        bootstrap.collapse,
        bootstrap.navbarCollapse,
        {
          [bootstrap.show]: ui.expanded
        }
      ]"
      id="navbarSupportedContent"
    >
      <ul :class="[bootstrap.navbarNav, bootstrap.mrAuto]">
      </ul>

      <nav-login />
    </div>
  </nav>
</template>

<script>
import NavLogin from '../../containers/NavLogin'
import styles from '@/styles'

export default {
  name: 'NavHeader',

  components: { NavLogin },

  data () {
    return {
      ui: {
        expanded: false
      }
    }
  },

  computed: {
    bootstrap: () => styles.bootstrap
  }
}
</script>
