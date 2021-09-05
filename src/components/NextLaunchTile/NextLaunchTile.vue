<template>
  <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
    <div class="bx--aspect-ratio--object">
      <cv-tile :light="false" class="image-background">
        <cv-grid class="image-background__inside">
          <cv-row>
            <cv-column>
              <h2>Falcon 9</h2>
              <p>Sep 15, 15:00</p>
              <p>Kennedy Space Center, USA</p>
            </cv-column>
            <cv-column>
              <h2>Mission name</h2>
              <cv-link>More</cv-link>
            </cv-column>
          </cv-row>
        </cv-grid>

        <cv-grid class="tile__buttons">
          <cv-row>
            <cv-column>
              <div>
                <cv-button>Watch</cv-button>
                <cv-button kind="secondary">Remind</cv-button>
              </div>
            </cv-column>
          </cv-row>
        </cv-grid>
      </cv-tile>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image-background::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
  filter: brightness(90%);
  background-image: url(https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/pslv_image_20190508083736.jpeg);
}
.image-background__inside {
  position: relative;
}

.tile__buttons {
  position: absolute;
  bottom: 0;
  left: 0;
}

.bx--tile {
  color: #f4f4f4;
  height: 100%;
  width: 100%;
}
</style>
