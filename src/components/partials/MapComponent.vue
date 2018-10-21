<template>
<div class="fixed-container">
  <div class="map-container">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <vl-feature :id="'point_' + index" v-for="(playground,index) in playgrounds"
        :key="index" :properties="playground">
        <vl-geom-point :coordinates="[playground.location.lng, playground.location.lat]"/>
        <vl-style-box>
          <vl-style-icon :src="require('@static/images/marker.png')" :scale="0.07" :anchor="[0.5, 1]" :size="[500, 500]"></vl-style-icon>
        </vl-style-box>
      </vl-feature>
      <vl-interaction-select :features.sync="selectedFeatures">
        <template slot-scope="select" v-if="select.features">
          <vl-overlay class="feature-popup" v-for="feature in select.features"
            :key="feature.id + 'popup'" :position="feature.geometry.coordinates"
            :id="'popup_' + feature.id" :auto-pan="true">
            <template slot-scope="popup">
              <el-card>
                <div slot="header" class="clearfix">
                  <h3>{{feature.properties.description}}</h3>
                  <span>{{lat = feature.geometry.coordinates[1] | com5}},</span>
                  <span>{{lng = feature.geometry.coordinates[0] | com5}}</span>
                </div>
                <div>
                  <div class="popup-image"
                    :style="{backgroundImage: `url('${feature.properties.image}')`}">
                  </div>
                </div>
              </el-card>
            </template>
          </vl-overlay>
        </template>
      </vl-interaction-select>
    </vl-map>
  </div>
</div>
</template>

<script>
import Api from '@src/scripts/api';

export default {
  props: [
    "playgrounds"
  ],
  data () {
    return { 
      zoom: 13,
      center: [25.279651400000034, 54.6871555],
      rotation: 0,
      location: null,
      activeId: null,
      selectedFeatures: null,
      lat: null,
      lng: null
    }
  },
  filters: {
    com5: function (value) {
      return value.toFixed(5)
    }
  },
  watch: {
    lat: function (value) {
      this.center = [this.lng, this.lat]
    }
  }
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 30rem;
}

.fixed-container {
  position: relative;
  width: 100%;
  height: 30rem;
}

.clearfix h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.popup-image {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 10rem;
  width: 15rem;
}

@media screen and (max-width: 768px) {
  .map-container {
    position: absolute;
    height: 20rem;
  }
}
</style>


