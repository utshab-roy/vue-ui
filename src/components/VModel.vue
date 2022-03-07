<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName">
        <input type="text" placeholder="First Name" v-model="lName">
        <br />
        <input type="text" placeholder="Hero Name" v-model="lName">
        <input type="text" placeholder="First Name" v-model="lName">
        <input type="text" placeholder="Last Name" v-model="lName">
    </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
    name: 'VModel',
    setup() {
        const heroName = ref('')
        const state = reactive({
            firstName: '',
            lastName: '',
        })

    return {
        heroName,
        ...toRefs(state)
    }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
}
</script>

<style scoped>

</style>