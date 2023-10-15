<template>
    <div>
      <Touter  />
      <teamControl/>
      <Team v-if="res.code==85"/>
      <FloatingWindow v-if="res.code==200"/>
    </div>
</template>
  
<script>
import Touter from '../components/Touter.vue';
import FloatingWindow from '../components/FloatingWindow.vue';
import {ref,h} from 'vue';
import searchTeam from '../apis/searchTeam.ts';
import Team from '../components/Team.vue';
import{storeToRefs} from 'pinia';
import {useTeamStore} from '../stores/teamStore.ts';
import teamControl from '@/components/teamControl.vue';
import signup from '@/components/signUp.vue';


  export default {
    data(){
      return{
        res:{
          code:200,
          data:{
            team_name:"",
            leader_name:"",
            TeamMember:[],
          }
        }
      }
    },
    components: {
      Touter,
      FloatingWindow,
      teamControl,
    },
    setup() {
      const teamstore=useTeamStore()
      const username="Asuna"  //暂拟为亚总

      const getTeamInformation =async()=>{
        const teamInfo =ref({
          UserAccount:username   //从login中传的值
        }).value;

        const res = await searchTeam.teamSearch();  //将其设置为全局变量
        if (res.code==85){
          const teamstore = useTeamStore();
          teamstore.username =username;
          teamstore.teamleader =ref.data.leader_name;
          teamstore.teamname =ref.data.team_name;
          for (const mate of ref.data.member){
            teamstore.members.push(mate);
          }
      }
      }


    }

  };
  </script>

  <style>
  body {
  background: url("../assets/background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  }
  #app {
    text-align: center;
    padding-top: 60px;
  }

</style>