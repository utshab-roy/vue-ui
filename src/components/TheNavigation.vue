<template>
    <div id="nav">
        <router-link id="logo" to="/">Vue Opainu Travel App</router-link>
        <routerLink v-for="destination in destinations" :key="destination.id" 
        :to="{name: 'destination.show', params: {id: destination.id}}">
           {{ destination.name }}
        </routerLink>
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

