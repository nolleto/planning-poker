<template>
  <div>
    <div v-if="isUserSignedIn">
      <span>
        Hello
        <b>{{ username }}</b>!
      </span>

      <a @click="$emit('sign-out')">Sign out</a>
    </div>

    <div v-else>
      <a @click="$emit('sign-in')">Sign In</a>
      <a @click="$emit('sign-up')">Sign Up</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavLogin',

  props: {
    isUserSignedIn: {
      type: Boolean,
      required: true
    },

    username: {
      type: String
    }
  }
}
</script>

<style>

</style>
