<template>
  <el-button type="primary" @click="edit" :icon="Edit" circle class="button1" />
  <el-button type="success" @click="save" :icon="Check" class="button2" circle />
  <div class="div">
    <el-container>
      <label class="label">账号</label>
      <el-input v-model="form.input_account" :disabled="input_account_disabled" class="firstline"/>
    </el-container>
    <el-container>
      <label class="label">昵称</label>
      <el-input v-model="form.input_user_name" :disabled="input_user_name_disabled" class="secondline"/>
    </el-container>
    <!-- <el-container>
      <label class="label">性别</label>
      <el-input v-model="form.input_sex" :disabled="input_sex_disabled" class="thirdline"/>
    </el-container> -->
    <el-container>
      <label class="label">手机号</label>
      <el-input v-model="form.input_phonenumber" :disabled="input_phonenumber_disabled" class="forthline"/>
    </el-container>
    <el-container>
      <label class="label">邮箱</label>
      <el-input v-model="form.input_email" :disabled="input_email_disabled" class="fifthline"/>
    </el-container>
    <el-container>
      <label class="label">密码</label>
      <el-input v-model="form.input_password" :disabled="input_password_disabled" 
          type="password"
          show-password
          placeholder="密码长度需大于8位且包含字母大小写!"
          class="sixthline"/>
    </el-container>
    <el-container>
      <label class="label">确认密码</label>
      <el-input v-model="input_repassword" :disabled="input_repassword_disabled" class="sevenththline"/>
    </el-container>
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
 import userStore from "../stores/userStore.ts";
 import { h, reactive,  ref  } from "vue";
 import {Edit, Check} from "@element-plus/icons-vue";
 import { ElNotification } from "element-plus";
import userService from "../apis/userService";
// import {userInfo, userInfo_} from "../types/personalInfo";

const password = ref("");
 const edit = () => {
  input_user_name_disabled.value = false;
  // input_sex_disabled.value = false;
  input_phonenumber_disabled.value = false;
  input_email_disabled.value = false;
  input_password_disabled.value = false;
  input_repassword_disabled.value = false;
};

 const newuserStore = userStore();
 const form = ref({
  input_account: newuserStore.userSession.account,
  input_user_name: newuserStore.userSession.user_name,
  // input_sex: newuserStore.userSession.sex,
  input_phonenumber: newuserStore.userSession.phonenumber,
  input_email: newuserStore.userSession.email,
  input_password: newuserStore.userSession.password,
 });

 const input_user_name = ref(form.value.input_user_name);
 const input_account = ref(form.value.input_account);
//  const input_sex = ref(form.value.input_sex);
 const input_phonenumber = ref(form.value.input_phonenumber);
 const input_email = ref(form.value.input_email);
 const input_password = ref(form.value.input_password);
 
 const input_repassword = ref("");

const input_user_name_disabled = ref(true);
const input_account_disabled = ref(true);
// const input_sex_disabled = ref(true);
const input_phonenumber_disabled = ref(true);
const input_email_disabled = ref(true);
const input_password_disabled = ref(true);
const input_repassword_disabled = ref(true);


const save = async () => {
  const updateInfo = {
    account: input_account.value,
    user_name: input_user_name.value,
    // sex: input_sex.value,
    phonenumber: input_phonenumber.value,
    email: input_email.value,
    password: input_password.value,
    repassword: input_repassword.value,
  };
  if(form.value.input_user_name !== "" && form.value.input_phonenumber !== "" && form.value.input_password !== ""){

    const res: { data: { code: number; msg: string; }; } = await userService.updateuserinfo(form,updateInfo);
    if (res.data.code === 200 && res.data.msg === "success") {
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "修改成功！"),
      });
    }
    if (res.data.code === 24) {
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "两次输入的密码不相同"),
      });
    }
    else if (res.data.code === 20) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "邮箱格式不正确！"),
      });
    }
    else if (res.data.code === 21) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "手机号格式不正确！"),
      });
    }
    else if (res.data.code === 22) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "密码长度最少为8位!"),
      });
    }
    else if (res.data.code === 23) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "密码需同时包含大写字母、小写字母和数字,并且不能包含空格！"),
      });
    }
}

  input_account_disabled.value = true;
  input_user_name_disabled.value = true;
  // input_sex_disabled.value = true;
  input_phonenumber_disabled.value = true;
  input_email_disabled.value = true;
  input_password_disabled.value = true;
  input_repassword_disabled.value = true;
};

</script>

<style scoped>
.div{
  margin-top: -650px;
  margin-left: 60px;
  width: 400px;
  height: 200px;
}
.firstline{
  margin-bottom: 15px;
}

.secondline{
  margin-bottom: 15px;
}

.thirdline{
  margin-bottom: 15px;
}

.forthline{
  margin-bottom: 15px;
}

.fifthline{
  margin-bottom: 15px;
}
.sixthline{
  margin-bottom: 15px;
}
.seventhline{
  margin-bottom: 15px;
}
.label {
  margin-right: 10px;
  font-weight: lighter;
  width:60px;
  margin-top: 3px;
}

.button1{
  margin-top: -1385px;
  margin-left: 390px;
}

.button2{
  margin-top: -1434px;
  margin-right: 90px;
}
</style>