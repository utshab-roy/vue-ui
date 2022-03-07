<template>
    <ClickCounter />
</template>

<script>
import ClickCounter from "./components/ClickCounter.vue";
export default {
    name: "App",
    data() {
        return {
            
        };
    },
    components: { ClickCounter }
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
