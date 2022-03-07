<template>
    <div>
        <h2>ChildA Component</h2>
        <ChildB />
    </div>
</template>

<script>
import ChildB from "./ChildB.vue";
export default {
    name: 'ChildA',
    components: {
        ChildB
    }
}
</script>

<style scoped>

</style>