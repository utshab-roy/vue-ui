<template>
    <div>
        <input type="text" placeholder="name" v-model="name">
        <br>
        <input type="text" placeholder="First name" v-model="firstName">
        <input type="text" placeholder="Last name" v-model="lastName">
    </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
    name: 'Watch',
    setup() {
        const firstName = ref('')
        const lastName = ref('Wayne')

        // watching multiple data source at the same time, pass values as array
        watch([firstName, lastName], function(newValues, oldValues) {
            console.log('ref firstName Old value', oldValues[0])
            console.log('ref firstName New value', newValues[0])

            console.log('ref lastName Old value', oldValues[1])
            console.log('ref lastName New value', newValues[1])
        }, { // if we want to execute watch on load, even before any change
            immediate: true
        })

        return {
            firstName,
            lastName
        }
    },
    data() {
        return {
            name: ''
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log('Old value', oldValue)
            console.log('New value', newValue)
        }
    }
}
</script>

<style scoped>

</style>