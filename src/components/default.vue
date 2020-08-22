<template>
    <el-container>
        <!-- 这里是页眉-->
        <el-header>
            <applicationTitle :current-user="currentUser"></applicationTitle>
        </el-header>

        <el-container>
            <!--这里是主显示区-->
            <el-main>
                <div v-if="currentUser">
                    <router-view></router-view>
                </div>
                <div v-else>
                    <info></info>
                </div>
            </el-main>
        </el-container>

        <!-- 这里是页脚-->
        <el-footer>
            中国石油大学（北京） 2020~copyright©
        </el-footer>
    </el-container>
</template>

<script>
import applicationTitle from "./home/applicationTitle.vue";
import Info from "./home/info";

export default {
    name: "default",
    data() {
        return {}
    },
    computed: {
        currentUser() {
            return this.$store.getters.get_current_user;
        }
    },
    created() {
    },
    components: {
        Info,
        applicationTitle
    }
}

</script>

<style scoped>

</style>
