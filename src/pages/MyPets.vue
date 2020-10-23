<template>
  <section id="list">
      <ul>
          <li v-for="pet in pets" :key="pet.id">
              id - {{ pet._id }}
              name - {{ pet.name }}
          </li>
      </ul>
  </section>
</template>

<script>
const api = require('../api')

  export default {
    name: 'MyPets',
    data() {
        return {
            pets: []
        }
    },
    methods: {
        getPets() {
            api.user.getPets('5f87f37fa580f51f38c15a6c')
            .then((res) => {
                this.pets = res.data.data
            })
            .catch((err) => console.log(err))
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
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }
</style>
