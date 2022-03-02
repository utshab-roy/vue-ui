<template>
    <div>
        <h2>Article Component</h2>
        <h2>{{ title }}</h2>
        <h2>Number of likes: {{ likes }}</h2>
        <h2>Published: {{ published }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            title: { // way to make props required with type and default value
                type: String,
                required: true,
                default: 'Default title'
            },
            likes: Number,
            isPublished: Boolean
        }
    }
</script>

<style lang="scss" scoped>

</style>