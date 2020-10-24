<template>
  <section id="settings">
      <h1>Ustawienia</h1>
      <button @click="changePassword">Zmień hasło</button>
      <button @click="removeAccount">Usuń konto</button>
      <button
        @click="logout"
        style="border: none;"
      >Wyloguj się</button>
      <h2>v1.0 myPet &copy; 2020</h2>
  </section>
</template>

<script>
  const api = require('../api');

  export default {
    name: 'Settings',
    methods: {
      changePassword() {
        this.$router.push('/settings/change_password')
      },
      removeAccount() {
        api.user.removeAccount(api.user.getId())
        .then(() => {
            api.authentication.logout()
            window.location.reload()
        })
        .catch(err => console.log(err))
      },
      logout() {
        api.authentication.logout();
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  section#settings {
    width: 100vw;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
  }

  section#settings h1 {
    width: 100%;
    height: 60px;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }

  section#settings h2 {
    width: 100%;
    height: 60px;
    font-size: 14px;
    text-align: center;
    line-height: 60px;
    color: #aaa;
  }

  section#settings button {
    width: 80%;
    height: 50px;
    background: none;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
    font-family: 'Open Sans', sans-serif;
  }

  section#settings button:last-child {
    border: none;
  }
</style>
