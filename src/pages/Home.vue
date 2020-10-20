<template>
  <section id="list">
    <water-widget />
  </section>
</template>

<script>
  import WaterWidget from '../components/WaterWidget.vue';

  export default {
    name: 'Home',
    components: {
      WaterWidget
    }
  }

</script>

<style scoped>
  section#list {
    background-color: #fff;
    width: 100vw;
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }
</style>
