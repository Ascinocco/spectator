// import libraries
import Vue from 'vue';
import axios from 'axios';

import Example from './components/Example.vue';

// make axios globally available (its the http client)
window.axios = axios;

new Vue({
    el: '#spectatorApp',

    components: {
        Example
    },

    render: h => h(Example)
});