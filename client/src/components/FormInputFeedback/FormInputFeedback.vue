<template>
  <div
    :class="{
      [bootstrap.validFeedback]: state === 'valid',
      [bootstrap.invalidFeedback]: state === 'invalid'
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'FormInputFeedback',

  props: {
    state: {
      type: String
    }
  },

  computed: {
    bootstrap: () => styles.bootstrap
  }
}
</script>
