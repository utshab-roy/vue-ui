<template>
  <div>
   <p>Volume level: {{ volume }}</p>
   <button @click="volume += 2">Increase</button>
   <button @click="volume -= 2">Decrease</button>
  </div>



</template>

<script>
export default {
  name: "App",
  data() {
    return {
      volume: 0
    }
  },
  methods: {
  },
  computed: {
  },
  watch: {
    volume(newValue, prevValue) {
      if(newValue > prevValue && newValue === 16) {
        alert('Too much val is bad for hearing (alert pop up only increase)');
      }
    }
  }
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

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
