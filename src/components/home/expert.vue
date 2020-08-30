<template>
    <el-row>
        <el-col :span="4">
            <el-card>
                <div>???</div>
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
