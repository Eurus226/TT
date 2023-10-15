<script setup lang="ts">
import { reactive , h } from "vue";
import { ElNotification } from "element-plus";
import userService from "../apis/userService.ts";
import router from "../router";

const form = reactive({
  user_name:"",
  account: "",
  // sex: 0,
  phonenumber: "",
  email:"",
  password: "",
  repassword: "",
});

const onSubmit = async () => {
  if (form.user_name !== "" && form.phonenumber !== "" && form.password !== "" && form.repassword !== "") {
    if (form.password !== form.repassword) {
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
    else if (res.data.code === 6) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "账号已经被注册！"),
      });
    }
    else if (res.data.code === 7) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "该用户名已经被使用！"),
      });
    }
    else if (res.data.code === 9) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "手机号已经被绑定！"),
      });
    }
    else if (res.data.code === 8) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "邮箱已经被绑定！"),
      });
    }
    else if (res.data.code === 2) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "邮箱格式不正确！"),
      });
    }
    else if (res.data.code === 3) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "手机号格式不正确！"),
      });
    }
    else if (res.data.code === 1) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "账号只能由数字组成！"),
      });
    }
    else if (res.data.code === 1) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "密码长度小于8位!"),
      });
    }
    else if (res.data.code === 5) {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "密码需同时包含大写字母、小写字母和数字,并且不能包含空格！"),
      });
    }else {
      ElNotification({
        title: "失败",
        message: h("i", { style: "color: teal" }, "注册失败"),
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
      form.user_name="";
      form.account= "";
      //form.sex= 0;
      form.phonenumber= "";
      form.email="";
      form.password= "";
      form.repassword= "";
};
</script>

<template>
  <div class="div">
    <div style="text-align: center ; margin-left: 120px">
      <h2>用户注册</h2>
    </div>
    <el-form :model="form" label-width="120px" >
      <el-form-item label="昵称">
        <el-input v-model="form.user_name" />
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.account" placeholder="账号只能由数字组成"/>
      </el-form-item>
      <!-- <el-form-item label="性别">
        <el-select v-model="form.sex" placeholder="请选择您的性别">
          <el-option label="男" value= "1" />
          <el-option label="女" value= "2" />
        </el-select>
      </el-form-item> -->
      <el-form-item label="电话号码">
        <el-input v-model="form.phonenumber" placeholder="请输入完整11位手机号"/>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input v-model="form.email" type="text" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="密码长度应大于8位,必须包含大小写字母"/>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.repassword" placeholder="密码长度应大于8位,必须包含大小写字母"/>
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