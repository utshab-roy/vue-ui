<template>
    <div>
        <h2>{{ count }}</h2>
        <button @click="incrementCount">Increment Count</button>

        <h2>{{ firstName }} {{ lastName }}</h2>
        <button @click="changeHero">Change Hero</button>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
    name: 'Methods',
    setup() {
        const count = ref(0)

        function incrementCount() {
            count.value++
        }

        const state = reactive({
            firstName: 'Bruce',
            lastName: 'Wayne',
        })

        function changeHero() {
            state.firstName = 'Clark'
            state.lastName = 'Kent'
        }

        return {
            count,
            incrementCount, // we have to return the method
            ...toRefs(state),
            changeHero
        }
    }
}
</script>

<style scoped>

</style>