import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import '@wade/styles';

const app = createApp(App);
app.use(router);
app.mount('#root');
