<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="First Name" v-model="lastName">
    </div>

    <PersonGreetings :firstName="firstName" :lastName="lastName"/>

</template>

<script>
import { ref } from "vue";
import PersonGreetings from "./PersonGreetings.vue";
export default {
    name: "Person",
    setup() {
        const firstName = ref("");
        const lastName = ref("");
        return {
            firstName,
            lastName
        };
    },
    components: { PersonGreetings }
}
</script>

<style scoped>

</style>