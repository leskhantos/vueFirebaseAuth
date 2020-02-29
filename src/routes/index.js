import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import createPost from "../components/createPost";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/posts',
            name: 'posts',
            component: Dashboard
        },
        {
            path: '/create-post',
            name: 'create-post',
            component: createPost
        }
    ]
});

export default router