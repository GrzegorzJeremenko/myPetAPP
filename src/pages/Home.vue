<template>
  <section id="list">
    <widget 
      type="4"
      title="Pimpek"
      :desc="temp"
    />
    <widget 
      type="0"
      title="Pimpek"
      :desc="water"
    />
    <widget 
      type="1"
      title="Pimpek1"
      :desc="steps"
    />
    <widget 
      type="2"
      title="Pimpek2"
      :desc="food"
    />
    <widget 
      type="3"
      title="Pimpek3"
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
        temp: "",
        water: "",
        steps: "",
        food: "",
        heart: ""
      }
    },
    methods: {
        getPetCollarData() {
            api.user.getPetCollarData(api.user.getId(), '5f94241f3b767507afd502c9')
            .then((res) => {
                let data = res.data.data
                console.log(data)
                this.heart = data.heart[data.heart.length - 1].data
                this.steps = data.steps[data.steps.length - 1].data
                this.temp = data.temp[data.temp.length - 1].data
                this.water = data.water[data.water.length - 1].data
                this.food = data.food[data.food.length - 1].data
            })
            .catch((err) => console.log(err))
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
