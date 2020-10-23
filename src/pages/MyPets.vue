<template>
  <section id="list">
      <ul>
          <li v-for="pet in pets" :key="pet._id">
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
            api.user.getPets(api.user.getId())
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
