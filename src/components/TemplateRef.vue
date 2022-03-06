<template>
    <div>
        <input type="text" ref="inputRef"/>
        <PostList ref="postListRef"/>
    </div>
</template>

<script>
import PostList from "./PostList.vue"
    export default {
    name: "TemplateRef",
    mounted() {
        this.$refs.inputRef.focus()
        console.log(this.$refs.postListRef);
    },
    components: { PostList }
}
</script>

<style scoped>

</style>