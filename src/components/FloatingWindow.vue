<template>
  <div class="floating-btn-wrapper-set" >
    <button class="floating-btn1" @click="toggleFloatingWindow('Window1')">
      <i class="set-team"></i> <!-- 已经存在的图标 -->
      <span>创建团队</span>
    </button>
    
    <div v-show="showFloatingWindowset" class="floating-window" ref="floatingwindowset" @mousedown="startDragging">
      <!-- 悬浮窗的内容 -->
      <button class="close-btn" @click="closeFloatingWindow('Window1')">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </button>
      <h2>创建</h2>
      <form @submit.prevent="submitForm">
        <label>团队名称：</label>
        <input type="text" v-model="name">
        <br>

        <label>密码：</label>
        <input type ="text" v-model="mm1">
        <br>

        <label>确认密码：</label>
        <input type="text" v-model="mm2">
        <br><br>

        <button type="submit">提交</button>

      </form>
    </div>
  </div> 


  <div class="floating-btn-wrapper-join">
    <button class="floating-btn2" @click="toggleFloatingWindow('Window2')">
      <i class="join-team"></i> <!-- 已经存在的图标 -->
      <span>加入团队</span>
    </button>
    
    <div v-show="showFloatingWindowjoin" class="floating-window" ref="floatingwindowjoin" @mousedown="startDragging">
      <!-- 悬浮窗的内容 -->
      <button class="close-btn" @click="closeFloatingWindow('Window2')">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </button>
      <h2>加入</h2>
      <form @submit.prevent="submitForm">
        <label>团队名称：</label>
        <input type ="text" v-model="num2">
        <br>

        <label>密码：</label>
        <input type ="text" v-model="mm3">
        <br><br>

        <button type="submit">提交</button>
      </form>
    </div>
  </div>

</template>

<script >
export default {
  data() {
    return {
      showFloatingWindowset: false ,// 控制悬浮窗的显示与隐藏
      showFloatingWindowjoin:false,
      dragging : false,
      mouseX: 0,
      mouseY: 0,
      windowX: 0,
      windowY: 0,
    };
  },
  methods: {
    toggleFloatingWindow(Window) {
      if (Window === 'Window1') {
        this.showFloatingWindowjoin = false;
        this.showFloatingWindowset = !this.showFloatingWindowset;
      }
      else{
        this.showFloatingWindowset = false;
        this.showFloatingWindowjoin =!this.showFloatingWindowjoin;
      }
      // this.showFloatingWindow = !this.showFloatingWindow; // 切换悬浮窗的显示与隐藏状态
    },
    closeFloatingWindow(Window){
      if (Window === 'Window1'){
        this.showFloatingWindowset = false;
      }
      else if (Window === 'Window2'){
        this.showFloatingWindowjoin = false;
      }
    },

  },
};
</script>

<style>


.close-btn{
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

label {
  display: flex;
  align-items: center;    /* 垂直居中对齐 */
  justify-content: flex-start;    /* 左对齐 */
  width: 100px;
  margin-right: 10px;
}

.button {
  background-color: #b97c7c; 
  border: none;
  color: rgb(41, 203, 149);
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
}

.floating-window {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 500px;
  padding: 50px;
  box-sizing: border-box;
  position:fixed;
  left: 700px;
  top: 100px;
  background-color: #a9cdff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.993);
  opacity: 0.7;
}

.floating-btn1{
  position: fixed;
  bottom: 400px;
  left: 90px;
  z-index: 1000;
  background-color: white; /* Green */
  color: black;
  -webkit-transition-duration: 0.5s; /* Safari */
  transition-duration: 0.5s;
  opacity: 0.7;
}
.floating-btn1:hover{
  background-color: #7fb1f6;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.floating-btn2{
  position: fixed;
  bottom: 400px;
  left: 220px;
  z-index: 1000;
  background-color: white; /* Green */
  color: black;
  -webkit-transition-duration: 0.5s; /* Safari */
  transition-duration: 0.5s;
  opacity: 0.7;
}
.floating-btn2:hover{
  background-color: #7fb1f6;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.closebtn{
  position: relative;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ccc;
  color: #f538a0;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
}
</style>