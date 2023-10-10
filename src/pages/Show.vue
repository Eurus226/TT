<script setup lang="ts">
import personalInformation from "../components/personalInformation.vue";
</script>

<template>
 <div class="title">
  <h2>我的个人信息</h2></div>
  <el-col :span="16">
      <personalInformation></personalInformation>
 </el-col>
</template>

<style scoped>
.title{
  margin-bottom: 640px;
}

</style>