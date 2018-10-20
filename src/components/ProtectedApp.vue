<template>
  <el-container>
    <el-header class="fixed-header">
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
.fixed-header {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.el-header,
.el-main {
  padding: 0;
}
.el-main{
  margin-top: 60px;
  overflow: hidden;
}
</style>
