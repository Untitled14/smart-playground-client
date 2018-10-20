<template>
  <div>
    <map-component />
    <router-view @change="onChange" :trainerId = "trainerId"/>
  </div>
</template>

<script>
import MapComponent from '@src/components/partials/MapComponent';
import Api from '@src/scripts/api';

export default {
  components: {
    MapComponent
  },
  props: {
    trainerId: {
      type: String
    }
  },
  data () {
    return { 
      playgrounds : null,
      playgroundsByTrainer: null
    }
  },
   methods: {
    onChange(trainerId) {
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
        if (response.playgrounds) {
            this.playgrounds = response.playgrounds;
            this.playgroundsByTrainer = this.playgrounds;
        }
       } catch(exception) {
         console.error(exception);
       }
    }
  },
  async created() {
    await this.loadData();
  }
}
</script>
