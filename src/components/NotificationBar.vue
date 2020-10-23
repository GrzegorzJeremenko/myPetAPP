<template>
  <section id="notificationBar">
    <ol>
        <li 
            v-for="notification in notifications"
            :key="notification.id"
        >
            <notification
                v-bind:title="notification.title"
                v-bind:desc="notification.desc"
            />
        </li>
    </ol>
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
            }
        ]
      }
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
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section#notificationBar ol {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section#notificationBar ol li {
    width: 90%;
    height: 40px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
