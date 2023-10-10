// Purpose: Export the IdentityInfo interface.

//store中存的个人信息
export interface userInfo {
	account:string,
	username: string,
	sex: string,
	phone_num: string,
	email: string,
	teambelonging: string,
}


export interface signInfo {
	confirm_password: string;
	password: string;
	phone_num: string;
	sex: string;
	username: string;
}