<template>
    <button @click="showPopup = true">Show Popup</button>
    <Popup v-show="showPopup" @close="closePopup" />
</template>

<script>
import Popup from "./components/Popup.vue";


export default {
    name: "App",
    data() {
        return {
            showPopup: false,
        }
    },
    methods: {
        closePopup(name) {
            this.showPopup = false;
            console.log(`The name: ${name} came from Popup component and render to App component `);
        }
    },

    components: {
    Popup
},
    provide() { // the provide method pass the username to the child component
        return {
            username: this.name
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
