import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import the store

console.log('Hello world');

const app = createApp(App);

app.use(store); // Integrate the Vuex store with the Vue app

app.mount('#app');
