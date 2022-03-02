<template>
    <div>
        <h2>This is a pop-up</h2>
<!-- here the $emit first parameter is the event name and the second parameter is data -->
        <button @click="$emit('close', 'Roy')">Close</button>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        emits: ['close']
    }
</script>

<style lang="scss" scoped>

</style>