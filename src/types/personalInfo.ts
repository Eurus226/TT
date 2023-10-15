//store中存的个人信息
export interface userInfo {
	account:string,
	user_name: string,
	// sex: number,
	phonenumber: string,
	email: string,
	password: string,
}


export interface signInfo {
	repassword: string;
	password: string;
	phonenumber: string;
	// sex: number;
	user_name: string;
	email: string;
}

export interface userInfo_ {
	account:string,
	user_name: string,
	phonenumber: string,
	email: string,
	teambelonging: string,
}