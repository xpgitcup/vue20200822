<template>
    <el-row>
        <el-col :span="2">
            <div class="block" style="float: left">
                <router-link to="/">
                    <el-image :src="require('../../assets/cup-logo.png')" style="width: 60px; height: 60px">
                    </el-image>
                </router-link>
            </div>
        </el-col>
        <el-col :span="18">
            <div v-if="serverStatus">
                <div class="title">液体管道模拟</div>
            </div>
            <div v-else>
                <div class="serverOK">请检查服务状态！</div>
            </div>
        </el-col>
        <el-col :span="4">
            <div style="float: right">
                <div v-if="serverStatus">
                    <div v-if="currentUser">
                    <span>
                    <el-button>{{ currentUser.username }}</el-button>
                    <el-button @click="logout">退出</el-button>
                    </span>
                    </div>
                    <div v-else>
                        <router-link to="/Login">登录</router-link>
                    </div>
                </div>
                <div v-else>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "applicationTitle",
    computed: {
        serverStatus: function () {
            return this.$store.getters.get_server_status;
        },
        currentUser: function () {
            return this.$store.getters.get_current_user;
        }
    },
    created() {
        // this.serverStatus = this.$store.getters.get_server_status;
    },
    methods: {
        logout() {
            console.log('退出');
            this.postRequest("/logout").then(resp => {  // logout
                this.loading = false;
                // console.log("调用结果");
                // console.log(resp);
                if (resp) {
                    this.$store.commit('LOGOUT_CURRENTHR'); // 这里的调用取决于doLogin的输出
                    // console.log(this.$router);
                }
            })
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 2.2em;
}

.serverOK {
    color: red;
    font-size: 2.2em;
}
</style>
