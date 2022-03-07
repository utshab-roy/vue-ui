<template>
    <div>
        {{ fullName }}

        <button @click="sendEvent">Call Hero</button>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    name: 'PersonGreetings',
    props: ['firstName', 'lastName'],
    emits: ['heroName'],

    // composition api approach, we have to pass props as argument in the setup() func in order to use props 
    setup(props, context) {
        console.log(context);
        const fullName = computed(() => {
            return `hello, ${props.firstName} ${props.lastName}`
        })

        function sendEvent() {
            context.emit('callHeros', fullName.value)
        }

        return {
            fullName,
            sendEvent
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