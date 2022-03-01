<template>
  <div>{{ add(5, 8) }}</div>
  <h2>{{ multiply(baseValue) }}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 2
    }
  },
  methods: {
    add(a, b) {
      return a + b
    },
    multiply(num) {
      return num * this.baseMultiplier
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
