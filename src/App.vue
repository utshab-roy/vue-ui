<template>
    <TheNavigation/>

    <div class="container">
        <!-- this key is important so that it create the component while working with AJAX call -->
        <!-- this will make sure that while changing the route, component re create as $route.path is unique -->
        <RouterView :key="$route.path" />
    </div>

</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
    name: 'App',
    components: { TheNavigation }
}
</script>

<style scoped>

</style>
