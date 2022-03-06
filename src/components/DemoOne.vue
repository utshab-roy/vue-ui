<template>
    <div>
        <h2>This is a normal name var: {{ name }}</h2>
        <h2>This is reactive const var: {{ reactiveName }}</h2>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: 'DemoOne',
    setup() {
        let name = 'Bruce'
        const reactiveName = ref('Bruce')

        /**
         * the reactiveName has changed because we use ref
         * but for the name it is not reactive
         */
        setTimeout(() => {
            name = 'Batman'
            reactiveName.value = 'Batman'
        }, 2000)

        return {
            name,
            reactiveName
        }
    },
}
</script>

<style scoped>

</style>