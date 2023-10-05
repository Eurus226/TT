import request from "./request";
import {signInfo} from "../types/personalInfo.ts";

export default class userService {
	static async login(database: {
		phone_num: string,
		password: string,
		administratordata: boolean;
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
}