import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/store'
import { isUserAuthenticated } from './../services/localStorage'

import Login from '@/components/login'
import ForgotPassword from '@/components/ForgotPassword'
import Home from '@/components/home'

import { routes } from './administration'
import { searchRoutes } from './search'


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
            component: Home,
            children: routes.concat(searchRoutes)
        }
        // ...getAdministrationRoutes()
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
