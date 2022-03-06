<template>
    <div>
        <h2>Option API {{ o_firstName }}</h2>
        <h2>Composition API {{ c_firstName }}</h2>
        <h2>Composition from greet const: {{ greet }}</h2>
        <h2>Composition from reactive const: {{ reactiveGreetHero }}</h2>
    </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: 'Data',
    setup() {
        /**
         * use ref() for primitive type, int, String, Bool
         */
        const c_firstName = ref('Bruce')
        const c_lastName = ref('Wayne')
        const c_heroName = ref('Batman')

        // console.log('c_firstName', c_firstName);
        // c_firstName.value = 'Princess'
        // c_lastName.value = 'Diana'
        // c_heroName.value = 'Wonder Woman'
        const greet = `Hello, ${c_firstName.value} ${c_firstName.value} a.k.a ${c_heroName.value}`

        /**
         * reactive can only accept object and data() internally use reactive function
         */
        const  state = reactive({
            firstName: 'Princess',
            lastName : 'Diana',
            heroName : 'Wonder Woman',
        })

        const reactiveGreetHero = `Hello from reactive setup ${state.firstName} ${state.firstName} a.k.a ${state.heroName}`

        return {
            c_firstName,
            c_lastName,
            c_heroName,
            greet,
            state,
            reactiveGreetHero,
        }
    },
    data() {
        return {
            o_firstName: 'Clark',
            o_lastName: 'Kent',
            o_HeroName: 'Superman',
        }
    },
}
</script>

<style scoped>

</style>