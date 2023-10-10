import axios from "axios";

const request = (config: object) => {
	const instance = axios.create({
		baseURL: "https://mock.apifox.cn/m1/3363363-0-default",
		timeout: 1000
	});

	return instance(config);
};

export default request;