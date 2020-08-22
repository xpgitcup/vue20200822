import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: () => import('../components/default')
    },
    {
        path: '/Login', name: 'Login', component: () => import('../components/Login')
    }
]

const router = new VueRouter({
    routes
})

export default router
