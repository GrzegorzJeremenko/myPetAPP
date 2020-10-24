<template>
  <section id="notificationBar">
    <notification
      v-for="notification in notifications"
      :key="notification.id"
      v-bind:element="notification"
      v-on:close="closeNotifi"
    />
    <h1 v-show="this.notifications.length == 0">Brak powiadomień</h1>
  </section>
</template>

<script>
  import Notification from './Notification.vue';

  export default {
    name: 'NotificationBar',
    components: {
      Notification
    },
    data() {
      return {
        notifications: [
          {
            id: 0,
            title: 'Niska temeperatura - ',
            desc: 'Pimpek',
          },
          {
            id: 1,
            title: 'Niska temeperatura - ',
            desc: 'Pimpek2',
          },
          {
            id: 2,
            title: 'Niska temeperatura - ',
            desc: 'Pimpek3',
          },
          {
            id: 3,
            title: 'Niska temeperatura - ',
            desc: 'Pimpek4',
          }
        ],
        notifiCount: 0
      }
    },
    methods: {
      closeNotifi(element) {
        const notifiIndex = this.notifications.indexOf(element);
        this.notifications.splice(notifiIndex, 1);
      }
    },
    created: function () {
      this.notifiCount = this.notifications.length;
    }
  }
</script>

<style scoped>
  section#notificationBar {
    position: fixed;
    top: 80px;
    width: 100%;
    color: #fff;
    background-color: rgb(85, 22, 118);
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
