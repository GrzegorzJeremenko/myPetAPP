<template>
  <section>
      <button @click="test">Home</button>
  </section>
</template>

<script>
export default {
  name: 'Login',
  methods: {
      test() {
        this.$router.push('welcome');
      }
    }
}
</script>

<style scoped>

</style>
