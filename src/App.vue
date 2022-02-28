<template>

<div>{{ greet }} {{ name }}</div>
<div v-text="color"></div>
  
</template>

<script>
export default {
  name: "App", 
  data() {
    return {
      name: "Roy", 
      greet: "Hello",
      color: "Green"
    }
  }
}

</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
