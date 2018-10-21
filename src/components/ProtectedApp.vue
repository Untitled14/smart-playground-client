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
}

@media screen and (max-width: 768px) {
  .el-main{
    overflow: hidden;
  }
}

.el-header {
  border-bottom: solid 1px #e6e6e6;
  box-shadow: 0 0 20px rgba(0,0,0,.2);
}

.el-header > ul {
  margin-top: -1px;
}
</style>
