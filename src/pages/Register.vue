<template>
  <section>
      <button @click="test">Home</button>

      <form @submit.prevent="onSubmit">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" v-model="email">
        <label for="password">Hasło</label>
        <input type="password" name="password" id="password" v-model="password">
        <label for="repeat_password">Powtórz hasło</label>
        <input type="password" name="repeat_password" id="repeat_password" v-model="repeat_password">
        <button type="submit">Zarejestruj</button>
      </form>
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
      test() {
        this.$router.push('welcome');
      },
      onSubmit() {
        let data = this

        if ((data.username != '' && data.password != '') && (data.password === data.repeat_password)) {
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

</style>
