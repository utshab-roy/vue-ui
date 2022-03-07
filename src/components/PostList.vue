<template>
    <table class="table-fixed">
    <thead>
        <tr>
        <th class="w-1/2 px-4 py-2">Title</th>
        <th class="w-1/4 px-4 py-2">Author</th>
        <th class="w-1/4 px-4 py-2">Views</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="post in posts" :key="post.id" 
        :class="post.id % 2 == 0 ? 'bg-gray-100' : ''">
            <td class="border px-4 py-2">{{ post.body }}</td>
            <td class="border px-4 py-2">{{ post.title }}</td>
            <td class="border px-4 py-2">{{ post.id }}</td>
        </tr>
    </tbody>
    </table>

    <div>
        <!-- <button @click="getPosts">Load Post</button> -->
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }}. {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr />
        </div>
    </div>
</template>

<script>
import  axios from "axios";
    export default {
        name: 'PostList',
        created() {
            this.getPosts()
        },
        data() {
            return {
                posts: [],
            }
        },
        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    console.log(response.data);
                    this.posts = response.data
                })
                .catch( (error) => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>

</style>