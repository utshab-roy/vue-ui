<template>
    <div>
        <h2>Hello, {{ name }} AKA {{ heroName }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Greet',
        props: ['name', 'heroName'],
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>