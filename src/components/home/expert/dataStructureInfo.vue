<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in etitles" :label="item">
            <el-card>
                <div slot="header" style="display: flex">
                    <!--编辑按钮-->
                    <div v-if="index!=2">
                        <el-button round icon="el-icon-star-on" type="primary" style="margin-right: 10px">
                            <router-link
                                :to="{ path: '/expert/dataStructureInfo/newNode',
                        query:{radioNode: radioNode, radioItem: radioItem} }">
                                根{{ item }}
                            </router-link>
                        </el-button>
                    </div>
                    <el-button-group v-if="currentNode">
                        <el-button-group>
                            <el-button type="success" icon="el-icon-star-on" round>
                                {{ currentNode.name }}==>
                            </el-button>
                            <el-button type="primary" icon="el-icon-circle-plus" round v-if="index!=2">
                                <router-link :to="{ path: '/expert/dataStructureInfo/newNode',
                            query:{radioNode: radioNode, radioItem: radioItem, parent: 'true'}}">
                                    子节点
                                </router-link>
                            </el-button>
                            <el-button type="primary" icon="el-icon-edit" round>
                                <router-link :to="{ path: '/expert/dataStructureInfo/editNode'}">
                                    编辑
                                </router-link>
                            </el-button>
                            <el-popconfirm
                                @onConfirm="deleteNode(currentNode.id)"
                                title="确定删除吗？">
                                <el-button slot="reference" type="danger" icon="el-icon-delete" round>删除</el-button>
                            </el-popconfirm>
                        </el-button-group>
                    </el-button-group>
                </div>
                <!--具体的编辑界面-->
                <router-view
                    @handleDataLoad="handleDataLoad"
                    :currentNode="currentNode">
                </router-view>
            </el-card>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name: "dataStructureInfo",
    data() {
        return {
            radioNode: 'ElementType',
            radioItem: 'none',
            elementType: ['ElementType', 'ElementObject', 'DataProperty'],
            propertyType: ['none', 'scalar', 'string', 'vector', 'vector2D', 'object'],
            etitles: ['元素类型', '实体元素', '元素属性'],
            activeName: 'second'
        };
    },
    props: {
        currentNode: {}
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab.label, event);
            // console.log(tab.label);
            // console.log(tab.index);
            this.radioNode = this.elementType[tab.index];
        },
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

</style>
