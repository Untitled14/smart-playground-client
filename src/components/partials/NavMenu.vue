<template>
<div>
  <div class="menu-icon" @click="onMenuClick()"><i class="el-icon-menu"></i></div>
  <el-menu v-bind:class="{open: menuOpen}" mode="horizontal">
    <el-menu-item class="menu-mobile-item" index="1" @click="closeMenu()">
      <router-link :to="{name: 'Dashboard'}">Pagrindinis</router-link>
    </el-menu-item>
    <el-menu-item class="menu-mobile-item" index="3" @click="closeMenu()">
      <router-link :to="{name: 'TrainerItem'}">Treniruokliai</router-link>
    </el-menu-item>
    <el-menu-item class="menu-mobile-item" index="4" @click="closeMenu()">
      <router-link :to="{name: 'TrainerGroup'}">Raumenų grupės</router-link>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods : {
    onMenuClick(){
      this.menuOpen = !this.menuOpen;
    },
    closeMenu(){
       this.menuOpen = false;
    }
  }
}
</script>

<style scoped>
.menu-icon{
  display: none;
}
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

@media screen and (max-width: 768px){
  .el-menu{
    height: 0px;
    overflow: hidden;
    transition: height 0.5s;
  }
  .el-menu.open{
    height: 180px;
    overflow: hidden;
  }
  .menu-icon{
    background-color: #fff;
    padding: 10px;
    font-size: 36px;
    display: block;
    cursor: pointer;
  }
  li.menu-mobile-item{
    display: block;
    width: 100%;
  }
}
</style>
