import { createApp } from 'vue'
import './style.css'
import '@element-plus/icons-vue';
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";//国际化
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import{faTimes} from '@fortawesome/free-solid-svg-icons'
// import { createPinia } from 'pinia'
import pinia from './stores';

const app =createApp(App);
// 实例化 Pinia
// const pinia = createPinia()

library.add(faTimes)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(ElementPlus, { locale: zhCn }).use(router).use(pinia).mount('#app')

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

