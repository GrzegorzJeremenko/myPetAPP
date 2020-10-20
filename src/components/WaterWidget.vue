<template>
  <section id="waterWidget">
    <i class="icon">&#xE804;</i>
  </section>
</template>

<script>
  export default {
    name: 'WaterWidget',
  }
</script>

<style scoped>
  section#waterWidget {
    width: 90%;
    color: #fff;
    background-color: #3498db;
    height: 80px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 0;
  }

  section#waterWidget i {
    width: 60px;
    height: 60px;
    margin: 8px 0 0 10px;
    text-align: center;
    font-size: 20px;
    line-height: 60px;
    font-size: 30px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
</style>
