<template>
    <Card content="Card content 1"/>
    <Card content="Card content 2"/>
</template>

<script>
import Card from './components/Card.vue'

export default {
    name: "App",
    data() {
        return {
        }
    }, 
    methods: {
    },

    components: {
        Card
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
