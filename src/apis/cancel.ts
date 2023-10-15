import request from "./request";

export default class quxiaobaoming{
    static async cancelSign(data:{
        team_name:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"del",
            url:"api/team/appliciation",
            data:data,
        });
    }
}