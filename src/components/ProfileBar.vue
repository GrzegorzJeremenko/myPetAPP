<template>
  <section id="profileBar">
    <div id="profileBar">
        <img src="../assets/profile.png" />
        <div id="data">
            <h1>Test Testowy</h1>
            <h2>test@test.pl</h2>
        </div>
    </div>
    <i class="icon">&#xE801;</i>
  </section>
</template>

<script>
  export default {
    name: 'ProfileBar',
  }
</script>

<style scoped>
  section#profileBar {
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
    background-color: rgb(85, 22, 118);
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  section#profileBar i {
    font-size: 20px;
  }

  section#profileBar div#profileBar {
    display: flex;
    flex-direction: row;
  }

  section#profileBar div#profileBar div#data {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 0 0 0 10px;
  }

  section#profileBar div#profileBar div#data h1 {
      font-size: 14px;
  }

  section#profileBar div#profileBar div#data h2 {
      font-size: 14px;
  }

  section#profileBar div#profileBar img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
</style>
