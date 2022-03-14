<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>

            <label for="username">Username</label>
            <input v-model="username" class="input" name="username" type="text" />

            <label for="password">Password</label>
            <input v-model="password" class="input" name="password" type="password" />

            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            // auth the user against the API 
            window.user = this.username // we are faking the user auth operation
            // we are redirecting the user after login to where we want
            this.$router.push({ name: 'protected' })
        }
    }
}
</script>

<style scoped>
</style>