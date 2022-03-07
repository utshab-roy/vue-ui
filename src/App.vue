<template>
    <Person />
</template>

<script>
import Person from "./components/Person.vue";
export default {
    name: "App",
    data() {
        return {
            
        };
    },
    components: { Person }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h4 {
    color: orange;
}
</style>
