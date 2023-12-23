import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router'; // Vue Routerのインポート

const app = createApp(App);
app.use(router); // Vue Routerの使用
app.mount('#app');
