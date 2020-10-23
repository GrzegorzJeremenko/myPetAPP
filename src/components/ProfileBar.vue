<template>
  <section id="profileBar">
    <div id="profileBar">
        <img src="../assets/profile.png" />
        <div id="data">
            <h1>{{ firstName }} {{ lastName }}</h1>
            <h2>{{ email }}</h2>
        </div>
    </div>
    <i
      class="icon"
      @click="openNotifi()"
    >
      {{ displayIcon(this.notifiBar)}}
    </i>
    <transition name="slide-fade">
      <notification-bar v-show="notifiBar" />
    </transition>
  </section>
</template>

<script>
  import NotificationBar from './NotificationBar.vue';
  const api = require('../api')

  export default {
    name: 'ProfileBar',
    components: {
      NotificationBar
    },
    data() {
      return {
        notifiBar: false,
        firstName: "",
        lastName: "",
        email: "",
      }
    },
    methods: {
      openNotifi() {
        this.notifiBar = !this.notifiBar;
      },
      displayIcon(x) {
        let str = '&#xE801;';

        if(x != false) str = '&#xF0F3;';

        let parser = new DOMParser();
        let dom = parser.parseFromString('<!doctype html><body>' + str, 'text/html');
        return dom.body.textContent;
      },
      getUserdata() {
        api.user.getData(api.user.getId())
        .then((userData) => {
          this.firstName = userData.data.data.firstName
          this.lastName = userData.data.data.lastName
          this.email = userData.data.data.email
        })
        .catch(err => console.log(err))
      }
    },
    beforeMount() {
        this.getUserdata()
    }
  }
</script>

<style scoped>
  section#profileBar {
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
    background-color: rgb(85, 22, 118);
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
  }

  section#profileBar i {
    font-size: 20px;
  }

  section#profileBar div#profileBar {
    display: flex;
    flex-direction: row;
  }

  section#profileBar div#profileBar div#data {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 0 0 0 10px;
  }

  section#profileBar div#profileBar div#data h1 {
      font-size: 14px;
  }

  section#profileBar div#profileBar div#data h2 {
      font-size: 14px;
  }

  section#profileBar div#profileBar img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }

  .slide-fade-enter-active {
    transition: all 250ms ease;
  }
  .slide-fade-leave-active {
    transition: all 250ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(-80px);
    opacity: 0;
  }
</style>
