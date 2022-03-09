<template>
    <TheNavigation/>

    <div class="container">
        <RouterView />
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
