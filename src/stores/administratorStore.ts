import {defineStore} from "pinia";
import {ref} from "vue";

const administratorStore = defineStore(
    "administratorlogin",
    () => {
        const administrator_loginsession = ref(false);
        const administratorsetLogin = (loginnewsession: boolean) => {
            administrator_loginsession.value = loginnewsession;
        };
        return {
            administrator_loginsession,
            administratorsetLogin,
        };
    },
    {
        persist: true,
    }
 );

 export default administratorStore;