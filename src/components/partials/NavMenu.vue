<template>
  <el-menu mode="horizontal">
    <el-menu-item index="1">
      <router-link :to="{name: 'Dashboard'}">Home</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link :to="{name: 'TrainerItem'}">Trainer</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link :to="{name: 'TrainerGroup'}">Muscles Group</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>
