<template>
  <div>
    <a href="#" @click="$emit('sign-in')">Sign In</a>
    <span>or</span>
    <a href="#" @click="$emit('sign-up')">Sign Up</a>
  </div>
</template>

<script>
export default {
  name: 'UserNotLogged'
}
</script>
