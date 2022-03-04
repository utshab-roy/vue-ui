<template>
    <NameList>
        <template v-slot:default="slotProps">
             FIRSTNAME: {{ slotProps.firstName }} LASTNAME: {{ slotProps.lastName }}
        </template>
    </NameList>

    <NameList>
        <template v-slot:default="slotProps">
            LASTNAME: {{ slotProps.lastName }} FIRSTNAME: {{ slotProps.firstName }}
        </template>
    </NameList>
</template>

<script>
import NameList from './components/NameList.vue'

export default {
    name: "App",
    data() {
        return {
        }
    }, 
    methods: {
    },

    components: {
    NameList,
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
