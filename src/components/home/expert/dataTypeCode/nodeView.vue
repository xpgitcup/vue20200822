<template>
    <div>
        <div v-if="currentNode">
            当前节点：{{ currentNode.id }}.{{ currentNode.name }}.{{ currentNode.attributes }}
        </div>
        <div v-else>
            请点击选择想要操作的节点...
        </div>
    </div>
</template>

<script>
export default {
    name: "nodeView",
    props: {
        currentNode: {}
    }
}
</script>

<style scoped>

</style>
