<template>
  <section id="addPet">
      <form @submit.prevent="addPet">
        <input type="text" placeholder="Imię zwierzaka" v-model="name">
        <input type="date" placeholder="Data urodzenia" v-model="birthDate">
        <input type="text" placeholder="Kod obroży" v-model="code">
        <button type="submit">Dodaj</button>
      </form>
  </section>
</template>

<script>
const api = require('../api')

  export default {
    name: 'AddPet',
    data() {
        return {
            name: "",
            birthDate: "",
            code: ""
        }
    },
    methods: {
        addPet() {
            api.user.addPet(api.user.getId(), this.name, this.birthDate, this.code)
            .then(() => {
                this.$router.push('/mypet')
            })
            .catch(err => console.log(err))
        }
    },
  }

</script>

<style scoped>
  section#addPet {
    width: 100vw;
    min-height: calc(100vh - 80px);
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
