import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';
import App from './App.vue';
import course_card from './components/course_card.vue';
import router from './router';
import './style.css';


// createApp(App)
// .use(router)
// .mount('#app')

const app = createApp(App)
app.component('course_card', course_card)
app.use(router)
app.mount('#app')



