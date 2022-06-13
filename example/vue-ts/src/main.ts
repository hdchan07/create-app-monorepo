import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';

const app = createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app');

console.log(111, app);
