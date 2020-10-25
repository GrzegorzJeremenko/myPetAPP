<template>
  <section id="pet">
    <div id="name">
      <i class="icon">&#xF1B0;</i>
      <h1>{{ name }}</h1>
    </div>
    <div class="data" style="background-image: linear-gradient(#c0392b, #e74c3c); z-index: 8;">
      <i class="icon">&#xE805;</i>
      <h1>Puls</h1>
      <h2>{{ heart[heart.length - 1].data + " BPM" }}</h2>
    </div>
    <div class="data sec" style="background-image: linear-gradient(#27ae60, #2ecc71); z-index: 7;">
      <i class="icon">&#xF1B0;</i>
      <h1>Kroki</h1>
      <h2>{{ getStep( steps[steps.length - 1].data ) }}</h2>
    </div>
    <div class="data sec" style="background-image: linear-gradient(#8e44ad, #9b59b6); z-index: 6;">
      <i class="icon">&#xE807;</i>
      <h1>Temperatura</h1>
      <h2>{{ temp[temp.length - 1].data + " °C" }}</h2>
    </div>
    <div class="data sec" style="background-image: linear-gradient(#d35400, #e67e22); z-index: 5;">
      <i class="icon">&#xF0F5;</i>
      <h1>Jedzenie</h1>
      <h2>{{ this.getEatName( food[food.length - 1].data ) }}</h2>
    </div>
    <div class="data sec" style="background-image: linear-gradient(#2980b9, #3498db); z-index: 4; margin: -100px 0 80px 0;">
      <i class="icon">&#xE804;</i>
      <h1>Picie</h1>
      <h2>{{ getEatName( water[water.length - 1].data ) }}</h2>
    </div>
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
        this.getPetData()
        this.getPetCollarData()
    }
  }

</script>

<style scoped>
  section#pet {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }

  section#pet div#name {
    width: 100%;
    height: 160px;
    z-index: 8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section#pet div#name i {
    width: 70px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    font-size: 50px;
    margin: 20px 0 10px 0;
    border-radius: 20px;
    border: 1px solid #000;
  }

  section#pet div#name h1 {
    font-size: 30px;
  }

  section#pet div.data {
    width: 100%;
    height: 180px;
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section#pet div.sec {
    height: 180px;
    margin: -100px 0 0 0;
    padding: 100px 0 0 0;
  }

  section#pet div.data i {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 40px;
    margin: 20px 0 0 0;
  }

  section#pet div.data h1 {
    color: #fff;
    font-size: 20px;
  }

  section#pet div.data h2 {
    color: #fff;
    font-size: 20px;
    margin: 25px 0 0 0;
  }
</style>
