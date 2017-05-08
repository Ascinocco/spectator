import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard.vue';
import Settings from './components/Settings.vue';

let routes = [
    { path: '/', component: Dashboard },
    { path: '/settings', component: Settings }
];

export default new VueRouter({
    routes
});