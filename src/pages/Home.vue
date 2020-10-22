<template>
  <section id="list">
    <water-widget />
    <button @click="logout">Wyloguj</button>
  </section>
</template>

<script>
  import WaterWidget from '../components/WaterWidget.vue';
  const auth = require('../api')

  export default {
    name: 'Home',
    components: {
      WaterWidget
    },
    methods: {
      logout() {
        auth.authentication.logout()
        this.$router.push('/login')
      }
    }
  }

</script>

<style scoped>
  section#list {
    width: 100vw;
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }
</style>
