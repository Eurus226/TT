// stores/counter.js
import { defineStore } from 'pinia'
// import ref from "vue";

export const useTeamStore = defineStore('useTeamStore', {
  state: () => {
    return {
      username:"",
      teamname:"",
      teamleader:"",
      members:[],
    }
  },
})