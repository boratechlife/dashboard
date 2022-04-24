import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueApexCharts from "vue3-apexcharts";
import store from './store' // short for @/store/index
import router from './router' // <---

createApp(App).use(router).use(VueApexCharts).use(store).mount('#app')