import Vue from 'vue'
import Router from 'vue-router'

import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'
import Welcome from './pages/Welcome.vue'
import MyPets from './pages/MyPets.vue'
import AddPet from './pages/AddPet.vue'
import Settings from './pages/Settings.vue'
import ChangePassword from './pages/ChangePassword.vue'

Vue.use(Router)

export const router = new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/welcome', component: Welcome },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/mypets', component: MyPets },
        { path: '/mypets/add', component: AddPet },
        { path: '/settings', component: Settings },
        { path: '/settings/change_password', component: ChangePassword },
    
        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/welcome', '/login', '/register']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if (authRequired && !loggedIn) {
        return next('/welcome')
    }

    next()
})