<template>
    <div class="left-area">
      <h3>团队成员：</h3>
      <br><br>
      <h1>队长：</h1>
      <p>{{teamstore.teamleader}}</p>
      <br>
      <h1>队员：</h1>
      <ul>
        <li v-for="member in teamstore.members" :key="member">{{ member }} </li>
      </ul>
    </div>
  </template>
  
  <script >
  import { useTeamStore} from '@/stores/teamStore.ts'
  const teamstore = useTeamStore();
  export default {

    props: {
      teammate: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .left-area {
    width: 300px;
    background-color: #eee;
    padding: 10px;
  }
  </style>