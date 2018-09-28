<template>
  <button
    :class="[
      bootstrap.btn,
      {
        [bootstrap.btnPrimary]: variant === 'primary',
        [bootstrap.btnSecondary]: variant === 'secondary',
        [bootstrap.btnSuccess]: variant === 'success',
        [bootstrap.btnDanger]: variant === 'danger',
        [bootstrap.btnWarning]: variant === 'warning',
        [bootstrap.btnInfo]: variant === 'info',
        [bootstrap.btnLight]: variant === 'light',
        [bootstrap.btnDark]: variant === 'dark',
        [bootstrap.btnLink]: variant === 'link'
      }
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'BaseButton',

  props: {
    variant: {
      type: String,
      validator (value) {
        return [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
          'link'
        ].indexOf(value) !== -1
      }
    },

    disabled: {
      type: Boolean
    }
  },

  computed: {
    bootstrap: () => styles.bootstrap
  }
}
</script>
