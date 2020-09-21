<template>
    <el-card>
        <div slot="header" style="display: flex">
            <!--首先选择节点类型-->
            <span>
            节点类型:
            <el-select v-model="radioNode" placeholder="请选择">
                <el-option
                    v-for="item in optionsNode"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            </span>
            <!--然后选择属性类型-->
            <span>
            属性类型:
            <el-select v-model="radioItem" placeholder="请选择">
                <el-option
                    v-for="item in optionsItem"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            </span>
            <!--操作按钮-->
            <div v-if="radioItem && radioNode">
            </div>
            <div v-else>
                <el-alert title="请选择节点类型&属性类型!" type="warning"></el-alert>
            </div>
        </div>
        <div v-if="currentNode">
            当前节点：{{ currentNode.id }}-{{ currentNode.name }}-{{ currentNode.leaf }}-{{ currentNode.attributes }}
        </div>
        <div v-else>
            请点击选择想要操作的节点...
        </div>
        <router-view
            @handleDataLoad="handleDataLoad"
            :currentNode="currentNode">
        </router-view>
    </el-card>
</template>

<script>
export default {
    name: "expertInfo",
    data() {
        return {
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
    props: {
        currentNode: {}
    },
    methods: {
        handleDataLoad() {
            console.log('刷新数据expertInfo...')
            console.log('向上调用...')
            this.$emit('handleDataLoad')
        },
        deleteNode(id) {
            console.log('删除！', id);
            this.deleteRequest('/basicStructureOperation/delete/' + id).then(response => {
                this.loading = false;
                console.log("delete--删除节点");
                console.log(response);
                if (response) {
                    this.$emit('handleDataLoad')
                }
            })
        }
    }
}
</script>

<style scoped>
.el-select {
    width: 110px;
}
</style>
