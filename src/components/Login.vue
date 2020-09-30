<template>
    <div>
        <el-form
            :rules="rules"
            ref="loginForm"
            v-loading="loading"
            element-loading-text="正在登录..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            :model="loginForm"
            class="loginContainer"
        >
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item label="用户名：">
                <el-input
                    size="normal"
                    type="text"
                    v-model="loginForm.username"
                    auto-complete="off"
                    placeholder="请输入用户名"
                ></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input
                    size="normal"
                    type="password"
                    v-model="loginForm.password"
                    auto-complete="off"
                    placeholder="请输入密码"
                    @keydown.enter.native="submitLogin"
                ></el-input>
            </el-form-item>
            <el-form-item label="记住我：">
                <el-checkbox size="normal" class="loginRemember" v-model="loginForm.remember_me"></el-checkbox>
            </el-form-item>

            <el-button size="normal" type="primary" style="width: 100%;" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            loading: false,
            loginForm: {
                username: "",
                password: "",
                remember_me: true,
            },
            rules: {
                username: [
                    {required: true, message: "请输入用户名", trigger: "blur"}
                ],
                password: [{required: true, message: "请输入密码", trigger: "blur"}]
            }
        };
    },
    methods: {
        submitLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    // console.log("登录前:");
                    // this.postKeyValueRequestJson('/api/login', this.loginForm).then(resp => {    // 这样设置反向代理以后有冲突
                    this.postKeyValueRequestJson('api/login', this.loginForm).then(resp => {    // 应该这样设置，不要开头的/
                        this.loading = false;
                        // console.log("登录后调用结果");
                        // console.log(resp);
                        if (resp) {
                            this.$store.commit('INIT_CURRENTHR', resp); // 这里的调用取决于doLogin的输出
                            // window.sessionStorage.setItem("user", JSON.stringify(resp));    // 这一句很关键啊！！！
                            // console.log('修改路由...');
                            let path = this.$route.query.redirect;
                            console.log(this.$route);
                            this.$router.replace((path == '/' || path == undefined) ? '/' : path);
                        }
                    })
                } else {
                    this.$message.error("请输入所有字段");
                    return false;
                }
            });
        }
    }
};
</script>

<style>
.loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

.loginTitle {
    margin: 15px auto 20px auto;
    text-align: center;
    color: #505458;
}

.loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
}
</style>
