<template>

  <div>
    <pre>
      {{ JSON.stringify(firstName, null, 2) }}
      {{ JSON.stringify(lastName, null, 2) }}
    </pre>

    <p>{{ fullName }}</p>

    <button @click="changeName">Change Name</button>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  },
  methods: {
    changeName() {
      this.fullName = 'Utshab Roy';

    }
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0] 
        this.lastName = names[1] 
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
