import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import Welcome from './pages/Welcome.vue'

const routes = [
    { path: '/welcome', component: Welcome },
    { path: '/home', component: Home },
    { path: '/', component: Login }
];

export default routes;