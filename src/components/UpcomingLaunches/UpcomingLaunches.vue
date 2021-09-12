<template>
  <cv-grid fullwidth>
    <h2>Upcoming Launches</h2>
    <cv-row>
      <cv-column
        v-for="(launch, index) in launches" :key="index"
        style="padding-top: 1rem; padding-bottom: 1rem;"
      >
        <launch-tile :launch="launch" />
      </cv-column>
    </cv-row>
  </cv-grid>
</template>

<script>
import { mapState } from "vuex";
import LaunchTile from "./LaunchTile.vue";
export default {
  components: {
    LaunchTile,
  },
  computed: {
    ...mapState({
      launches: (state) => state.launches,
    }),
  },
};
</script>

<style></style>
