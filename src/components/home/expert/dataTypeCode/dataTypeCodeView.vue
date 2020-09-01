<template>
    <el-row>
        <el-col :span="6">
            <tree-view
                :node-click-function="nodeClickFunction"
                layout="prev,pager,next"
                title="数据结构配置"
                domain-name="dataTypeCodeOperation"></tree-view>
        </el-col>
        <el-col :span="16">
            <el-card>
                <div slot="header">
                    <el-menu mode="horizontal" router>
                        <el-menu-item>
                            <i class="el-icon-plus"></i>
                            <router-link :to="{ path: '/expert/dataTypeCodeView/createRootNode'}">
                                根节点
                            </router-link>
                        </el-menu-item>
                        <el-menu-item v-if="status.pageInfo.currentNode">
                            <el-button-group>
                                <el-button type="success" icon="el-icon-star-on" round size="small">
                                    {{ status.pageInfo.currentNode.name }}
                                </el-button>
                                <el-button type="primary" icon="el-icon-circle-plus" round size="small">
                                    <router-link :to="{ path: '/expert/dataTypeCodeView/newChildNode'}">
                                        子节点
                                    </router-link>
                                </el-button>
                                <el-button type="primary" icon="el-icon-edit" round size="small">
                                    <router-link :to="{ path: '/expert/dataTypeCodeView/editDataNode'}">
                                        编辑
                                    </router-link>
                                </el-button>
                                <el-button type="primary" icon="el-icon-delete" round size="small">
                                    <router-link :to="{ path: '/expert/dataTypeCodeView/createRootNode'}">
                                        删除
                                    </router-link>
                                </el-button>
                            </el-button-group>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div>
                    <router-view :currentNode="status.pageInfo.currentNode"></router-view>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import TreeView from "@/components/common/treeView";

export default {
    name: "dataTypeCodeView",
    components: {TreeView},
    data() {
        return {
            status: {
                currentPath: this.$route.path,
                pageInfo: {
                    pageSize: 10,
                    currentPage: 1,
                    currentNode: null
                },
            },
        }
    },
    computed: {},
    methods: {
        nodeClickFunction(node) {
            // console.log('点击....', node)
            this.status.pageInfo.currentNode = node;
            if (this.$route.path != '/expert/dataTypeCodeView') {
                this.$router.replace('/expert/dataTypeCodeView')
            }
        },
        createRootNode() {
            console.log('创建根节点')
            this.dialogVisible = true;
        }
    }
}
</script>

<style scoped>

</style>
