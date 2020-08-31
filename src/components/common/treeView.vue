<template>
    <el-card>
        <div slot="header">{{ title }}</div>

        <el-tree
            accordion
            ref="dataTypeCodeTree"
            :data="data"
            :props="defaultProps"
            node-key="id"
            @node-click="handleNodeClick"
        >
        </el-tree>

        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="status.pageInfo.currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="status.pageInfo.pageSize"
            :layout="layout"
            :total="total">
        </el-pagination>
    </el-card>
</template>

<script>
export default {
    name: "treeView",
    data() {
        return {
            status: {
                currentPath: this.$route.path,
                pageInfo: {
                    pageSize: 10,
                    currentPage: 1,
                    currentNode: null
                }
            },
            total: 0,
            data: [{
                label: '一级 1',
                children: [{
                    name: '二级 1-1'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'name'
            }
        }
    },
    props: {
        title: String,
        domainName: String,
        layout: String,
        nodeClickFunction: {}
    },
    created() {
        this.status.pageInfo = this.$store.getters.get_current_status(this.status.currentPath);
        this.handleDataLoad();
    },
    methods: {
        // 记录当前节点
        handleNodeClick(node) {
            this.status.pageInfo.currentNode = node;
            this.$store.commit('set_current_status', this.status);
            if (this.nodeClickFunction) {
                this.nodeClickFunction(node);
            }
        },
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.status.pageInfo.pageSize = size;
            this.$store.commit('set_current_status', this.status)
            this.handleDataLoad();
        },
        handleCurrentChange: function (currentPage) {
            this.status.pageInfo.currentPage = currentPage;
            this.$store.commit('set_current_status', this.status)
            this.handleDataLoad();
        },
        handleDataLoad() {
            this.loading = true;
            let offset = 0;
            offset = (this.status.pageInfo.currentPage - 1) * this.status.pageInfo.pageSize;
            let url = this.domainName + "/index4tree?offset=";
            this.getRequest(url + offset + '&max=' + this.status.pageInfo.pageSize).then(response => {
                // console.log(resp);
                if (response) {
                    // console.log(response);
                    this.data = response.list;
                    this.total = response.count
                }
                this.loading = false;
            })
        }
    }
}
</script>

<style scoped>

</style>
