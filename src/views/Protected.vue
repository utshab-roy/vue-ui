<template>
    <div>
        <h1>Welcome to Dashboard, {{ username }}</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: window.user
        }
    },
    methods: {
        logout() {
            window.user = null // setting the value to null, in this case it will act as logout
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
