<template>
    <div>
    <button @click="signup()" class="signBtn">报名</button>
    <button @click="cancelSign()" class="cancelBtn">撤销</button>
    </div>
</template>

<script>
import axios from 'axios';
import {useTeamStore} from '@/stores/teamStore';
export default {
    setup(){
        const teamstore = useTeamStore();
        function signup(){
            const baoming = async () => {
                const resData1 = await searchTeam.teamSearch(); 
                if (resData1.code == 200) {
                    alert("报名成功");
                    const team=useTeamStore.useTeamStore;
                    const setup = async () => {
                        const Info1 = ref({
                            team_name:team.teamname,
                            password:team.password,
                            user_account:team.account,
                        });
                        const resData1 = await unionService.createTeam(Info1); 
                    };
                if (resData1.code == 4){
                    alert("该队伍已报名");
                };
            };
        }
        function cancelSign(){
            const chexiao = async () => {
                const resData2 = await signUp.signUpCancel();
                if (resData2.code == 200) {
                    const team=useTeamStore.useTeamStore;
                    const setup = async () => {
                        const Info2 = ref({
                            team_name:team.teamname,
                        });
                        const resData2 = await unionService.createTeam(Info2); 
                    }
                    alert("撤销成功");
                }
                else if (resData2.code == 4){
                    alert("请先报名");
                }
                else if (resData2.code == 5){
                    alert("无法更改报名状态");
                }
            }
        }
    }
}
}
</script>

<style scoped>
.signBtn {
    left: 45%;
    top: 50%;
    width: 100px;
    height: 30px;
    background-color: #409EFF;
    border-radius: 10px;
    border: 0;
    color: #fff;
    font-size: 14px;
    margin: 0 auto;
    margin-top: 10px;
    cursor: pointer;

}

.cancelBtn {
    left: 55%;
    top: 50%;
    width: 100px;
    height: 30px;
    background-color: #409EFF;
    border-radius: 10px;
    border: 0;
    color: #fff;
    font-size: 14px;
    margin: 0 auto;
    margin-top: 10px;
    cursor: pointer;
}

</style>