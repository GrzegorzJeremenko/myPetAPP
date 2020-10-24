<template>
  <section class="notification">
        <i class="icon">&#xE808;</i>
        <h1>
            <b>{{ element.title }}</b>{{ element.desc }}
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
    props: ['element'],
    methods: {
      close() {
        this.$emit('close', this.element);
      }
    }
  }
</script>

<style scoped>
  section.notification {
    width: 90%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ddd;
  }

  section.notification i {
    font-size: 16px;
    margin: 0 10px 0 10px;
  }

  section.notification b {
    font-weight: 600;
  }
</style>
