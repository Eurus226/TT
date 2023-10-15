import request from "./request";

export default class teamSearch{
    static async getTeamInformation(data:{
        UserAccount:string,
        }):Promise<any> {
        return request({
            "headers":{
                "Content-Type":"application/json",
            },
            method:"get",
            url:"api/teaminformation",
            data:data,
        });
    }
}