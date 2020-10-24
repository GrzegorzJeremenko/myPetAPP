<template>
  <section id="list">
      <button @click="addPet()">Dodaj pupila</button>
      <my-pet v-for="pet in pets" :key="pet._id" v-bind:element="pet" />
  </section>
</template>

<script>
  const api = require('../api')
  import MyPet from '../components/MyPet';

  export default {
    name: 'MyPets',
    components: {
      MyPet
    },
    data() {
      return {
        pets: []
      }
    },
    methods: {
        getPets() {
          api.user.getPets(api.user.getId())
          .then((res) => {
              this.pets = res.data.data
          })
          .catch((err) => console.log(err))
        },
        addPet() {
          this.$router.push('/mypets/add')
        }
    },
    beforeMount() {
        this.getPets()
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

  section#list button {
    color: #fff;
    background-color: #27ae60;
    border: none;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: .7px;
    height: 2.75rem;
    margin: 0.5rem 0;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
  }
</style>
