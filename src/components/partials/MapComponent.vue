<template>
  <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
      <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
  </vl-map>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 2,
        center: [0, 0],
        rotation: 0,
      }
    },
    mounted() {
      console.log("Map mounted");
    }
  }
</script>

