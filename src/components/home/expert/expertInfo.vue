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
            节点类型:
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
            <el-button round icon="el-icon-star-on" type="primary" style="margin-right: 10px">
                <router-link :to="{ path: '/expert/expertInfo/newRootStructure', query:{operation: '根节点'} }">
                    根节点
                </router-link>
            </el-button>
            <el-button-group v-if="currentNode">
                <el-button-group>
                    <el-button type="success" icon="el-icon-star-on" round>
                        {{ currentNode.name }}
                    </el-button>
                    <el-button type="primary" icon="el-icon-circle-plus" round>
                        <router-link :to="{ path: '/expert/expertInfo/newChildNode'}">
                            子节点
                        </router-link>
                    </el-button>
                    <el-button type="primary" icon="el-icon-edit" round>
                        <router-link :to="{ path: '/expert/expertInfo/editDataNode'}">
                            编辑
                        </router-link>
                    </el-button>
                    <el-button type="primary" icon="el-icon-delete" round>
                        <router-link :to="{ path: '/expert/expertInfo/deleteNode'}">
                            删除
                        </router-link>
                    </el-button>
                </el-button-group>
            </el-button-group>
        </div>
        <div v-if="currentNode">
            当前节点：{{ currentNode.id }}.{{ currentNode.name }}.{{ currentNode.attributes }}
        </div>
        <div v-else>
            请点击选择想要操作的节点...
        </div>
        <router-view
            :currentNode="currentNode">
        </router-view>
    </el-card>
</template>

<script>
export default {
    name: "expertInfo",
    data() {
        return {
            radioNode: '',
            radioItem: '',
            optionsNode: [
                {value: '元素类型', label: '元素类型'},
                {value: '实体元素', label: '实体元素'},
                {value: '元素属性', label: '元素属性'},
            ],
            optionsItem: [
                {value: '元素类型', label: '元素类型'},
                {value: '实体元素', label: '实体元素'},
                {value: '元素属性', label: '元素属性'},
            ],
        }
    },
    props: {
        currentNode: {}
    }
}
</script>

<style scoped>
.el-select{
    width: 110px;
}
.el-radio {
    display: block;
    text-align: left;
}
</style>
