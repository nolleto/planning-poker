<template>
  <form @submit.prevent="processForm">
    <div class="field">
      <label class="label">Username or Email</label>
      <input
        type="text"
        class="input"
        name="userOrEmail"
        v-model="form.userOrEmail"
      />
    </div>

    <div class="field">
      <label class="label">Password</label>
      <input
        type="password"
        class="input"
        name="password"
        v-model="form.password"
      />
    </div>

    <div class="field">
      <button type="submit" class="button">Submit</button>
    </div>

    <p v-if="isLoading">Loading...</p>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: 'SignInForm',

  props: {
    isLoading: {
      type: Boolean,
      required: true
    },

    error: {
      type: String
    }
  },

  data () {
    return {
      form: {
        userOrEmail: '',
        password: ''
      }
    }
  },

  methods: {
    processForm () {
      const data = {
        userOrEmail: this.form.userOrEmail,
        password: this.form.password
      }

      this.$emit('sign-in', data)
    }
  }
}
</script>

<style>

</style>
