<template>
    <h2>Component F</h2>
    <h3>username is: {{ username }}</h3>
</template>

<script>
    export default {
        name: 'ComponentF',
        inject: ['username'] // the inject is receiving the username from App component (Parent) 
    }
</script>

<style lang="scss" scoped>

</style>