<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="id">
            <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
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
        <el-form-item label="parent">
            <el-input v-model="form.parent" :value="currentNode.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">更新</el-button>
            <el-button @click="onCancle">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "editDataNode",
    data() {
        return {
            form: {
                name: '',
                description: '',
                parent: ''
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
    created() {
        console.log('查询...')
        this.form.id = this.$props.currentNode.id;
        let url = 'dataTypeCodeOperation/show?id=' + this.$props.currentNode.id;
        this.getRequest(url).then(response => {
            // console.log('调用结束' + response.item);
            // console.log(response.item);
            this.form.name = response.item.name;
            this.form.description = response.item.description;
            if (response.item.parent) {
                this.form.parent = response.item.parent.id
            }
        })
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.putKeyValueRequest('/dataTypeCode/update', this.form).then(response => {
                        this.loading = false;
                        console.log("put--更新节点");
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
            this.$router.back();
        }
    }
}
</script>

<style scoped>

</style>
