<template>
<div class="fixed-container">
  <div class="map-container">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
        <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
        <vl-feature :id="'point_' + index" v-for="(trainer,index) in playgrounds" :key="index" v-if="playgrounds">
          <vl-geom-point :coordinates="[trainer.location.lat, trainer.location.lng]" />
        </vl-feature>
    </vl-map>
  </div>
</div>
</template>

<script>
import Api from '@src/scripts/api';

export default {
  data () {
    return { 
      zoom: 12,
      center: [25.279651400000034, 54.6871555],
      rotation: 0,
      playgrounds : null
    }
  },
  methods : {
    async loadData() {
       try {
        const response = await Api.httpGet("playgrounds");
        if (response.playgrounds) {
            this.playgrounds = response.playgrounds;
        }
       } catch(exception) {
         console.error(exception);
       }
    }
  },
  async mounted() {
    await this.loadData();
  }
}
</script>

<style scoped>
  .map-container {
    width: 100%;
    height: 100%;
  }
  .fixed-container {
    width: 100%;
    height: 30rem;
  }
</style>