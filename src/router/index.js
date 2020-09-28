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
import deleteNode from "@/components/home/expert/dataTypeCode/deleteNode";
import expertInfo from "@/components/home/expert/expertInfo";
import newNode from "@/components/home/expert/basicStructure/newNode";
import editNode from "@/components/home/expert/basicStructure/editNode";
import expertDefault from "@/components/home/expert/expertDefault";
import dataStructureInfo from "@/components/home/expert/dataStructureInfo";
import elementMaintain from "@/components/home/expert/elementMaintain";

Vue.use(VueRouter)

// 处理重复路径
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (location) {
//     return originalPush.call(this, location).catch(err => err)
// }

const routes = [
    {
        path: '/', component: () => import('../components/default'),
        children: [
            {path: '', name: 'status', component: status},
            {
                path: 'expert', component: expert,
                children: [
                    {path: '', name: 'expertDefault', component: expertDefault},
                    {path: 'unitSystemView', name: 'unitSystemView', component: unitSystemView},
                    {path: 'physicalQuantityView', name: 'physicalQuantityView', component: physicalQuantityView},
                    {path: 'quantityUnitView', name: 'quantityUnitView', component: quantityUnitView},
                    {
                        path: 'dataStructureInfo', name: 'dataStructureInfo', component: dataStructureInfo,
                        children: [
                            {path: 'newNode', name: 'newNode', component: newNode},
                            {path: 'editNode', name: 'editNode', component: editNode},
                        ]
                    },
                    {path: 'elementMaintain', name: 'elementMaintain', component: elementMaintain},
                    {path: 'expertInfo', name: 'expertInfo', component: expertInfo},
                    {
                        path: 'dataTypeCodeView', component: dataTypeCodeView,
                        children: [
                            {path: '', name: 'nodeView', component: nodeView},
                            {path: 'createRootNode', name: 'createRootNode', component: createRootNode},
                            {path: 'newChildNode', name: 'newChildNode', component: newChildNode},
                            {path: 'editDataNode', name: 'editDataNode', component: editDataNode},
                            {path: 'deleteNode', name: 'deleteNode', component: deleteNode}
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
