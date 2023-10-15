import request from "./request";
import {signInfo,userInfo,userInfo_} from "../types/personalInfo.ts";
import { Ref } from "vue";

export default class userService {
	static async login(database: {
		account: string,
		password: string,
	}) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "post",
			url: "/api/login",
			data: database
		});
	}

	static async sign(database: signInfo) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "post",
			url: "/api/register",
			data: database
		});
	};
	static async updateuserinfo(userInfo: Ref<{ input_account: string; input_user_name: string; 
		// input_sex: string; 
		input_phonenumber: string; input_email: string; input_password: string; }>,userInfo_: { account: string; user_name: string; phonenumber: string; email: string; password: string }) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "put",
			url: "/api/personalinformation",
			data: {
				userInfo,
				userInfo_
			}
		});
	}
}