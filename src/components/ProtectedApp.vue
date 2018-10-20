<template>
  <el-container>
    <el-header>
      <nav-menu/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import NavMenu from '@src/components/partials/NavMenu'

export default {
  components: {
    NavMenu
  },
  data() {
    return {
      isLoggedIn: true
    }
  }
}
</script>

<style scoped>
.el-header,
.el-main {
  padding: 0;
}
</style>
