<template>
  <div>
    <user-logged
      v-if="isUserSignedIn"
      :username="username"
      @sign-out="$emit('sign-out')"
    />

    <user-not-logged
      v-else
      @sign-in="$emit('sign-in')"
      @sign-up="$emit('sign-up')"
    />
  </div>
</template>

<script>
import UserLogged from './UserLogged'
import UserNotLogged from './UserNotLogged'

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
  },

  components: {
    UserLogged,
    UserNotLogged
  }
}
</script>
