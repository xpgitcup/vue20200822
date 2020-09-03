<template>
    <el-card>
        <div slot="header" style="display: flex">
            <!--首先选择节点类型-->
            <el-card>
                <div slot="header">节点类型</div>
                <el-radio-group v-model="radioNode">
                    <el-radio label="ElementType">元素类型</el-radio>
                    <el-radio label="ElementObject">实体元素</el-radio>
                    <el-radio label="DataProperty">元素属性</el-radio>
                </el-radio-group>
            </el-card>
            <!--然后选择属性类型-->
            <el-card>
                <div slot="header">属性类型</div>
                <el-radio-group v-model="radioItem">
                    <el-radio label="none">无</el-radio>
                    <el-radio label="scalar">标量</el-radio>
                    <el-radio label="string">字符串</el-radio>
                    <el-radio label="vector">一维数组</el-radio>
                    <el-radio label="vector2D">二维数组</el-radio>
                    <el-radio label="object">对象</el-radio>
                </el-radio-group>
            </el-card>
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
            radioNode: String,
            radioItem: String
        }
    },
    props: {
        currentNode: {}
    }
}
</script>

<style scoped>

.el-radio {
    display: block;
    text-align: left;
}
</style>
