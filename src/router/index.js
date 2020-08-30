import Vue from 'vue'
import VueRouter from 'vue-router'

import status from "@/components/home/status";
import expert from "@/components/home/expert";
import guide from "@/components/home/guide";
import maintain from "@/components/home/maintain";

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: () => import('../components/default'),
        children:[
            {path: '', name: 'status', component: status},
            {
                path: 'expert', name: 'expert', component: expert
            },
            {path: 'guide', name: 'guide', component: guide},
            {path: 'maintain', name: 'maintain', component: maintain}
        ]
    },
    {
        path: '/Login', name: 'Login', component: () => import('../components/Login')
    }
]

const router = new VueRouter({
    routes
})

export default router
