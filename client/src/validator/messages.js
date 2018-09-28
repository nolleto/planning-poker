import { Validator } from 'vee-validate'

const dict = {
  attributes: {
    userOrEmail: 'username or email',
    passwordConfirmation: 'confirm password'
  }
}

Validator.localize('en', dict)
