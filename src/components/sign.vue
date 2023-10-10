<script setup lang="ts">
import { reactive , h } from "vue";
import { ElNotification } from "element-plus";
import userService from "../apis/userService.ts";
import router from "../routers";

const form = reactive({
  name:"",
  username: "",
  sex: "",
  phone_num: "",
  email:"",
  password: "",
  confirm_password: "",
});

const onSubmit = async () => {
  if (form.username !== "" && form.phone_num !== "" && form.password !== "" && form.password !== "") {
    if (form.password !== form.confirm_password) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "两次输入的密码不一致,请重新输入！"),
      });
      return;
    }

    const res = await userService.sign(form);

    if (res.data.code === 200 && res.data.message === "success") {
      console.log(form);
      ElNotification({
        title: "成功",
        message: h("i", { style: "color: teal" }, "注册成功！"),
      });
      router.push("/login");
    }
    else if (res.data.code === 200501 && res.data.msg === "参数错误") {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "参数错误！"),
      });
    }
    else if (res.data.code === 400 && res.data.msg === "手机号已经被绑定") {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "手机号已经被绑定！"),
      });
    }
    else {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "注册失败，请检查网络！"),
      });
    }
  }
  else {
    ElNotification({
      title: "失败",
      message: h("i", { style: "color: teal" }, "注册失败，请至少输入完整的姓名、电话号码和密码！"),
    });
  }
};

const clear = () => { 
      form.name="";
      form.username= "";
      form.sex= "";
      form.phone_num= "";
      form.email="";
      form.password= "";
      form.confirm_password= "";
};
</script>

<template>
  <div class="div">
    <div style="text-align: center ; margin-left: 120px">
      <h2>用户注册</h2>
    </div>
    <el-form :model="form" label-width="120px" >
      <el-form-item label="昵称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择您的性别">
          <el-option label="男" value= "男" />
          <el-option label="女" value= "女" />
        </el-select>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="form.phone_num" />
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input v-model="form.email" type="text" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="请输入8-10位密码,必须包含字母"/>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.confirm_password" placeholder="请输入8-10位密码,必须包含字母"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="button">注册</el-button>
        <el-button class="button" @click="clear">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.div {
  width: 400px;
  height: 200px;
  margin: 1000px 1000px 0 auto;
}

.button {
  margin: 20px;
  width: 100px;
  background-color:lightblue;
  cursor:pointer;
  border-color: blue;
}

</style>