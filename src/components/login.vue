<template>
  <div class="div">
    <el-container>

    </el-container>
    <el-container>
      <label class="label">账号</label>
      <el-input v-model="input" placeholder="请输入您的账号" class="input"/>
    </el-container>
    <br />
    <el-container>
      <label class="label">密码</label>
      <el-input
          v-model="password"
          type="password"
          placeholder="请输入您的密码"
          show-password
          class="input"
      />
    </el-container>
    <br />
    <el-button type="primary" @click="login" class="button">登录</el-button>
    <el-button @click="sign" class="button">注册</el-button>
    <el-button @click="administratorVerify" class="button">管理员登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref , h, pushScopeId } from "vue";
import userService from "../apis/userService.ts";
import loginStore from "../stores/loginStore.ts";
import userStore from "../stores/userStore.ts";
import {ElNotification} from "element-plus";
import router from "../router";
// import administratorStore from "../stores/administratorStore.ts";

const input = ref("");
const password = ref("");
const newLoginStore = loginStore();
const newUserStore = userStore();

const login = async () => {
  if (input.value === "" || password.value === "") {
    ElNotification({
      title: "登陆失败！",
      message: h("i", { style: "color: teal" }, "您的账号或密码为空"),
    });
    return;
  }

  const loginInfo = ref({
    account: input.value,
    password: password.value,
  });

  const res = await userService.login(loginInfo.value);
console.log(res);
if (res.data.msg === "success!" && res.data.code === 200) {
  const responseData = res.data.data;
  const message = "hi!亲爱的" + responseData.user_name + ",欢迎回来！";
  ElNotification({
    title: "登陆成功！",
    message: h("i", { style: "color: teal" }, message),
  });

  newLoginStore.setLogin(true);
  console.log("登录状态"+newLoginStore.loginSession);
  localStorage.setItem("login", String(true));
  localStorage.setItem("name", String(responseData.user_name));
  newUserStore.setUserInfo({
    account: responseData.account,
    user_name: responseData.user_name,
    // sex: responseData.sex,
    phonenumber: responseData.phonenumber,
    email: responseData.email,
    password: responseData.password,
  });
  console.log("你好");
  router.push('/home');
}
else if (res.data.msg === "密码错误!" && res.data.code === 2) {
  ElNotification({
    title: "登陆失败！",
    message: h("i", { style: "color: teal" }, "密码错误!"),
  });
  return;
}
else if (res.data.msg === "用户不存在!" && res.data.code === 4) {
  ElNotification({
    title: "登陆失败！",
    message: h("i", { style: "color: teal" },"用户不存在!"),
  });
  return;
}

};
const sign = () => {
  router.push("/Sign");
};
const administratordata = ref(false);
const administratorVerify = () => {
    administratordata.value = true;
};

</script>

<style scoped>
.div {
  width: 380px;
  height: 300px;
  margin: 200px 240px 0 auto;
  margin-right:60px;
  margin-left:40px;
}

.label {
  margin-right: 10px;
  font-weight: lighter;
  width:60px;
  margin-top: 3px;
}

.button {
  margin: 20px;
  width: 100px;
}
</style>
../stores/administratorStore.ts