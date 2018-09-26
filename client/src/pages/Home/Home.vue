<template>
  <div>
    <h1>Home page</h1>

    <button
      :disabled="!ui.btnEnable"
      @click="testApi"
    >
      Click here for test API
    </button>
  </div>
</template>

<script>
import { test } from '../../api/tests'

export default {
  name: 'Home',

  data () {
    return {
      ui: {
        btnEnable: true
      }
    }
  },

  methods: {
    testApi () {
      this.ui.btnEnable = false
      test()
        .then(({ data }) => alert(data.status))
        .catch(error => alert(error))
        .finally(() => (this.ui.btnEnable = true))
    }
  }
}
</script>
