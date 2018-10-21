<template>
  <div class="trainers-container">
      <div class="trainer-list-container" v-bind:class="{selected: selected}">
        <div class="trainer-item" v-for="(trainer, index) in trainers" :key="index"  @click='fireEvent(trainer, trainer._id)'>
          <div class="trainer-item-title" v-bind="selectedTrainer">{{trainer.name}}</div>
          <div class="training-groups">
            <div class="group" v-for="(muscleGroup, muscleIndex) in trainer.muscleGroup" :key="muscleIndex">
                <div class="gr nugara" v-if="muscleGroup == 'vkaSAxcbBN'"/>
                <div class="gr petis" v-if="muscleGroup == 'xztQEXHRzH'"/>
                <div class="gr krutine" v-if="muscleGroup == 'Dqe0UWkxCu'"/>
                <div class="gr bicepsas" v-if="muscleGroup == 'u6ibcYmwYK'"/>
                <div class="gr tricepsas" v-if="muscleGroup == 'gMNE2oySc9'"/>
                <div class="gr dilbis" v-if="muscleGroup == 'gjo9vaK9DA'"/>
                <div class="gr ket-galv-raum" v-if="muscleGroup == 'JvbxI3mlwb'"/>
                <div class="gr dvi-galv-raum" v-if="muscleGroup == 'Vgse1QYhSe'"/>
                <div class="gr pilv-presas" v-if="muscleGroup == 'ZpYs64g97V'"/>
                <div class="gr blauzdos" v-if="muscleGroup == 'aQyQFuBfdX'"/>
            </div>
          </div>
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
    height: 700px;
    background-color: #fff;
    overflow:visible;
  }
  .trainer-list-container{
    background-color: #fff;
    top: 0;
    width: 100%;
    overflow: hidden;
    transition: max-height 1s;
    max-height: 700px;
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

  .trainer-item-title{

    display: inline-block;
  }
  .training-groups{
    /* position: relative; */
    float: right;
  }
  .training-groups .group{
    display: inline-block;
    /* float: right; */
    /* position: absolute;
    top: 0;
    right: 0; */
    margin-left: 5px;
  }
  @media screen and (max-width: 768px) {
    .trainer-list-container.selected{
      max-height: 0;
    }
  }
  @media screen and (min-width: 768px) {
    .trainer-list-container{
      float: left;
      width: 360px;
      border-right: 1px solid #ccc;
    }
  }
  /* Muscle group styles */
  .gr {
    width: 10px;
    height: 10px;
  }

  .gr.nugara{
    background-color: #bb0000;
  }
  .gr.petis{
    background-color: #478384;
  }
  .gr.krutine{
    background-color: #008800;
  }
  .gr.bicepsas{
    background-color: #bbcc00;
  }
  .gr.tricepsas{
    background-color: #bb4400;
  }
  .gr.dilbis{
    background-color: #bb0044;
  }
  .gr.ket-galv-raum{
    background-color: #bb00bb;
  }
  .gr.dvi-galv-raum{
    background-color: #440044;
  }
  .gr.pilv-presas{
    background-color: #4400bb;
  }
  .gr.blauzdos{
    background-color: #444400;
  }

</style>