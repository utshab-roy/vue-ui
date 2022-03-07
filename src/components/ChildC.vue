<template>
    <div>
        <h2>ChildC Component</h2>
        <h3>Username is: {{ username }}</h3>
    </div>
</template>

<script>

export default {
    name: 'ChildC',
    inject: ['username']
}
</script>

<style scoped>

</style>