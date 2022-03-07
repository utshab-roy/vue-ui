<template>
    <div>
        <h2>Parent Component: {{ name }}</h2>
        <ChildA />
    </div>
</template>

<script>
import ChildA from './ChildA.vue'
export default {
    name: 'ProvideInject',
    data() {
        return {
            name: 'Batman'
        }
    },
    components: {
        ChildA
    },
    provide() {
        return {
            username: this.name,
        }
    },
}
</script>

<style scoped>

</style>