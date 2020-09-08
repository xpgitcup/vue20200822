<template>
    <el-row>
        <el-col :span=8>
            1
        </el-col>
        <el-col :span=8>
            中国石油大学（北京） copyright© 2020~
        </el-col>
        <el-col :span=8>
            当前用户数： {{ userCount }}
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "applicationFooter",
    data() {
        return {
            userCount: 0
        }
    },
    created() {
        this.getRequest('/home/index').then(response => {
                if (response) {
                    console.log(response);
                    this.userCount = response.count;
                }
            }
        )
    }
}
</script>

<style scoped>

</style>
