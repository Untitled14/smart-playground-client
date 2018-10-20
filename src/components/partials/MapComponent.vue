<template>
<div class="fixed-container">
  <div class="map-container">
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
      <vl-feature :id="'point_' + index" v-for="(trainer,index) in trainers"
        :key="index" :properties="trainer">
        <vl-geom-point :coordinates="[trainer.location.lng, trainer.location.lat]"/>
        <vl-style-box>
          <vl-style-icon :src="require('@static/images/marker.png')" :scale="0.07" :anchor="[0.5, 1]" :size="[500, 500]"></vl-style-icon>
        </vl-style-box>
      </vl-feature>



      <vl-interaction-select :features.sync="selectedFeatures">
        <template slot-scope="select">
          <vl-overlay class="feature-popup" v-for="feature in select.features"
            :key="feature.id + 'popup'" :position="feature.geometry.coordinates"
            :id="'popup_' + feature.id" :auto-pan="true">
            <template slot-scope="popup">
              <section class="card">
                <div class="card-content">
                  <div class="content">
                      {{JSON.stringify(feature.properties)}}
                  </div>
                </div>
              </section>
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
  data () {
    return { 
      zoom: 12,
      center: [25.279651400000034, 54.6871555],
      rotation: 0,
      trainers: null,
      location: null,
      activeId: null,
      selectedFeatures: null
    }
  },
  methods : {
    async loadData() {
      try {
        const response = await Api.httpGet("playgrounds");
        if (response.playgrounds) {
          this.trainers = response.playgrounds;
        }
      } catch(exception) {
        console.error(exception);
      }
    },
    onClick(index, bla) {
      //console.log(index, bla)
      console.log(this.$refs)
    },
    onUpdatePosition(event) {
      const refKeys = Object.keys(this.$refs)
      console.log(this.selectedFeatures)
      refKeys.forEach(key => {
      console.log(this.$refs[key])
      })
      console.log(this.$el.getEle)
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

  .card {
    
  }
</style>


