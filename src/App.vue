<template>
  <div id="app">
    <LaunchesList />
  </div>
</template>

<script>
import LaunchesList from "./pages/LaunchesList.vue";
export default {
  name: "App",
  components: {
    LaunchesList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
