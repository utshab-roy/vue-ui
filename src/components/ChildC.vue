<template>
    <div>
        <h2>ChildC Component</h2>
        <h3>Username is: {{ username }}</h3>
        <h3>Username is: {{ childUserName }}</h3>

        <h3>Child component C count - {{ childCount }}</h3>
        <h3>Child component C Hero name - {{ firstName }} {{ lastName }}</h3>

        <button @click="incrementCount">Increment form Child component</button>
    </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
    name: 'ChildC',
    setup() {
        const childUserName = inject('c_userName', 'default USERNAME')
        const childCount = inject('c_count', 0)
        const childHero = inject('c_hero', {})
        const incrementCount = inject('incrementCount')

        return {
            childUserName,
            childCount,
            ...toRefs(childHero),
            incrementCount,
        }
    },

    inject: ['username']
}
</script>

<style scoped>

</style>