<template>
<div>
  <div class="muscleGroups-container">
      <div class="muscleGroups-list-container">
        <div v-for="(muscleGroup, index) in muscleGroups" :key="index">
            <div  class="muscleGroups-item"  @click='fireEvent(index)'>
              <div style="display: inline-block">{{muscleGroup.order}} {{muscleGroup.name}}</div>
              <div style="float: right;">
                <div class="group" style="display: inline-block;margin-left: 1rem;">
                    <div class="gr nugara" v-if="index == 'vkaSAxcbBN'"/>
                    <div class="gr petis" v-if="index == 'xztQEXHRzH'"/>
                    <div class="gr krutine" v-if="index == 'Dqe0UWkxCu'"/>
                    <div class="gr bicepsas" v-if="index == 'u6ibcYmwYK'"/>
                    <div class="gr tricepsas" v-if="index == 'gMNE2oySc9'"/>
                    <div class="gr dilbis" v-if="index == 'gjo9vaK9DA'"/>
                    <div class="gr ket-galv-raum" v-if="index == 'JvbxI3mlwb'"/>
                    <div class="gr dvi-galv-raum" v-if="index == 'Vgse1QYhSe'"/>
                    <div class="gr pilv-presas" v-if="index == 'ZpYs64g97V'"/>
                    <div class="gr blauzdos" v-if="index == 'aQyQFuBfdX'"/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="muscle-groups"></div>
  </div>
</div>
</template>

<script>
import Api from '@src/scripts/api';
export default {
  props: [
    "muscleGroups"
  ],
  methods: {
    fireEvent(index) {
       this.$emit('changeMuscleGroup', index);
    }
  }
}
</script>

<style scoped>
    .muscleGroups-container {
      position: relative;
      height: 500px;
      background-color: #fff;
      overflow:visible;
    }
    .muscleGroups-list-container{
      background-color: #fff;
      width: 100%;
      overflow: hidden;
      transition: max-height 1s;
      max-height: 1000px;
    }

    .muscleGroups-item {
      padding: 10px;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      transition: background-color 0.25s;
    }

    .muscleGroups-item:hover {
      background-color: #ddd;
    }

    .muscle-groups {
      background-image: url('/static/images/muscle-groups.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 50%;
      height: 28rem;
      margin-left: 30rem;
    }

    @media screen and (max-width: 768px) {
      .muscleGroups-list-container.selected{
        max-height: 0;
      }
    }
    @media screen and (min-width: 768px) {
      .muscleGroups-list-container{
        float: left;
        width: 336px;
        border-right: 1px solid #ccc;
      }
    }
  </style>
