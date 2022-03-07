<template>
    <div>
        {{ fullName }}
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    name: 'PersonGreetings',
    props: ['firstName', 'lastName'],

    // composition api approach, we have to pass props as argument in the setup() func in order to use props 
    setup(props) {
        const fullName = computed(() => {
            return `hello, ${props.firstName} ${props.lastName}`
        })

        return {
            fullName,
        }
    
    },

    // option api approach
    // computed: {
    //     fullName() {
    //         return `hello, ${this.firstName} ${this.lastName}`
    //     }
    // }
}
</script>

<style scoped>

</style>