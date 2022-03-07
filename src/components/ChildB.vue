<template>
    <div>
        <h2>ChildB Component</h2>
        <ChildC />
    </div>
</template>

<script>
import ChildC from "./ChildC.vue";
export default {
    name: 'ChildB',
    components: {
    ChildC
}
}
</script>

<style scoped>

</style>