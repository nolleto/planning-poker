<template>
  <nav class="wrapper flex-center">
    <a
      class="title"
      @click="$emit('go-home')"
    >
      Planning Poker
    </a>

    <div class="flex-center">
      <div class="divider" />
      <nav-login />
    </div>
  </nav>
</template>

<script>
import NavLogin from '../NavLogin'

export default {
  name: 'NavHeader',

  components: { NavLogin }
}
</script>

<style scoped>
  .wrapper {
    padding: 10px 20px;
    background-color: #f4f4f4;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .divider {
    height: 20px;
    margin-right: 10px;
    border-left: 1px solid #dddddd;
  }

  .title {
    padding: 5px 0;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
  }
</style>
