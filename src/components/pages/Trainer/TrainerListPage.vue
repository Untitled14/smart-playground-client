<template>
  <div>
      <div v-if="!trainerId">
        <div v-for="(trainer, index) in trainers" :key="index">
            <div v-bind="selectedTrainer" @click='fireEvent(trainer, index)'>{{trainer.name}}</div>
        </div>
      </div>
      <trainer-info v-if="selectedTrainer" :trainer="selectedTrainer"/>
  </div>
</template>

<script>
import Api from '@src/scripts/api';
import TrainerInfo from '@src/components/partials/TrainerInfo';

export default {
  components: {
    TrainerInfo
  },
  props: {
    trainerId: {
      type: String
    }
  },
   data () {
    return { 
      trainers : null,
      selectedTrainer: null
    }
  },
  methods : {
    async loadData() {
       try {
        const response = await Api.httpGet("trainers");
        const self = this;
        if (response.trainers) {
            if (this.trainerId) {
              response.trainers.forEach(t => {
                if (this.trainerId === t._id) {
                  this.selectedTrainer = t;
                }
              })
            }
            this.trainers = response.trainers;
        }
       } catch(exception) {
         console.error(exception);
       }
    },
    fireEvent(trainer, index) {
       this.selectedTrainer = trainer;
       this.$emit('change', index);
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

