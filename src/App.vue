<template>
  <div id="app bx--grid">
    <main class="bx--row">
      <div class="bx--col-lg-8 bx--offset-lg-2">
        <LaunchesListPage />
      </div>
    </main>
  </div>
</template>

<script>
import LaunchesListPage from "./pages/LaunchesListPage.vue";
export default {
  name: "App",
  components: {
    LaunchesListPage,
  },
};
</script>

<style></style>
