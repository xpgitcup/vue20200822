<template>
    <basic-structure-form></basic-structure-form>
</template>

<script>
import BasicStructureForm from "@/components/home/expert/basicStructure/basicStructureForm";

export default {
    name: "newRootStructure",
    components: {BasicStructureForm},
    data() {
        return {
            operation: this.$route.query.operation
        }
    },
    created() {
        console.log('new root structure', this.$route.query.operation);
    }
}
</script>

<style scoped>

</style>
