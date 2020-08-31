<template>
    <el-row>
        <el-col :span="4">
            <el-card>
                <el-collapse accordion>
                    <el-collapse-item title="单位维护">
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
                    <el-collapse-item title="结构配置">
                        <router-link :to="{ path: '/expert/dataTypeCodeView'}">
                            数据结构配置
                        </router-link>
                    </el-collapse-item>
                    <el-collapse-item title="数据维护">
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </el-col>
        <el-col :span="20">
            <el-card>
                <router-view ref="child"></router-view>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>

/**
 * 专家模式：
 * 维护系统最最基本的信息：数据结构的设置，单位管理
 */
export default {
    name: "expert",
    props: {},
    components: {},
    methods: {},
    computed: {}
}
</script>

<style scoped>

</style>
