<template>
    <h3 v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
</template>

<script>
    export default {
        name: 'NameList',
        data() {
            return {
                names: [
                    {
                        firstName: 'Romy',
                        lastName: 'Gomez',
                    },
                    {
                        firstName: 'Ashik',
                        lastName: 'Rahman',
                    },
                    {
                        firstName: 'Bipro',
                        lastName: 'Mondal',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>