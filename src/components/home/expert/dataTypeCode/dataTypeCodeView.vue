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
                    <el-menu mode="horizontal">
                        <el-menu-item index="1" >
                            <i class="el-icon-plus"></i>
                            根节点
                        </el-menu-item>
                        <el-menu-item v-if="status.pageInfo.currentNode">
                            <el-button-group>
                                <el-button type="success" icon="el-icon-star-on" round size="small">
                                    {{ status.pageInfo.currentNode.name }}
                                </el-button>
                                <el-button type="primary" icon="el-icon-circle-plus" round size="small">
                                    子节点
                                </el-button>
                                <el-button type="primary" icon="el-icon-edit" round size="small">
                                    编辑
                                </el-button>
                                <el-button type="primary" icon="el-icon-delete" round size="small">
                                    删除
                                </el-button>
                            </el-button-group>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div>
                    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

                    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
                        <el-table :data="gridData">
                            <el-table-column property="date" label="日期" width="150"></el-table-column>
                            <el-table-column property="name" label="姓名" width="200"></el-table-column>
                            <el-table-column property="address" label="地址"></el-table-column>
                        </el-table>
                    </el-dialog>
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
            dialogTableVisible: false,
            gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
        }
    },
    computed: {},
    methods: {
        nodeClickFunction(node) {
            console.log('点击....', node)
            this.status.pageInfo.currentNode = node
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
