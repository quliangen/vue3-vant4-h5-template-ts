import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/plugins/vant-import';
// 创建app
const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');
