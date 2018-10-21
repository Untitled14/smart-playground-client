<template>
  <div>
    <map-component :playgrounds="playgroundsByTrainer"/>
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
    onChange(idx) {
      console.log(idx);
      if (idx) {
        console.log(this.playgrounds)
        this.playgroundsByTrainer = this.playgrounds.filter(playground => 
                playground.trainers.includes(idx)
              );
        console.log("playgrounds: " + this.playgroundsByTrainer)      
      } else {
        this.playgroundsByTrainer = this.playgrounds;
      }
    },
    async loadData() {
       try {
        const response = await Api.httpGet("playgrounds");
        if (response.playgrounds) {
           this.playgrounds = response.playgrounds;
          if (this.trainerId) {
             this.playgroundsByTrainer = this.playgrounds.filter(playground => 
                playground.trainers.includes(this.trainerId)
              );
          } else {
             this.playgroundsByTrainer = this.playgrounds; 
          }
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
