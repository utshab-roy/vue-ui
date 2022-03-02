<template>
    <div>
        <Greet name="Bruce" heroName="Batman" />
        <Greet name="Kent" heroName="Superman" />
        <Greet name="Diana" heroName="Wonder Woman" />
        <!-- heroName or hero-name both coding convention is fine, vue do this data binding auto -->
        <Greet v-bind:name="firstName" :heroName="lastName" />
        <Greet v-bind:name="firstName" :hero-name="lastName" />
    </div>
</template>

<script>
import Greet from "./components/Greet.vue";

export default {
    name: "App",
    data() {
        return {
            firstName: 'Utshab',
            lastName: 'Roy'
        }
    },

    components: {
        Greet,
    },
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
