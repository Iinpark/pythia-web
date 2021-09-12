<template>
  <section>
    <next-launch-tile />
    <upcoming-launches />
  </section>
</template>

<script>
import NextLaunchTile from "../components/NextLaunchTile/NextLaunchTile.vue";
import UpcomingLaunches from "../components/UpcomingLaunches/UpcomingLaunches.vue";
export default {
  components: {
    NextLaunchTile,
    UpcomingLaunches,
  },
};
</script>

<style></style>
