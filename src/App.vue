<template>
    <h1 class="text-3xl font-bold underline">
        Hello world!
    </h1>

    <PostList />
</template>

<script>
import PostList from "./components/PostList.vue";
export default {
    name: "App",
    data() {
        return {
            
        };
    },
    components: {PostList}
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
