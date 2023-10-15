import {defineStore} from "pinia";
import {reactive} from "vue";
import {userInfo} from "../types/personalInfo.ts";

const userStore = defineStore(
	"user",
	() => {
		const userSession = reactive({
			account:"未登录",
			user_name: "未登录",
			// sex: "未登录",
			phonenumber: "未登录",
			email:"未登录",
			password:"未登录",
		});

		const setUserInfo = (info: userInfo) : void => {
			userSession.account = info.account;
			userSession.user_name = info.user_name;
			// userSession.sex = info.sex;
			userSession.phonenumber = info.phonenumber;
			userSession.email = info.email;
			userSession.password = info.password;
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