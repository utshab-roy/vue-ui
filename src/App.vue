<template>
    <ProvideInject />
</template>

<script>
import ProvideInject from "./components/ProvideInject.vue";
export default {
    name: "App",
    data() {
        return {
            
        };
    },
    components: { ProvideInject }
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
