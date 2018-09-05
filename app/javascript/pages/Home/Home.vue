<template>
  <div>
    <h1>Home page</h1>

    <button @click="onClick">Click here for something</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    methods: {
      onClick() {
        alert('something')
      }
    }
  };
</script>
