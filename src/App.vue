<template>
    <Card>Card Content</Card>
    <Card>
        <h2>H2 tag</h2>
    </Card>
    <Card>
        <img src="https://picsum.photos/200">
    </Card>
    <Card>
        <template v-slot:header>
            Header
        </template>
        <template v-slot:default>
            <img src="https://picsum.photos/200">
        </template>
        <template v-slot:footer>
            <button>Footer BTN</button>
        </template>
    </Card>
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
