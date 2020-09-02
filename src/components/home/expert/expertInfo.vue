<template>
    <el-card>
        <div slot="header">
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
            <div v-if="currentNode">
                当前节点：{{ currentNode.id }}.{{ currentNode.name }}.{{ currentNode.attributes }}
            </div>
            <div v-else>
                请点击选择想要操作的节点...
            </div>
        </div>
        <router-view
            :currentNode="currentNode">
        </router-view>
    </el-card>
</template>

<script>
export default {
    name: "expertInfo",
    props: {
        currentNode: {}
    }
}
</script>

<style scoped>

</style>
