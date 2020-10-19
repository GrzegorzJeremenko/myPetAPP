import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'
import Welcome from './pages/Welcome.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/welcome', component: Welcome },
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
    
        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if (authRequired && !loggedIn) {
        return next('/login')
    }

    next()
})