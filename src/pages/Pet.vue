<template>
  <section id="pet">
      name - {{ name }}
  </section>
</template>

<script>
  const api = require('../api')

  export default {
    name: 'MyPets',
    data() {
      return {
          name: "",
          heart: [],
          steps: [],
          temp: [],
          water: [],
          food: [] 
      }
    },
    methods: {
        getPetData() {
            api.user.getPetData(api.user.getId(), this.$route.params.petId)
            .then((res) => {
                let data = res.data.data
                this.name = data.name
            })
            .catch((err) => console.log(err))
        },
        getPetCollarData() {
            api.user.getPetCollarData(api.user.getId(), this.$route.params.petId)
            .then((res) => {
                let data = res.data.data
                this.heart = data.heart
                this.steps = data.steps
                this.temp = data.temp
                this.water = data.water
                this.food = data.food
            })
            .catch((err) => console.log(err))
        }
    },
    beforeMount() {
        this.getPetData()
        this.getPetCollarData()
    }
  }

</script>

<style scoped>
  section#pet {
    width: 100vw;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }
</style>
