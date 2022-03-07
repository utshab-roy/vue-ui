<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName">
        <input type="text" placeholder="First Name" v-model="lastName">
    </div>

    <PersonGreetings :firstName="firstName" :lastName="lastName" @callHeros="callHeros"/>

</template>

<script>
import { ref } from "vue";
import PersonGreetings from "./PersonGreetings.vue";
export default {
    name: "Person",
    setup() {
        const firstName = ref("");
        const lastName = ref("");

        function callHeros(hero) {
            alert(`Calling ${hero}`);
        }
        return {
            firstName,
            lastName,
            callHeros,
        };
    },
    components: { PersonGreetings }
}
</script>

<style scoped>

</style>