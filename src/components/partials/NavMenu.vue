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

<style scoped>
.el-menu {
  padding-left: 1rem;
  padding-right: 1rem;
}

.el-menu li,
.el-menu li.is-active {
  border: none;
  padding: 0;
}

.el-menu a {
  height: 100%;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
}

.el-menu a.active {
  color: var(--gray);
  border-bottom: 1px solid var(--gray);
}
</style>
