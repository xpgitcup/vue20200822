<template>
    <div>{{ currentNode }} {{ operation }}</div>
</template>

<script>
export default {
    name: "basicStructureForm",
    props: {
        currentNode: {},
        operation: String
    }
}
</script>

<style scoped>

</style>
