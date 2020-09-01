<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="description">
            <el-select v-model="form.description" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="onCancle">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "createRootNode",
    data() {
        return {
            form: {
                name: '',
                description: ''
            },
            options: [
                {value: '元素类型', label: '元素类型'},
                {value: '实体元素', label: '实体元素'},
                {value: '元素属性', label: '元素属性'},
            ],
        }
    },
    props: {
        currentNode: {}
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.postKeyValueRequest('/dataTypeCode/save', this.form).then(response => {
                        this.loading = false;
                        console.log("post调用结果--创建根节点");
                        console.log(response);
                        console.log(response.item.id);
                        if (response) {
                            this.$router.replace('/expert/dataTypeCodeView')
                            this.$emit('handleDataLoad')
                        }
                    })
                } else {
                    this.$message.error("请输入所有字段");
                    return false;
                }
            });
        },
        onCancle() {
            // this.$router.replace('/expert');
            this.$router.back();
        }
    }
}
</script>

<style scoped>

</style>
