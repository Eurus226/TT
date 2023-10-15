import request from "./request";

export default class baoming{
    static async signUp(data:{
        team_name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"post",
            url:"api/team/appliciation",
            data:data,
        });
    }
}