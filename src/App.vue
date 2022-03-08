<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: "App",
    
}

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> ||
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <router-link to="/about">About2</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h4 {
    color: orange;
}
</style>
