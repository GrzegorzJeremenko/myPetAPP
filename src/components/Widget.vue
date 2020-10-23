<template>
  <section 
    id="widget"
    v-bind:style="{
      backgroundImage: 'linear-gradient(to right, '+ this.widgets[type].firstColor +', '+ this.widgets[type].secondColor +')'
    }"
  >
    <i class="icon">{{ displayIcon(widgets[type].icon) }}</i>
    <div id="data">
      <h1>{{ title }}</h1>
      <h2>{{ desc }}</h2>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Widget',
    props: ['type', 'title', 'desc'],
    data() {
      return {
        widgets: [
          {
            // Water
            firstColor: '#2980b9',
            secondColor: '#3498db',
            icon: '&#xE804;',
          },
          {
            // Step
            firstColor: '#27ae60',
            secondColor: '#2ecc71',
            icon: '&#xF1B0;',
          },
          {
            // Food
            firstColor: '#d35400',
            secondColor: '#e67e22',
            icon: '&#xF0F5;',
          },
          {
            // Heartbeat
            firstColor: '#c0392b',
            secondColor: '#e74c3c',
            icon: '&#xE805;',
          },
          {
            // Temp
            firstColor: '#8e44ad',
            secondColor: '#9b59b6',
            icon: '&#xE807;',
          },
        ]
      }
    },
    methods: {
      displayIcon(str) {
        let parser = new DOMParser();
        let dom = parser.parseFromString('<!doctype html><body>' + str, 'text/html');
        return dom.body.textContent;
      },
    }
  }
</script>

<style scoped>
  section#widget {
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

  section#widget div#data {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 20px;
  }

  section#widget div#data h1 {
    font-size: 20px;
  }
  section#widget div#data h2 {
    font-size: 16px;
    margin: 5px 0 0 0;
  }

  section#widget i {
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
