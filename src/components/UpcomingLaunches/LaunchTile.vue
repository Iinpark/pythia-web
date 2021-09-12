<template>
  <cv-tile class="tile">
    <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
      <img
        class="bx--aspect-ratio--object tile__image"
        :ripple="false"
        :src="launch.image"
        alt=""
      />
    </div>
    <div class="tile__description">
      <h3>{{ launch.name }}</h3>
      <p>{{ launch.description || "No description" }}</p>
    </div>

    <div class="tile__buttons">
      <cv-button kind="secondary">Launch</cv-button>
      <cv-button>Repeat</cv-button>
    </div>
  </cv-tile>
</template>

<script>
export default {
  props: {
    launch: Object,
  },
};
</script>

<style lang="scss" scoped>
.cv-tile {
  padding: 0;
}

.tile {
  display: flex;
  flex-direction: column;
  height: 460px;
  &__image {
    object-fit: cover;
  }
  &__description {
    padding: 1rem;
    flex: 1 1 auto;
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
