<template>
    <div>
        <input type="text" ref="inputRef"/>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
    name: "TemplateRefComposition",
    setup() {
        const inputRef = ref(null);

        // composition api approach
        onMounted(() => {
            inputRef.value.focus() // dealing with ref we always have to deal with value
        })

        return {
            inputRef,
        }
    },
    // option api approach
    // mounted() {
    //     this.$refs.inputRef.focus()
    // },
    components: {  }
}
</script>

<style scoped>

</style>