import { createApp } from 'vue'
import Panel from './components/panel/App.vue';
import router from './router';

window.axios = require('axios');

const app = createApp({});
app.component('panel', Panel)
    .use(router)
    .mount('#app');

// import Site from './components/site/views/Site.vue';
//
// const site = createApp({});
// site.component('site', Site)
//     .use(router)
//     .mount('#site');

require('./bootstrap');
