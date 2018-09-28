<template>
  <div :class="bootstrap.progress">
    <div
      :class="[
        $style.progressBar,
        bootstrap.progressBar,
        bootstrap.progressBarStriped,
        bootstrap.progressBarAnimated
      ]"
      role="progressbar"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'ProgressBar',

  computed: {
    bootstrap: () => styles.bootstrap
  }
}
</script>

<style module>
  .progressBar{
    width: 100%;
  }
</style>
