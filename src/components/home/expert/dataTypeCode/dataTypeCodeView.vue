<template>
    <el-row>
        <el-col :span="6">
            <tree-view
                ref="treeView"
                :node-click-function="nodeClickFunction"
                layout="prev,pager,next"
                title="数据结构配置"
                domain-name="dataTypeCodeOperation">
            </tree-view>
        </el-col>
        <el-col :span="16">
            <el-card>
                <div slot="header">
                    <div style="display: flex">
                        <el-button round icon="el-icon-star-on" type="primary" style="margin-right: 10px">
                            <router-link :to="{ path: '/expert/dataTypeCodeView/createRootNode'}">
                                根节点
                            </router-link>
                        </el-button>
                        <el-button-group v-if="status.pageInfo.currentNode">
                            <el-button-group>
                                <el-button type="success" icon="el-icon-star-on" round>
                                    {{ status.pageInfo.currentNode.name }}
                                </el-button>
                                <el-button type="primary" icon="el-icon-circle-plus" round>
                                    <router-link :to="{ path: '/expert/dataTypeCodeView/newChildNode'}">
                                        子节点
                                    </router-link>
                                </el-button>
                                <el-button type="primary" icon="el-icon-edit" round>
                                    <router-link :to="{ path: '/expert/dataTypeCodeView/editDataNode'}">
                                        编辑
                                    </router-link>
                                </el-button>
                                <el-button type="primary" icon="el-icon-delete" round>
                                    <router-link :to="{ path: '/expert/dataTypeCodeView/deleteNode'}">
                                        删除
                                    </router-link>
                                </el-button>
                            </el-button-group>
                        </el-button-group>
                    </div>
                </div>
                <div>
                    <router-view
                        @handleDataLoad="handleDataLoad"
                        :currentNode="status.pageInfo.currentNode">
                    </router-view>
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
        handleDataLoad() {
            console.log('DataTypeCode刷新...', this.$refs.treeView);
            this.$refs.treeView.handleDataLoad();
        }
    }
}
</script>

<style scoped>

</style>
