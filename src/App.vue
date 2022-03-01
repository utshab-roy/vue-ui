<template>

<!-- <h2 v-for="name, index in names" :key="name"> {{ index }} {{ name }}</h2> -->
<h2 v-for="name in fullName" :key="name"> {{ name.firstName }} {{ name.lastName }}</h2>

<div v-for="actor in actors" :key="actor.name">
    <h3>{{ actor.name }}</h3>
    <h4 v-for="movie in actor.movies" :key="movie">{{ movie }}</h4>
</div>
  
</template>

<script>
export default {
  name: "App", 
  data() {
    return {
      names: ['Diana', 'Bruch', 'Peter'],
      fullName: [
        {firstName: 'Utshab', lastName: 'Roy'},
        {firstName: 'Ashik', lastName: 'Jhalok'}
      ],
      actors: [
        {
          name:'Bale',
          movies: ['Batman', 'Yuma']
        },
        {
          name:'Di cap',
          movies: ['Titanic', 'Wolf', 'Inception']
        }
      ]
      
      
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
