import { ref } from "vue";

// the useCounter() has to be start with use, otherwise it will not work
// we export the function as default so that we can use it among others component
export default function useCounter(initialValue = 0, stepSize = 1) {

    const count = ref(initialValue)

    function incrementCount() {
        count.value += stepSize
    }

    // this is just like composition api, we have to return to use it
    return {
        count,
        incrementCount
    }
}