<template>
<div class="trainer-info-container">
  <div class="trainer-info-back button" @click="onBackClick()">
    <h1 class="trainer-header">
      <i class="el-icon-back"></i>
      <div class="trainer-header-title">
        {{trainer.name}}
      </div>
    </h1>
  </div>
  <div class="trainer-info-back">
    <h1 class="trainer-header">
      <div class="trainer-header-title">
        {{trainer.name}}
      </div>
    </h1>
  </div>
  <div class="trainer-info-data">
    <p class="description">{{trainer.description}}</p>
    <div class="image-container">
      <img :src="trainer.image"/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["trainer", "onBackClick"]
};
</script>

<style scoped>

  .trainer-header {
    margin: 0
  }
  .trainer-header-title{
    display: inline-block;
  }

  .trainer-info-back {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.25s;
  }

  .trainer-info-container .trainer-info-back{
    display: none;
  }
  .trainer-info-container .trainer-info-back.button{
    display: block;
  }

  .button {
    background-color: #ddd;
    transition: background-color 0.25s;
    cursor: pointer;
  }
  .button:hover {
    background-color: #ddd;
  }
  .trainer-info-data{
    padding-top: 0px;
  }

.trainer-info-container {
    position: absolute;
    bottom: 0;
    height: 0;
    transition: height 1s;
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    /* padding: 10px; */
  }
  .trainer-info-container.selected {
    height: 700px;
  }

  .description {
    margin: 0px;
    padding: 10px;
  }

  .image-container {
    max-width: 600px;
    margin: auto;
  }
  .image-container img {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .trainer-info-container .trainer-info-back{
      display: block;
    }
    .trainer-info-container .trainer-info-back.button{
      display: none;
    }

    .trainer-info-container {
      position: static;
      display: block;
      height: auto;
      transition: none;
      overflow: visible;
      width: auto;
      margin-left: 360px;
    }
    
  }
</style>

