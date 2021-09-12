<template>
  <cv-grid>
    <h2>Upcoming Launches</h2>
    <cv-row>
      <cv-column>
        <launch-tile />
      </cv-column>
      <cv-column>
        <launch-tile />
      </cv-column>
      <cv-column>
        <launch-tile />
      </cv-column>
    </cv-row>
  </cv-grid>
</template>

<script>
import LaunchTile from "./LaunchTile.vue";
export default {
  components: {
    LaunchTile,
  },
};
</script>

<style></style>
