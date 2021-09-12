<template>
  <cv-tile class="tile">
    <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
      <img
        class="bx--aspect-ratio--object tile__image"
        src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/pslv_image_20190508083736.jpeg"
        alt=""
      />
    </div>
    <div class="tile__description">
      <h3>Falcon Heavy, Finaly mission</h3>
      <p>This rocket is going to launch</p>
    </div>

    <div class="tile__buttons">
      <cv-button kind="secondary">Launch</cv-button>
      <cv-button>Repeat</cv-button>
    </div>
  </cv-tile>
</template>

<script>
export default {};
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
