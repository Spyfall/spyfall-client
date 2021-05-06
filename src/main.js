import { createApp } from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './route';

const router = new VueRouter({
  routes,
  mode: 'history'
});

createApp(App).use(router).mount('#app')