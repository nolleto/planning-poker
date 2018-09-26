<template>
  <form @submit.prevent="processForm">
    <div class="field">
      <label class="label">Username</label>
      <input
        type="text"
        class="input"
        name="username"
        v-model="form.username"
      />

      <span class="error">{{ getErrorByName('username') }}</span>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <input
        type="email"
        class="input"
        name="email"
        v-model="form.email"
      />

      <span class="error">{{ getErrorByName('email') }}</span>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <input
        type="password"
        class="input"
        name="password"
        v-model="form.password"
      />

      <span class="error">{{ getErrorByName('password') }}</span>
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <input
        type="password"
        class="input"
        name="passwordConfirmation"
        v-model="form.passwordConfirmation"
      />

      <span class="error">{{ getErrorByName('passwordConfirmation') }}</span>
    </div>

    <div class="field">
      <button type="submit" class="button">Submit</button>
    </div>

    <p v-if="isLoading">Loading...</p>
  </form>
</template>

<script>
export default {
  name: 'SignUpForm',

  props: {
    isLoading: {
      type: Boolean,
      required: true
    },

    getErrorByName: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },

  methods: {
    processForm () {
      const data = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        passwordConfirmation: this.form.passwordConfirmation
      }

      this.$emit('sign-up', data)
    }
  }
}
</script>

<style>

</style>
