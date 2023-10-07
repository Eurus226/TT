<template>
  <div class="div">
      <el-input v-model="input" disabled placeholder="昵称" />
      <el-input v-model="input" disabled placeholder="账号" />
      <el-input v-model="input" disabled placeholder="性别" />
      <el-input v-model="input" disabled placeholder="手机号" />
      <el-input v-model="input" disabled placeholder="邮箱" />
</div>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="demo-basic--circle">
        <!-- <div class="block">
          <el-avatar :size="50" :src="circleUrl" />
        </div> -->
      </div>
    </el-col>
  </el-row>

</template>
<script lang="ts" setup>
// import userService from "../apis/userService.ts";
// import userStore from "../stores/userStore.ts";
// import { reactive, toRefs } from 'vue';
import { ref } from 'vue';

const input = ref();

// const user = reactive({
//   name: '',
//   age: 0,
// });
// async  fetchUserInfo() {
//   try {
//     const response = await userService.getUserInfo();
//     userStore.setUserInfo(response.data);
//     user.name = response.data.name;
//     user.age = response.data.age;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const userRefs = toRefs(user);

// const { circleUrl,} = toRefs(state);
</script>

<style scoped>
  .div {
    width: 700px;
    height: 300px;
    margin: 50px -20px 0 auto;
  /* .demo-basic {
  text-align: center;
} */
  }
</style>




