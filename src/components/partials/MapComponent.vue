<template>
<div class="fixed-container">
  <div class="map-container">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
        <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
    </vl-map>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 11,
        center: [25.279651400000034, 54.6871555],
        rotation: 0
      }
    },
    mounted() {
      console.log("Map mounted");
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


