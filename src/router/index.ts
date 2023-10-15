import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from "../pages/Login.vue";
import Show from "../pages/Show.vue";
import Sign from "../pages/Sign.vue";
import {ElNotification} from "element-plus";
const routes = [
  {
  //路由初始指向
    path: "/",
    redirect: "Login",
  },
  {
    path: '/home',
    name:'home',
    component:()=>import('@/pages/home.vue'),
  },
  {
		path: "/Login" ,
		name: "Login" ,
		component: Login
	},
  {
		path: "/Show" ,
		name: "Show" ,
		component: Show
	},
  {
		path: "/Sign" ,
		name: "Sign" ,
		component: Sign
	},
];

const router = createRouter(
  {
  history: createWebHistory(),
  routes
}
);

// 路由守卫
// router.beforeEach((to, from,next) => {
//   // ...
//   // 返回 false 以取消导航
//   return false;
// });
// router.beforeEach((to, _, next) => {
// 	if (localStorage.getItem("login") === "false") {
// 		if (to.path === "/Login") {
// 			next();
// 		}
// 		if (to.path === "/Sign")  {
// 			next();
// 		}
// 		else {
// 			ElNotification({
// 				title: "失败",
// 				message: h("i", { style: "color: teal" }, "请您先登录！"),
// 			});
// 			next("/Login");
// 		}
// 	}
// 	else {
// 		next();
// 	}
// });

export default router
