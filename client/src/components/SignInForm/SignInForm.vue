<template>
  <form @submit.prevent="processForm">
    <form-group
      name="userOrEmail"
      title="Username or Email"
    >
      <form-input
        name="userOrEmail"
        :state="getFieldState('userOrEmail')"
        :error="getFieldError('userOrEmail')"
        v-validate="'required'"
        v-model="form.userOrEmail"
      />
    </form-group>

    <form-group
      name="password"
      title="Password"
    >
      <form-input
        name="password"
        type="password"
        :state="getFieldState('password')"
        :error="getFieldError('password')"
        v-validate="'required|min:6'"
        v-model="form.password"
      />
    </form-group>

    <form-group>
      <base-button
        variant="primary"
        :disabled="formHasErrors() || isLoading"
      >
        Sign in
      </base-button>
    </form-group>

    <progress-bar v-if="isLoading"/>
    <error-summary v-if="error">
      {{ error }}
    </error-summary>
  </form>
</template>

<script>
import validatorMixin from '@/mixins/validator'
import styles from '@/styles'

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

  mixins: [ validatorMixin ],

  data () {
    return {
      form: {
        userOrEmail: '',
        password: ''
      }
    }
  },

  computed: {
    bootstrap: () => styles.bootstrap
  },

  methods: {
    processForm () {
      this.$validator.validateAll()
        .then(valid => {
          if (valid) {
            const data = {
              userOrEmail: this.form.userOrEmail,
              password: this.form.password
            }

            this.$emit('sign-in', data)
          }
        })
    }
  },

  created () {
    this.$emit('clean-server-errors')
  }
}
</script>
