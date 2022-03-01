<template>

<div v-bind:id="color">{{ greet }} {{ name }}</div>
<div v-text="color" v-bind:class="italicBool && 'underline'"></div>
<div :class="italicBool ? 'underline' : 'text-bold'">Style Test</div>
  
</template>

<script>
export default {
  name: "App", 
  data() {
    return {
      name: "Roy", 
      greet: "Hello",
      color: "Green",
      italicBool: false,
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

.underline {
  text-decoration: underline;
}

.text-italic {
  font-style: italic;
}

.text-bold {
  font-weight: bold;
}


</style>
