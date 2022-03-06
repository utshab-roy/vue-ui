<template>
    <div>
        <h2>Option API {{ o_firstName }}</h2>
        <h2>Composition API {{ c_firstName }}</h2>
        <h2>Composition from greet const: {{ greet }}</h2>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: 'Data',
    setup() {
        const c_firstName = ref('Bipro')
        console.log('c_firstName', c_firstName);
        c_firstName.value = 'Diana'
        const greet = `Hello, ${c_firstName.value}`
        return {
            c_firstName,
            greet
        }
    },
    data() {
        return {
            o_firstName: 'Utshab'
        }
    },
}
</script>

<style scoped>

</style>