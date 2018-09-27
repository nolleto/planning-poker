<template>
  <div :class="$style.wrapper">
    <sign-in-form :class="$style.form" />
  </div>
</template>

<script>
import SignInForm from '@/containers/SignInForm'

export default {
  name: 'SignIn',

  components: { SignInForm }
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
