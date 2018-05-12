import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ForgotPassword from '@/components/ForgotPassword'
import Home from '@/components/Home'
import store from './../store/store'
import { isUserAuthenticated } from './../services/localStorage'

Vue.use(Router)

var router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/forgot-password',
            name: 'ForgotPassword',
            component: ForgotPassword
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (store.getters.isUserAuthenticated)
        next();
    else if (to.name === "Login")
        next();
    else 
        next('/');
})

export default router
