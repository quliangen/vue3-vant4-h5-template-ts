import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import vant from './plugins/vant';

// 创建app
const app = createApp(App);

// use vant组件
Object.keys(vant).forEach(key => {
  const comp = vant[key];
  app.use(comp);
});

app.use(createPinia()).use(router).mount('#app');
