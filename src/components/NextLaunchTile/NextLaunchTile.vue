<template>
  <div class="bx--aspect-ratio bx--aspect-ratio--2x1">
    <div class="bx--aspect-ratio--object">
      <cv-tile :light="false" class="image-background">
        <cv-grid class="image-background__inside">
          <cv-row>
            <cv-column>
              <h2>Falcon 9, MissionName</h2>
              <p>Sep 15, 15:00</p>
              <p>Kennedy Space Center, USA</p>
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
  height: 100%;
  width: 100%;
}
</style>
