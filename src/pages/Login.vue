<template>
  <div class="login_box">
  <div class="title">
    <h2 >团队报名登录</h2>
  </div>
      <login></login>
    </div>
</template>

<script setup lang="ts">
import login from "@/components/login.vue";
</script>

<style scoped>
.title{
  margin-bottom: -170px;
  margin-top:30px;
}
.login_box{
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: aliceblue;
  margin-right: 10px;
}
</style>