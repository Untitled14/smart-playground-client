<template>
  <div>
    <map-component :playgrounds="playgroundsByTrainer"/>
    <router-view @change="onChange" :trainerId= "trainerId" :muscleGroups= "muscleGroups" @changeMuscleGroup="onChangeMuscleGroup"/>
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
      playgroundsByTrainer: null,
      muscleGroups: null,
      trainers: null
    }
  },
   methods: {
    onChange(idx) {
      if (idx) {
        this.playgroundsByTrainer = this.playgrounds.filter(playground => playground.trainers.includes(idx));      
      } else {
        this.playgroundsByTrainer = this.playgrounds;
      }
    },
    onChangeMuscleGroup(idx) {
      var trainersIds = new Array();
      var trainer;
      for (trainer in this.trainers) {
        if (this.trainers[trainer].muscleGroup.includes(idx)) {
            trainersIds.push(this.trainers[trainer]._id);
        }
      }
      var playgroundsFiltered = new Array();;
      var playground;
      var trnId;
      for (playground in this.playgrounds) {
          for (trnId in trainersIds) {
            console.log("Playground trainers: " + this.playgrounds[playground].trainers);
            if (this.playgrounds[playground].trainers.includes(trainersIds[trnId])) {
               console.log(this.playgrounds[playground]);
                playgroundsFiltered.push(this.playgrounds[playground]);
                break;
            }
          }
      }
      console.log(playgroundsFiltered);
      this.playgroundsByTrainer = playgroundsFiltered;
    },
    async loadData() {
       try {
        const response = await Api.httpGet("playgrounds");
        const trainersResp = await Api.httpGet("trainers");
        this.trainers = trainersResp.trainers;
        if (response.playgrounds) {
           this.playgrounds = response.playgrounds;
           this.muscleGroups = response.muscleGroups;
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
