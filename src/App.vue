<template>
  <div id="app bx--grid">
    <main class="bx--row">
      <div class="bx--col-lg-8 bx--offset-lg-2">
        <h1>Next Launch</h1>
        <LaunchesListPage />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LaunchesListPage from "./pages/LaunchesListPage.vue";
export default {
  name: "App",
  methods: {
    ...mapActions(["FETCH_LAUNCHES"]),
  },
  mounted() {
    this.FETCH_LAUNCHES();
  },
  components: {
    LaunchesListPage,
  },
};
</script>

<style></style>
