<template>
  <section class="pet">
    <i class="icon">&#xF1B0;</i>
    <div id="data" @click="showPet(element._id)">
      <h1>{{ element.name }}</h1>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MyPet',
    props: ['element'],
    methods: {
      showPet(petId) {
        this.$router.push(`/mypets/show/${petId}`)
      }
    }
  }
</script>

<style scoped>
  section.pet {
    width: 90%;
    color: #fff;
    background-image: linear-gradient(to right, #16a085, #1abc9c);
    height: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 0;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
  }

  section.pet div#data {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 20px;
  }

  section.pet div#data h1 {
    font-size: 20px;
  }
  section.pet div#data h2 {
    font-size: 16px;
    margin: 5px 0 0 0;
  }

  section.pet i {
    width: 40px;
    height: 40px;
    margin: 0 0 0 5px;
    text-align: center;
    line-height: 40px;
    font-size: 25px;
  }
</style>
