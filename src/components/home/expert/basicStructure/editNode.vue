<template>
    <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="id">
            <el-input v-model="form.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="单位">
            <el-input v-model="form.auxname"></el-input>
        </el-form-item>
        <el-form-item label="节点类型">
            <el-select v-model="form.basicStructureType" placeholder="请选择">
                <el-option
                    v-for="item in optionsNode"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="属性类型">
            <el-select v-model="form.dataPropertyType" placeholder="请选择">
                <el-option
                    v-for="item in optionsItem"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>

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
    name: "editNode",
    props: {
        currentNode: {}
    },
    data() {
        return {
            form: {
                id: '',
                name: '',
                auxname: '',
                basicStructureType: '',
                dataPropertyType: '',
                parent: ''
            },
            optionsNode: [
                {value: 'ElementType', label: '元素类型'},
                {value: 'ElementObject', label: '实体元素'},
                {value: 'DataProperty', label: '元素属性'},
            ],
            optionsItem: [
                {value: 'none', label: '无'},
                {value: 'scalar', label: '标量'},
                {value: 'string', label: '字符串'},
                {value: 'vector', label: '一维数组'},
                {value: 'vector2D', label: '二维数组'},
                {value: 'object', label: '对象'},

            ],
        }
    },
    created() {
        this.form.id = this.$props.currentNode.id;
        let url = 'basicStructureOperation/show?id=' + this.$props.currentNode.id;
        this.getRequest(url).then(response => {
            // console.log('调用结束' + response.item);
            console.log(response.item);
            this.form.name = response.item.name;
            this.form.auxname = response.item.auxname;
            this.form.basicStructureType = response.item.basicStructureType.name;
            this.form.dataPropertyType = response.item.dataPropertyType.name;
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
                    this.putKeyValueRequest('/basicStructureOperation/update', this.form).then(response => {
                        this.loading = false;
                        console.log("put调用结果--更新节点");
                        console.log(response);
                        console.log(response.item.id);
                        if (response) {
                            this.$router.replace('/expert/expertInfo')
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
.el-select {
    display: flex;
}
</style>
