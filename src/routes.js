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
        { path: '/', component: Home },
        { path: '/welcome', component: Welcome },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
    
        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
<<<<<<< HEAD
    const publicPages = ['/welcome', '/login', '/register']
=======
    const publicPages = ['/login', '/register', '/welcome']
>>>>>>> c215add0a04026800d5f7abd47a9b7dd4eb371e2
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if (authRequired && !loggedIn) {
        return next('/welcome')
    }

    next()
})