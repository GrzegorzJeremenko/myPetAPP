<template>
  <section>
    <div>myPet - Logowanie</div>
    <h1>Witamy</h1>
    <form @submit.prevent="onSubmit">
      <!-- <label for="email">E-mail</label> -->
      <input type="email" placeholder="E-mail" name="email" id="email" v-model="email">
      <!-- <label for="password">Hasło</label> -->
      <input type="password" placeholder="Hasło" name="password" id="password" v-model="password">
      <button type="submit">Zaloguj się</button>
    </form>

    <p>Nie masz konta? <router-link to="/register">Zarejestruj się</router-link></p>
  </section>
</template>

<script>
const api = require('../api')

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
      onSubmit() {
        let data = this

        if (data.email != '' && data.password != '') {
          api.authentication.login(data.email, data.password)
          .then(() => data.$router.push('/'))
          .catch(err => console.log(err))
        }
      }
    }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  section {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  div {
    color: #fff;
    background-color: rgb(85, 22, 118);
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem;
  }

  h1 {
    color: rgb(85, 22, 118);
    font-size: 1.4rem;
    font-weight: 600;
    margin: 1rem 1.5rem;
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

  p {
    bottom: 2.5rem;
    position: fixed;
    text-align: center;
    width: 100%;
  }

  a {
    color: rgb(85, 22, 118);
    text-decoration: none;
  }
</style>
