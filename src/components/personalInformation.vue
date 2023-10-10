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
      <el-input v-model="form.input_username" :disabled="input_username_disabled" class="secondline"/>
    </el-container>
    <el-container>
      <label class="label">性别</label>
      <el-input v-model="form.input_sex" :disabled="input_sex_disabled" class="thirdline"/>
    </el-container>
    <el-container>
      <label class="label">手机号</label>
      <el-input v-model="form.input_phone_num" :disabled="input_phone_num_disabled" class="forthline"/>
    </el-container>
    <el-container>
      <label class="label">邮箱</label>
      <el-input v-model="form.input_email" :disabled="input_email_disabled" class="fifthline"/>
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
 import { reactive,  ref  } from "vue";
 import {Edit, Check} from "@element-plus/icons-vue";
 import axios from "axios";


 const edit = () => {
  input_account_disabled.value = false;
  input_username_disabled.value = false;
  input_sex_disabled.value = false;
  input_phone_num_disabled.value = false;
  input_email_disabled.value = false;
};


 const newuserStore = userStore();
 const form = ref({
  input_account: newuserStore.userSession.account,
  input_username: newuserStore.userSession.username,
  input_sex: newuserStore.userSession.sex,
  input_phone_num: newuserStore.userSession.phone_num,
  input_email: newuserStore.userSession.email,
 });

 const input_username = ref(form.value.input_username);
 const input_account = ref(form.value.input_account);
 const input_sex = ref(form.value.input_sex);
 const input_phone_num = ref(form.value.input_phone_num);
 const input_email = ref(form.value.input_email);

const input_username_disabled = ref(true);
const input_account_disabled = ref(true);
const input_sex_disabled = ref(true);
const input_phone_num_disabled = ref(true);
const input_email_disabled = ref(true);

const save = () => {
  const data = {
    account: input_account.value,
    username: input_username.value,
    sex: input_sex.value,
    phone_num: input_phone_num.value,
    email: input_email.value,
  };
  axios.post("/personalinformation", data)
    .then((response: { data: any; }) => {
      console.log(response.data);
      alert("修改已保存！");
    })
    .catch((error: { response: { data: any; }; }) => {
      console.log(error.response.data);
      alert("修改保存失败，请重试！");
    });


  input_account_disabled.value = true;
  input_username_disabled.value = true;
  input_sex_disabled.value = true;
  input_phone_num_disabled.value = true;
  input_email_disabled.value = true;
};

const user = reactive({
   name: "",
   age: 0,
 });


// const { circleUrl,} = toRefs(state);
</script>

<style scoped>
.div{
  margin-top: -650px;
  margin-left: 450px;
  width: 400px;
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
.label {
  margin-right: 10px;
  font-weight: lighter;
  width:60px;
  margin-top: 3px;
}

.button1{
  margin-top: -1385px;
  margin-left: 620px;
}

.button2{
  margin-top: -1434px;
  margin-left: 710px;
}
</style>