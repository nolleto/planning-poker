<template>
  <div :class="$style.wrapper">
    <sign-up-form :class="$style.form" />
  </div>
</template>

<script>
import SignUpForm from '../../containers/SignUpForm'

export default {
  name: 'SignUp',

  components: { SignUpForm }
}
</script>

<style module>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form {
    width: 100%;
    max-width: 600px;
    padding: 20px;
  }
</style>
