<template>
  <h2>{{name }}</h2>

  <div>
    <button v-on:click="changeName">Change Name</button>
  </div>

  <h2>{{ count }}</h2>

  <div>
    <button @click="count++">Count +</button>
    <br>
    <button @click="count--">Count -</button>
    <br>
    <button @click="increment(5)">Increment 5</button>

  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Roy",
      count: 0
    }
  },
  methods: {
    changeName() {
      this.name = "Batman"
    },
    increment(number){
      this.count += number;
    }
  },
};
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
