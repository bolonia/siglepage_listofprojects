<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    document.title = 'Suiecosystem';
  }
}
</script>

<style>
html { overflow-x: hidden; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
