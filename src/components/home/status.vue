<template xmlns:el-col="http://www.w3.org/1999/html">
    <el-row>
        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
                <router-link to="/expert">
                    <img src="../../assets/doctor.jpg" height="256" width="256"/>
                </router-link>
                <div style="padding: 14px;">
                    <span>专家模式：所有选项开放</span>
                    <div class="bottom clearfix">
                        <router-link to="/expert">
                            <el-button type="warning" class="button" icon="el-icon-setting">专家模式</el-button>
                        </router-link>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
                <router-link to="/guide">
                    <img src="../../assets/compus.jpg" height="256" width="256"/>
                </router-link>
                <div style="padding: 14px;">
                    <span>向导模式：根据引导，步步为营...</span>
                    <div class="bottom clearfix">
                        <el-button type="success" class="button" icon="el-icon-service" @click="toGuide">向导模式
                        </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
                <router-link to="/maintain">
                    <img src="../../assets/engineer.jpg" height="256" width="256"/>
                </router-link>
                <div style="padding: 14px;">
                    <span>维护模式：增、删、改、查、复制...</span>
                    <div class="bottom clearfix">
                        <el-button type="primary" class="button" icon="el-icon-edit" @click="toMaintain">维护模式
                        </el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "status",
        methods: {
            toGuide() {
                console.info("向导模式");
                this.$router.push("/guide");
            },
            toMaintain() {
                console.info("维护模式");
                this.$router.push("/maintain");
            }
        }
    }
</script>

<style scoped>

</style>
