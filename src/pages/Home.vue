<template>
  <section id="list">
    <widget 
      type="0"
      title="Pimpek"
      desc="Test1"
    />
    <widget 
      type="1"
      title="Pimpek1"
      desc="Test2"
    />
    <widget 
      type="2"
      title="Pimpek2"
      desc="Test3"
    />
    <widget 
      type="3"
      title="Pimpek3"
      desc="Test4"
    />
  </section>
</template>

<script>
  import Widget from '../components/Widget.vue';

  export default {
    name: 'Home',
    components: {
      Widget
    }
  }

</script>

<style scoped>
  section#list {
    width: 100vw;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }
</style>
