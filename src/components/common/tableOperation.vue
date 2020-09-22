<template>
    <el-card>
        <div slot="header">{{ title }}</div>
        <el-table :data="tableData">
            <af-table-column v-for="(item, index) in tableHeader"
                             :label="item"
                             :column-key="item"
                             :prop="item"
                             :key="index"
            >
                <template slot-scope="scope">{{ scope.row[item] }}</template>
            </af-table-column>
            <!---->
            <af-table-column
                fixed="right"
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button type="text" @click="handleClick(scope.row['id'])">编辑</el-button>
                    <el-button type="text">删除</el-button>
                </template>
            </af-table-column>
        </el-table>
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
    name: "tableOperation",
    data() {
        return {
            status: {
                currentPath: this.$route.path,
                pageInfo: {
                    pageSize: 10,
                    currentPage: 1
                }
            },
            total: 0,
            tableData: [],
            tableHeader: {}
        }
    },
    props: {
        title: String,
        domainName: String,
        layout: String
    },
    created() {
        this.status.pageInfo = this.$store.getters.get_current_status(this.status.currentPath);
        this.handleDataLoad();
    },
    methods: {
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
            let url = this.$props.domainName + "/index?offset=";
            this.getRequest(url + offset + '&max=' + this.status.pageInfo.pageSize).then(resp => {
                // console.log(resp);
                if (resp) {
                    // this.$store.state.serverOk = true;
                    this.$store.commit('set_server_status', true);
                    // console.log('数组长度：' + resp.list.length);
                    if (resp.list.length > 0) {
                        let e = resp.list[0];
                        let ee = eval(e);//JSON.parse(e);
                        this.tableHeader = Object.keys(ee);
                    }
                    this.tableData = resp.list;
                    this.total = resp.total;
                    if ((this.total <= this.status.pageInfo.pageSize) && (this.status.pageInfo.currentPage != 1)) {
                        this.handleCurrentChange(1);
                    }
                }
                this.loading = false;
            })
        }
    }
}
</script>

<style scoped>

</style>
