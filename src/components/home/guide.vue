<template>
    <el-container direction="vertical">
        <el-row>
            <el-col :span="2">
                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
            </el-col>
            <el-col :span="22">
                <el-steps :active="active" finish-status="success">
                    <el-step title="创建工程"></el-step>
                    <el-step title="拓扑结构"></el-step>
                    <el-step title="元素属性"></el-step>
                    <el-step title="边界条件"></el-step>
                    <el-step title="初始条件"></el-step>
                    <el-step title="事件列表"></el-step>
                    <el-step title="系统设置"></el-step>
                    <el-step title="运行"></el-step>
                    <el-step title="报告"></el-step>
                </el-steps>
            </el-col>
        </el-row>
        <el-row>
            <el-divider></el-divider>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-card>
                    这里显示菜单
                </el-card>
            </el-col>
            <el-col :span="20">
                <el-card>
                    这里是主显示区
                </el-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
export default {
    name: "guide",
    data() {
        return {active: 0}
    },
    methods: {
        next() {
            console.log('下一步')
            this.active++
        }
    }
}
</script>

<style scoped>

</style>
