<template>
    <div>
        <h2>Parent Component: {{ name }}</h2>
        <h2>Parent Component count: {{ count }}</h2>
        <h2>Parent Component hero: {{ firstName }} {{ lastName }}</h2>

        <button @click="incrementCount">Increment Count</button>

        <ChildA />
    </div>
</template>

<script>
import { provide, ref, reactive, toRefs } from "vue"
import ChildA from './ChildA.vue'
export default {
    name: 'ProvideInject',
    setup() {
        provide('c_userName', 'Roy (From composition api)')

        const count = ref(0)

        function incrementCount() {
            count.value++
        }

        const state = reactive({
            firstName: 'Bruce',
            lastName: 'Wayne',
        })

        provide('c_count', count)
        provide('c_hero', state)
        provide('incrementCount', incrementCount)

        return {
            count,
            ...toRefs(state),
            incrementCount
        }
    },
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