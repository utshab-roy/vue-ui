<template>
    <h4>App component text</h4>
    <!-- 
        if we use slot for the child then the parent component css will be 
        overwritten by parent even though child component has scoped css
    -->
    <ChildStyles/>
</template>

<script>
import ChildStyles from './components/ChildStyles.vue'

export default {
    name: "App",
    data() {
        return {
        }
    }, 
    methods: {
    },

    components: {
    ChildStyles
    }
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
