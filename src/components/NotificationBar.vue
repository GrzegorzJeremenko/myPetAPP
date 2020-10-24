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
  const api = require('../api')

  export default {
    name: 'NotificationBar',
    components: {
      Notification
    },
    data() {
      return {
        notifications: [
        ],
        notifiCount: 0
      }
    },
    methods: {
      closeNotifi(element) {
        const notifiIndex = this.notifications.indexOf(element);
        this.notifications.splice(notifiIndex, 1);
      },
      getNotifications() {
        api.user.getNotifications(api.user.getId())
        .then((res) => {
          let data = []
          let notifications = res.data.data

          let types = {
            low_temp: "Za niska temperatura",
            high_temp: "Za wysoka temperatura"
          }

          for(let notification in notifications) {
            api.user.getPetData(api.user.getId(), notifications[notification].petId)
            .then((petData) => {
              data.push({
                id: notifications[notification]._id,
                title: types[notifications[notification].type] + ' - ',
                desc: petData.data.data.name
              })
            })
          }
          this.notifications = data
        })
        .catch(err => console.log(err))
      }
    },
    beforeMount() {
        this.getNotifications()
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
