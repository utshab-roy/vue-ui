<template>
    <div>
        <input type="text" placeholder="name" v-model="name">
        <br>
        <input type="text" placeholder="First name" v-model="firstName">
        <input type="text" placeholder="Last name" v-model="lastName">
        <br><br>

        <input type="text" placeholder="name" v-model="name">
        <br>
        <input type="text" placeholder="Reactive First name" v-model="fName">
        <input type="text" placeholder="Reactive Last name" v-model="lName">
        <input type="text" placeholder="Reactive Hero name" v-model="options.heroName">
        <br><br>
    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
import _ from "lodash"
export default {
    name: 'Watch',
    setup() {

        const state = reactive({
            fName: '',
            lName: '',
            options: {
                heroName: '',
            }
        })

        // this is the way to watch all state property to watch
        watch(
            () => {
            return { ...state }
            }, 
            function(newValue, oldValue) {
                console.log('reactive fName Old value', oldValue.fName)
                console.log('reactive fName New value', newValue.fName)

                console.log('reactive lName Old value', oldValue.lName)
                console.log('reactive lName New value', newValue.lName)
            }
        )

        // while watching single item in the state we have this approach
        watch(
            () => state.fName, 
            function(newValue, oldValue) {
                console.log('reactive fName Old value', oldValue)
                console.log('reactive fName New value', newValue)
            }
        )

        watch(
            // for reactive object we have to use lodash and use _.cloneDeep method
            () => _.cloneDeep(state.options),
            function(newValue, oldValue) {
                console.log('reactive fName Old value', oldValue.heroName)
                console.log('reactive fName New value', newValue.heroName)
            },
            {
                deep: true // also need to set deep to true
            }
        )

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
        // composition api return
        return {
            firstName,
            lastName,
            ...toRefs(state),
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