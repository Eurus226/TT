import {defineStore} from "pinia";
import {reactive} from "vue";
import {userInfo} from "../types/personalInfo.ts";

const userStore = defineStore(
	"user",
	() => {
		const userSession = reactive({
			account:"未登录",
			username: "未登录",
			sex: "未登录",
			phone_num: "未登录",
			email:"未登录",
			teambelonging:"未登录",
		});

		const setUserInfo = (info: userInfo) : void => {
			userSession.id = info.id;
			userSession.username = info.username;
			userSession.sex = info.sex;
			userSession.phone_num = info.phone_num;
			userSession.email = info.email;
			userSession.teambelonging = info.teambelonging;
		};

		return {
			userSession,
			setUserInfo,
		};
	},
	{
		persist: true
	}
);

export default userStore;