import Vue from 'vue';
import Router from 'vue-router';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Router, VueAxios, axios, Vuex);
Vue.prototype.axios = axios;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import style from '../css/style.css';
import reset from '../css/reset.css';

//路由
import main from './router/main.vue';

import fen1 from './router/fen1.vue';
import fen2 from './router/fen2.vue';
import fen_list from './router/fen_list.vue';

import list from './router/list.vue';

import index from './router/index.vue';
import detail from './router/detail.vue';
var router = new Router({
    routes: [{
        name: '/',
        path: '/',
        component: index
    }, {
        name: 'fen1',
        path: '/fen1',
        component: fen1
    }, {
        name: 'fen2',
        path: '/fen2',
        component: fen2
    }, {
        name: 'fen_list',
        path: '/fen_list',
        component: fen_list
    }, {
        name: 'list',
        path: '/list',
        component: list
    }, {
        name: 'detail',
        path: '/detail',
        component: detail
    }]
})
var vm = new Vue({
    el: '#apps',
    router,
    render: x => x(main)
})