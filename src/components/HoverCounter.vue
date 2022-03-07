<template>
    <div>
        <h2 @mouseover="incrementCount">Hovered {{ count }} Times</h2>
    </div>
</template>

<script>
import CounterMixin from "../mixins/counter";
export default {
    name: 'HoverCounter',
    data() {
        return {
            count: 10
        }
    },
    // using the mixin but the data is overridden by data() property
    mixins: [CounterMixin]
}
</script>

<style scoped>

</style>