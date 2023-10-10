import request from "./request";
import {signInfo} from "../types/personalInfo.ts";
import {userInfo} from "../types/personalInfo.ts";

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
	static async updateuserinfo(database: userInfo) {
		return request({
			"headers": {
				"Content-Type": "application/json",
			},
			method: "post",
			url: "/api/personalinformation",
			data: database
		});
	}
}