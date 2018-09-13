<template>
  <div id="app">
    <nav-header/>
    <router-view/>
  </div>
</template>

<script>
import NavHeader from './containers/NavHeader'

export default {
  components: {
    NavHeader
  }
}
</script>

<style>
body {
  margin: 0;
}

a {
  cursor: pointer;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
