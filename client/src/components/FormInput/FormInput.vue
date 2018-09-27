<template>
  <div>
    <input
      :class="[
        bootstrap.formControl,
        {
          [bootstrap.isValid]: state === 'valid',
          [bootstrap.isInvalid]: state === 'invalid'
        }
      ]"
      :name="name"
      :id="name"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    />

    <form-input-feedback :state="state">
      {{ error }}
    </form-input-feedback>
  </div>
</template>

<script>
import styles from '@/styles'

export default {
  name: 'FormInput',

  $_veeValidate: {
    value () {
      return this.$el.value
    },
    name () {
      return this.name
    }
  },

  inheritAttrs: false,

  props: {
    name: {
      type: String,
      required: true
    },

    value: {
      type: String
    },

    state: {
      type: String
    },

    error: {
      type: String
    }
  },

  computed: {
    bootstrap: () => styles.bootstrap,

    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value)
      }
    }
  },

  mounted () {
    this.$el.value = this.value
  }
}
</script>
