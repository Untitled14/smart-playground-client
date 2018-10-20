<template>
<div class="trainer-info-container">
  <div class="trainer-info-back" @click="onBackClick()">
    <h1 class="trainer-header">
      <i class="el-icon-back"></i>
      <div class="trainer-header-title">
        {{trainer.name}}
      </div>
    </h1>
  </div>
  <div class="trainer-info-data">
    <div>
        {{trainer.description}}
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
  .trainer-info-container {
    position: absolute;
    bottom: 0;
    height: 0;
    transition: height 0.5s;
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    /* padding: 10px; */
  }

  .trainer-info-container.selected {
    height: 500px;
  }

  .trainer-info-back {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.25s;
  }
  .trainer-info-back:hover {
    background-color: #ddd;
  }
  .trainer-info-data{
    padding: 10px;
  }
</style>

