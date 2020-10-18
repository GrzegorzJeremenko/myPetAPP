<template>
  <div class="home">
    <button @click="test">Home</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      test() {
        this.$router.push('welcome');
      }
    }
  }

</script>

<style scoped>

</style>
