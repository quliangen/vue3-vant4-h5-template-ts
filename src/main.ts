import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 按需引入vant
import { Button } from 'vant';

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .mount('#app');
