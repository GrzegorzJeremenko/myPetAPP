<template>
  <section id="list">
      <form @submit.prevent="changePassword">
        <input type="password" placeholder="Stare hasło" v-model="old_password">
        <input type="password" placeholder="Nowe hasło" v-model="new_password">
        <input type="password" placeholder="Powtórz nowe hasło" v-model="repeat_new_password">
        <button type="submit">Zmień hasło</button>
      </form>
  </section>
</template>

<script>
const api = require('../api')

  export default {
    name: 'MyPets',
    data() {
        return {
            old_password: "",
            new_password: "",
            repeat_new_password: ""
        }
    },
    methods: {
        changePassword() {
            if (this.new_password === this.repeat_new_password) {
                api.user.changePassword(api.user.getId(), this.old_password, this.new_password)
                .then(() => this.$router.push('/settings'))
                .catch((err) => console.log(err))
            }
        }
    },
  }

</script>

<style scoped>
  section#list {
    width: 100vw;
    min-height: 200vh;
    align-items: center;
    margin: 80px 0 0 0;
  }

    form {
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem;
  }

  input {
    border: none;
    border-bottom: 2px solid lightgray;
    height: 1.5rem;
    letter-spacing: .7px;
    padding: 8px 10px;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    outline: none;
  }

  button {
    color: #fff;
    background-color: rgb(85, 22, 118);
    border: none;
    border-radius: 14px;
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: .7px;
    height: 2.75rem;
    margin: 0.5rem 0;
  }
</style>
