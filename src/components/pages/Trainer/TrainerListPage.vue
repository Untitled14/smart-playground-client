<template>
  <div>
      <div v-for="(trainer, index) in trainers" :key="index">
          <div v-bind="selectedTrainer" @click='fireEvent(trainer, index)'>{{trainer.name}}</div>
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
        if (response.trainers) {
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

