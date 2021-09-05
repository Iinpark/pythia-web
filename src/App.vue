<template>
  <div id="app bx--grid">
    <main class="bx--row">
      <div class="bx--col-lg-8 bx--offset-lg-2">
        <LaunchesList />
      </div>
    </main>
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

<style></style>
