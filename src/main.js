import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "@/store/store";
import router from "@/plugins/router/index";


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
