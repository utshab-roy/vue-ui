<template>
    <div>
        <h2>This is a pop-up</h2>
<!-- here the $emit first parameter is the event name and the second parameter is data -->
        <input type="text" v-model="name"/>
        <button @click="$emit('close', name)">Close</button>
    </div>
</template>

<script>
    export default {
        name: 'Popup',
        emits: {
            close: (name) => {
                if (!name) {
                    return false;
                }else{
                    return true;
                }
            }
        },
        data() {
            return {
                name: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>