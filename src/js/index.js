import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueResource from 'vue-resource';
Vue.use(VueResource);
import router from '../router.js'

import app from '../App.vue';

import 'mint-ui/lib/style.min.css'
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import 'bootstrap/dist/css/bootstrap.min.css'

import '../../lib/mui/css/mui.min.css'
import '../../lib/mui/css/icons-extra.css'

// Vue.http.interceptors.push(function(request, next) {//拦截器
// // 跨域携带cookie
//     request.credentials = true;
//     next()
// });
// Vue.http.options.xhr = { withCredentials: true };
var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
});
