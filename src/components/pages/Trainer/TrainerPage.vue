<template>
  <div>
    <map-component />
    <router-view @change="onChange" />
  </div>
</template>

<script>
import MapComponent from '@src/components/partials/MapComponent';
import Api from '@src/scripts/api';

export default {
  components: {
    MapComponent
  },
  data () {
    return { 
      playgrounds : null,
      playgroundsByTrainer: null
    }
  },
   methods: {
    onChange(trainerId) {
      console.log(trainerId);
      if (trainerId) {
        this.playgroundsByTrainer = this.playgrounds.filter(playground => {
                return playground.trainers.includes(trainerId);
              });
      } else {
        this.playgroundsByTrainer = this.playgrounds;
      }
    },
    async loadData() {
       try {
        const response = await Api.httpGet("playgrounds");
        console.log(response);
        if (response.playgrounds) {
            this.playgrounds = response.playgrounds;
            this.playgroundsByTrainer = this.playgrounds;
        }
       } catch(exception) {
         console.error(exception);
       }
    }
  },
  created() {
    this.loadData();
  }
}
</script>
