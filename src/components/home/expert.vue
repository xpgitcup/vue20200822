<template>
    <el-row>
        <el-col :span="4">
            <el-card>
                <el-collapse accordion v-model="activePage" @change="handleChange">
                    <el-collapse-item title="单位维护" name="1">
                        <el-menu router>
                            <el-menu-item>
                                <router-link :to="{ path: '/expert/unitSystemView'}">
                                    单位制维护
                                </router-link>
                            </el-menu-item>
                            <el-menu-item>
                                <router-link :to="{ path: '/expert/physicalQuantityView'}">
                                    物理量维护
                                </router-link>
                            </el-menu-item>
                            <el-menu-item>
                                <router-link :to="{ path: '/expert/quantityUnitView'}">
                                    物理单位维护
                                </router-link>
                            </el-menu-item>
                        </el-menu>
                    </el-collapse-item>
                    <el-collapse-item title="基础结构" name="2">
                        <tree-view
                            ref="treeView"
                            :node-click-function="nodeClickFunction"
                            layout="prev,pager,next"
                            domain-name="basicStructureOperation">
                        </tree-view>
                    </el-collapse-item>
                    <el-collapse-item title="数据维护" name="3">
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </el-col>
        <el-col :span="20">
            <el-card>
                <router-view
                    ref="child"
                    @handleDataLoad="handleDataLoad"
                    :currentNode="status.pageInfo.currentNode">
                </router-view>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import treeView from "@/components/common/treeView";

/**
 * 专家模式：
 * 维护系统最最基本的信息：数据结构的设置，单位管理
 */
export default {
    name: "expert",
    props: {},
    components: {treeView},
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
            activePage: ''
        }
    },
    methods: {
        nodeClickFunction(node) {
            // console.log('点击....', node)
            this.status.pageInfo.currentNode = node;
            if (this.$route.path != '/expert/expertInfo') {
                this.$router.replace('/expert/expertInfo');
            }
            console.log('更新子组件：', node.attributes[0].name);
            if (this.$refs.child.radioNode) {
                this.$refs.child.radioNode = node.attributes[0].name;
                this.$refs.child.radioItem = node.attributes[1].name;
            }
        },
        handleDataLoad() {
            console.log('刷新数据expert...');
            console.log(this.$refs.atreeView);
            this.$refs.treeView.handleDataLoad();
        },
        handleChange(activePage) {
            console.log('打开：', activePage);
            switch (activePage) {
                case '2':

                    break
            }
        }
    },
    computed: {}
}
</script>

<style scoped>

</style>
