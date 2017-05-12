import VueRouter from 'vue-router';

import Dashboard from './components/Dashboard.vue';
import Profile from './components/Profile.vue';

let routes = [
    { path: '/', component: Dashboard },
    { path: '/profile', component: Profile }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});