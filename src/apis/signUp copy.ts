import request from "./request";

export default class baoming{
    static async signUp(data:{
        team_name:string,
        password:string,
        user_account:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"post",
            url:"/api/jointeam",
            data:data,
        });
    }
}  //用于团队报名