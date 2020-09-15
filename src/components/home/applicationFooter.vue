<template>
    <el-row>
        <el-col :span=8>
            1
        </el-col>
        <el-col :span=8>
            中国石油大学（北京） copyright© 2020~
        </el-col>
        <el-col :span=8>
            共有： {{ userCount }}用户，登录：{{ userList }}
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "applicationFooter",
    data() {
        return {
            userCount: 0,
            userList: {}
        }
    },
    created() {
        this.getRequest('/home/index').then(response => {
                if (response) {
                    console.log(response);
                    this.$store.commit('set_server_status', true);
                    this.userCount = response.count;
                    this.userList = Object.values(response.list);
                }
            }
        )
    }
}
</script>

<style scoped>

</style>
