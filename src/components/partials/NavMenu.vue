<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <router-link :to="{name: 'Dashboard'}"/>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link :to="{name: 'Trainer'}"/>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link :to="{name: 'Trainer', }"/>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
