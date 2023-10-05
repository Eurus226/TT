<template>
  <el-row>
    <el-col :span="8">
    </el-col>
    <el-col :span="16">
      <sign />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import sign from "../components/sign.vue";
</script>

<style scoped>
.div {
  margin-right: 4000px;
  margin-top: -300px;
}
</style>