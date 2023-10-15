<template>
  <el-container>
    <el-menu
      :default-active="activeIndex"
      class="touter"
      mode="horizontal"
      v-on:select="handleSelect"
      text-color="#fb81c4"
      active-text-color="#ffd04b"
      background-color="#626262"
    >
    <el-menu-item index="filename">团队报名系统</el-menu-item>
      <div class="flex-grow"></div>
      <el-sub-menu index="0">
        <template #title>设置</template>
        <el-menu-item index="0-1" >个人信息</el-menu-item>
        <el-menu-item index="0-2" >退出登录</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="sidebar">
      <el-menu :default-active="$route.name" class="menu" background-color="#ffffff">
        <!-- 菜单项 -->
      </el-menu>
    </div>
  </el-container>
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'Page',
  setup() {
    const activeIndex = ref('0-1');

    const handleSelect = (index) => {
      activeIndex.value = index;
      switch (index) {
        case '0-1':
          this.router.push("/Show");
          break;
        case '0-2':
          this.router.push("/Login");
          break;
        default:
          break;
      }
    };

    return {
      activeIndex,
      handleSelect,
    };
  },
};
</script>

<style scoped>

.flex-grow {
  flex-grow: 2;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 400px;
  z-index: 1px;
  background-color: #626262;
  opacity: 0.4;
}

.menu {
  height: 100%;
  border-right: none;
}

.touter {
  position: fixed;
  height: 50px;
  width: 100%;
  left: 0%;
  top: 0%;
  opacity: 0.7;
  z-index: 500px;
}

</style>
