import VueRouter from 'vue-router';

import Register from './components/Register.vue';
import Landing from './components/Landing.vue';
import Login from './components/Login.vue';

let routes = [
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'active'
});