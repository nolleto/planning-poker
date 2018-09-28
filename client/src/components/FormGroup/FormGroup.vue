<template>
  <div :class="bootstrap.formGroup">
    <label v-if="name" :for="name">
      {{ title }}
    </label>

    <slot></slot>
  </div>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'FormGroup',

  props: {
    name: {
      type: String
    },

    title: {
      type: String
    }
  },

  computed: {
    bootstrap: () => styles.bootstrap
  }
}
</script>
