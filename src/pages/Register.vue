<template>
  <section>
    <div>myPet - Rejestracja</div>
    <h1>Witamy</h1>
      <form @submit.prevent="onSubmit">
        <input type="email" placeholder="E-mail" name="email" id="email" v-model="email">
        <input type="password" placeholder="Hasło" name="password" id="password" v-model="password">
        <input type="password" placeholder="Powtórz hasło" name="repeat_password" id="repeat_password" v-model="repeat_password">
        <button type="submit">Zarejestruj się</button>
      </form>

      <p>Masz konto? <router-link to="/login">Zaloguj się</router-link></p>
  </section>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Register',
  data() {
    return {
      email: "",
      password: "",
      repeat_password: ""
    }
  },
  methods: {
      onSubmit() {
        let data = this

        if ((data.email != '' && data.password != '') && (data.password === data.repeat_password)) {
          axios({
            method: 'post',
            url: 'http://localhost:3000/api/users/register',
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

  section {
    position: fixed;
    background-color: #fff;
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
