<template>
  <Card />
</template>

<script>

import Card from './components/MedCard.vue'
export default {
  name: 'App',
  components:{
    Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #1f2d2e;
  color: #fbffff;
  width: 80%;
}
</style>
