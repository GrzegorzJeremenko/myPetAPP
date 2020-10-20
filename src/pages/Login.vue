<template>
  <section>
      <button @click="test">Home</button>

      <form @submit.prevent="onSubmit">
        <!-- <label for="email">E-mail</label> -->
        <input type="email" placeholder="E-mail" name="email" id="email" v-model="email">
        <!-- <label for="password">Hasło</label> -->
        <input type="password" placeholder="Hasło" name="password" id="password" v-model="password">
        <button type="submit">Zaloguj się</button>
      </form>
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
      test() {
        this.$router.push('welcome');
      },
      //TODO: Refactor
      onSubmit() {
        let data = this

        if (data.username != '' && data.password != '') {
          axios({
            method: 'post',
            url: 'https://mypet-api.herokuapp.com/api/users/login',
            data: {
              email: data.email,
              password: data.password
            }
          })
          .then(function(res) {
            console.log(res)
            if (res.status === 200) {
              localStorage.setItem('user', JSON.stringify({ token: res.data.token, refresh_token: res.data.refresh_token }))
              console.log("OK")
              data.$router.push('/')
            }
          })
          .catch(function(err) { console.log(err) })
        }
      }
    }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  form {
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem;
  }

  input {
    border: 2px solid lightgray;
    border-radius: 11px;
    height: 1.5rem;
    letter-spacing: .7px;
    padding: 8px 16px;
    margin: 0.5rem 0;
    font-size: 0.9rem;
    outline: none;
  }

  button {
    /* background-color: rgba(239, 239, 239, 0.904); */
    color: #fff;
    background-color: #2ecc71;
    border: none;
    border-radius: 24px;
    font-weight: 600;
    letter-spacing: .7px;
    height: 2.5rem;
    margin: 0.5rem 0;
  }
</style>
