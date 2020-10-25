<template>
  <section id="list">
    <widget 
      type="4"
      :title="name"
      :desc="temp"
    />
    <widget 
      type="0"
      :title="name"
      :desc="water"
    />
    <widget 
      type="1"
      :title="name"
      :desc="steps"
    />
    <widget 
      type="2"
      :title="name"
      :desc="food"
    />
    <widget 
      type="3"
      :title="name"
      :desc="heart"
    />
  </section>
</template>

<script>
  import Widget from '../components/Widget.vue';
  const api = require('../api')

  export default {
    name: 'Home',
    components: {
      Widget
    },
    data() {
      return {
        name: "-",
        temp: "",
        water: "",
        steps: "",
        food: "",
        heart: ""
      }
    },
    methods: {
        getPetCollarData() {
          api.user.getRandomPet(api.user.getId())
          .then((pet) => {
            api.user.getPetCollarData(api.user.getId(), pet._id)
            .then((res) => {
                let data = res.data.data
                this.name = pet.name
                this.heart = data.heart.length !== 0 ? data.heart[data.heart.length - 1].data + " BPM" : "Brak danych"
                this.steps = data.steps.length !== 0 ? this.getStep( data.steps[data.steps.length - 1].data ) : "Brak danych"
                this.temp = data.temp.length !== 0 ? data.temp[data.temp.length - 1].data + " °C" : "Brak danych"
                this.water = data.water.length !== 0 ? this.getEatName( data.water[data.water.length - 1].data ) : "Brak danych"
                this.food = data.food.length !== 0 ? this.getEatName( data.food[data.food.length - 1].data ) : "Brak danych"
            })
            .catch((err) => console.log(err))
          })
          .catch((err) => console.log(err))
        },
        getStep(steps) {
          if( steps == 0 ) return steps + " kroków"
          else if( steps == 1 ) return steps + " krok"
          else if( ( steps >= 2 ) && ( steps <= 4) ) return steps + " kroki"
          else return steps + " kroków"
        },
        getEatName(water) {
          if( water == 0 ) return water + " razy"
          else if( water == 1 ) return water + " raz"
          else return water + " razy"
        }
    },
    beforeMount() {
      this.getPetCollarData()
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
