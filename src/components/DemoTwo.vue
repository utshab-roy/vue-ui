<template>
    <div>
        <!-- <h2>{{ state.firstName }} {{ state.lastName }}</h2> -->
        <h2>{{ firstName }} {{ lastName }}</h2>

    </div>
</template>

<script>
import { reactive, toRefs } from "vue"

export default {
    name: 'DemoTwo',
    setup() {
        const state = reactive({
            firstName: 'Bruce',
            lastName: 'Wayne',
        })

        /**
         * by using toRefs method we can omit the state in the template
         */
        return toRefs(state)
        
    }
}
</script>

<style scoped>

</style>