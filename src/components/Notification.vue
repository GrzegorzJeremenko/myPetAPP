<template>
  <section id="notification">
        <i class="icon">&#xE808;</i>
        <h1>
            <b>{{ title }}</b>{{ desc }}
        </h1>
        <i 
            class="icon"
            @click="close()"
            style="font-size: 20px;"
        >
            &#xE806;
        </i>
  </section>
</template>

<script>
  export default {
    name: 'Notification',
    props: ['title', 'desc'],
    methods: {
        close() {
            this.$destroy();
        }
    }
  }
</script>

<style scoped>
  section#notification {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  section#notification i {
    font-size: 16px;
    margin: 0 10px 0 10px;
  }

  section#notification b {
    font-weight: 600;
  }
</style>
