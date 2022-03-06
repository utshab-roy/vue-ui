<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} Times</button>
    </div>
</template>

<script>
import CounterMixin from "../mixins/counter";
export default {
    name: 'ClickCounter',
    mixins: [CounterMixin], // this will use the default data() from CounterMixin
}
</script>

<style scoped>

</style>