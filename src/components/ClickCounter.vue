<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} Times</button>
    </div>
</template>

<script>
// import CounterMixin from "../mixins/counter";
import  useCounter  from "../composables/useCounter";
export default {
    name: 'ClickCounter',
    setup() {
        // useCounter() will return an object which is destructed in count and incrementCount
        // if we do not pass any argument in the useCounter then it will use default value
        const { count, incrementCount } = useCounter(5, 10)
        

        return {
            count,
            incrementCount
        }
    }
    // mixins: [CounterMixin], // this will use the default data() from CounterMixin
}
</script>

<style scoped>

</style>