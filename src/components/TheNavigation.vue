<template>
    <div id="nav">
        <router-link id="logo" to="/">Vue Opainu Travel App</router-link>
        <routerLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }"
        >{{ destination.name }}</routerLink>

        <router-link :to="{ name: 'protected' }">Dashboard</router-link>
    </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
    data() {
        return {
            destinations: sourceData.destinations
        }
    },
}

</script>

