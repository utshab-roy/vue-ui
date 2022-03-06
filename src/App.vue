<template>
    <button @click="activeTab = 'TabA'">Tab A</button>
    <button @click="activeTab = 'TabB'">Tab B</button>
    <button @click="activeTab = 'TabC'">Tab C</button>

 
    <!--
    * when I have a requirements to switch between components
    * I should implement in this approach
    * The <keep-alive> tag will cache data of the component so that
    * we do not loss form or any data
    -->
    <keep-alive>
        <component :is="activeTab"/>
    </keep-alive>
</template>

<script>
import TabA from "./components/TabA.vue"
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";


export default {
    name: "App",
    data() {
        return {
            activeTab: 'TabA'
        };
    },
    components: { TabA, TabB, TabC }
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
