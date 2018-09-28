<template>
  <div :class="bootstrap.dropdown">
    <a
      :class="[bootstrap.navLink, bootstrap.dropdownToggle]"
      :aria-expanded="ui.expanded"
      id="loginDropdown"
      role="button"
      aria-haspopup="true"
      @click="ui.expanded = !ui.expanded"
    >
      Hello <b>{{ username }}</b>!
    </a>

    <div
      :class="[
        bootstrap.dropdownMenu,
        bootstrap.dropdownMenuRight,
        {
          [bootstrap.show]: ui.expanded
        }
      ]"
      aria-labelledby="loginDropdown"
    >
      <a
        :class="bootstrap.dropdownItem"
        @click="$emit('sign-out')"
      >
        Sign out
      </a>
    </div>
  </div>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'UserLogged',

  props: {
    username: {
      type: String,
      required: true
    }
  },

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
