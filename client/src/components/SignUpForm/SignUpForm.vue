<template>
  <form @submit.prevent="processForm">
    <form-group
      name="username"
      title="Username"
    >
      <form-input
        name="username"
        :state="getFieldState('username', serverErrors)"
        :error="getFieldError('username', serverErrors)"
        @input="$emit('clean-server-error', 'username')"
        v-validate="'required'"
        v-model="form.username"
      />
    </form-group>

    <form-group
      name="email"
      title="Email"
    >
      <form-input
        name="email"
        type="email"
        :state="getFieldState('email', serverErrors)"
        :error="getFieldError('email', serverErrors)"
        @input="$emit('clean-server-error', 'email')"
        v-validate="'required|email'"
        v-model="form.email"
      />
    </form-group>

    <form-group
      name="password"
      title="Password"
    >
      <form-input
        name="password"
        type="password"
        ref="password"
        :state="getFieldState('password', serverErrors)"
        :error="getFieldError('password', serverErrors)"
        @input="$emit('clean-server-error', 'password')"
        v-validate="'required|min:6'"
        v-model="form.password"
      />
    </form-group>

    <form-group
      name="passwordConfirmation"
      title="Confirm Password"
    >
      <form-input
        name="passwordConfirmation"
        type="password"
        :state="getFieldState('passwordConfirmation', serverErrors)"
        :error="getFieldError('passwordConfirmation', serverErrors)"
        @input="$emit('clean-server-error', 'passwordConfirmation')"
        v-validate="'required|min:6'"
        v-model="form.passwordConfirmation"
      />
    </form-group>

    <form-group>
      <base-button
        variant="primary"
        :disabled="formHasErrors(serverErrors) || isLoading"
      >
        Sign in
      </base-button>
    </form-group>

    <progress-bar v-if="isLoading"/>
  </form>
</template>

<script>
import validatorMixin from '@/mixins/validator'
import styles from '@/styles'

export default {
  name: 'SignUpForm',

  mixins: [ validatorMixin ],

  props: {
    isLoading: {
      type: Boolean,
      required: true
    },

    serverErrors: {
      type: Object,
      default: () => ({})
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

  computed: {
    bootstrap: () => styles.bootstrap
  },

  methods: {
    processForm () {
      this.$validator.validateAll()
        .then(valid => {
          if (valid) {
            const data = {
              username: this.form.username,
              email: this.form.email,
              password: this.form.password,
              passwordConfirmation: this.form.passwordConfirmation
            }

            this.$emit('sign-up', data)
          }
        })
    }
  },

  created () {
    this.$emit('clean-server-errors')
  }
}
</script>
