<template>
  <div :class="[bootstrap.alert, bootstrap.alertDanger]" role="alert">
    <slot></slot>
  </div>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'ErrorSummary',

  computed: {
    bootstrap: () => styles.bootstrap
  }
}
</script>
