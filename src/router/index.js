import Vue from 'vue'
import VueRouter from 'vue-router'

import status from "@/components/home/status";
import expert from "@/components/home/expert";
import guide from "@/components/home/guide";
import maintain from "@/components/home/maintain";

import unitSystemView from "@/components/home/expert/physical/unitSystemView";
import physicalQuantityView from "@/components/home/expert/physical/physicalQuantityView";
import quantityUnitView from "@/components/home/expert/physical/quantityUnitView";
import dataTypeCodeView from "@/components/home/expert/dataTypeCode/dataTypeCodeView";
import nodeView from "@/components/home/expert/dataTypeCode/nodeView";
import createRootNode from "@/components/home/expert/dataTypeCode/createRootNode";
import newChildNode from "@/components/home/expert/dataTypeCode/newChildNode";
import editDataNode from "@/components/home/expert/dataTypeCode/editDataNode";

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: () => import('../components/default'),
        children: [
            {path: '', name: 'status', component: status},
            {
                path: 'expert', name: 'expert', component: expert,
                children: [
                    {path: 'unitSystemView', name: 'unitSystemView', component: unitSystemView},
                    {path: 'physicalQuantityView', name: 'physicalQuantityView', component: physicalQuantityView},
                    {path: 'quantityUnitView', name: 'quantityUnitView', component: quantityUnitView},
                    {
                        path: 'dataTypeCodeView', name: 'dataTypeCodeView', component: dataTypeCodeView,
                        children: [
                            {path: '', name: 'nodeView', component: nodeView},
                            {path: 'createRootNode', name: 'createRootNode', component: createRootNode},
                            {path: 'newChildNode', name: 'newChildNode', component: newChildNode},
                            {path: 'editDataNode', name: 'editDataNode', component: editDataNode}
                        ]
                    }
                ]
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
