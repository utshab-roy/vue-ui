<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName">
        <input type="text" placeholder="First Name" v-model="lName">
        <h3>Options full name: {{ fullName }}</h3>
        <br />

        <input type="text" placeholder="First Name" v-model="refFirstName">
        <input type="text" placeholder="First Name" v-model="refLastName">
        <h3>Ref full name: {{ refFullName }}</h3>
        <br />

        <input type="text" placeholder="First Name" v-model="reactiveFirstName">
        <input type="text" placeholder="First Name" v-model="reactiveLastName">
        <h3>Reactive full name: {{ reactiveFullName }}</h3>
        <br />
    </div>
</template>

<script>
import { ref, reactive,toRefs, computed } from "vue"
export default {
    name: 'Computed',
    setup(){
        const refFirstName = ref('')
        const refLastName = ref('')

        const refFullName = computed(function() {
            return `${refFirstName.value} ${refLastName.value}`
        })

        const state = reactive({
            reactiveFirstName: '',
            reactiveLastName: '',
        })

        const reactiveFullName = computed(function() {
            return `${state.reactiveFirstName} ${state.reactiveLastName}`
        })
        //composition api return
        return {
            refFirstName,
            refLastName,
            refFullName,
            ...toRefs(state),
            reactiveFullName
        }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
    computed: {
        fullName() {
            return `${this.fName} ${this.lName}`
        }
    }
}
</script>

<style scoped>

</style>