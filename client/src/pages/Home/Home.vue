<template>
  <div>
    <h1>Home page</h1>

    <button
      :disabled="!ui.btnEnable"
      @click="onClick"
    >
      Click here for something
    </button>
  </div>
</template>

<script>
import { get, post, auth } from '../../services/http'

export default {
  name: 'Home',

  data() {
    return {
      ui: {
        btnEnable: true
      }
    }
  },

  methods: {
    onClick () {
      this.ui.btnEnable = false
      get('/api/v1/test')
        .then(({ data }) => alert(data.status))
        .catch((error) => alert(error))
        .finally(() => this.ui.btnEnable = true)
      // post('/api/auth/users', {
      //   email: 'admin@admin.com',
      //   password: 123456
      // })
      // auth()
    }
  }
}
</script>
