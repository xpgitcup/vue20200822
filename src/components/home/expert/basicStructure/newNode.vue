<template>
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="单位">
            <el-input v-model="form.auxname"></el-input>
        </el-form-item>
        <el-form-item label="节点类型">
            <el-input v-model="form.basicStructureType" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="属性类型">
            <el-input v-model="form.dataPropertyType" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="上级">
            <el-input v-model="form.parent" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="onCancle">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

export default {
    name: "newNode",
    components: {},
    props: {
        currentNode: {}
    },
    data() {
        return {
            form: {
                name: '',
                auxname: '',
                basicStructureType: '',
                dataPropertyType: '',
                parent: ''
            }
        }
    },
    created() {
        console.log('参数：', this.$route.query.radioNode, this.$route.query.radioItem);
        this.form.basicStructureType = this.$route.query.radioNode;
        this.form.dataPropertyType = this.$route.query.radioItem;
        if (this.$route.query.parent) {
            this.form.parent = this.$props.currentNode.id;
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.postKeyValueRequest('/basicStructureOperation/save', this.form).then(response => {
                        this.loading = false;
                        console.log("post调用结果--创建根节点");
                        console.log(response);
                        console.log(response.item.id);
                        if (response) {
                            this.$router.replace('/expert/dataStructureInfo')
                            // this.$router.replace('/expert')
                            console.log('向上调用...')
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
            this.$router.back();
        }
    }
}
</script>

<style scoped>

</style>
