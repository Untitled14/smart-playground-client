<template>
  <div class="trainers-container">
      <div class="trainer-list-container" v-bind:class="{selected: selected}">
        <div  v-for="(trainer, index) in trainers" :key="index">
            <div class="trainer-item" v-bind="selectedTrainer" @click='fireEvent(trainer, trainer._id)'>{{trainer.name}}</div>
        </div>
      </div>
      <trainer-info v-bind:class="{selected: selected}" v-if="selectedTrainer" :trainer="selectedTrainer" :onBackClick='onBackClick'/>
  </div>
</template>

<script>
import Api from '@src/scripts/api';
import TrainerInfo from '@src/components/partials/TrainerInfo';

export default {
  components: {
    TrainerInfo
  },
  props: [
    "trainerId"
  ],
   data () {
    return { 
      trainers : null,
      selectedTrainer: null,
      selected: false
    }
  },
  methods : {
    async loadData() {
       try {
        const response = await Api.httpGet("trainers");
        if (response.trainers) {
            if (this.trainerId) {
              response.trainers.forEach(t => {
                if (this.trainerId === t._id) {
                  this.selectedTrainer = t;
                  this.selected = true;
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
       this.selected = true;
       this.$emit('change', index);
    },
    onBackClick(){
      this.selected = false;
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>
  .trainers-container{
    position: relative;
    height: 500px;
    background-color: #fff;
    overflow:visible;
  }
  .trainer-list-container{
    background-color: #fff;
    width: 100%;
    overflow: hidden;
    transition: max-height 1s;
    max-height: 1000px;
  }

  .trainer-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.25s;
  }

  .trainer-item:hover {
    background-color: #ddd;
  }

  @media screen and (max-width: 768px) {
    .trainer-list-container.selected{
      max-height: 0;
    }
  }
  @media screen and (min-width: 768px) {
    .trainer-list-container{
      float: left;
      width: 336px;
      border-right: 1px solid #ccc;
    }
  }

</style>