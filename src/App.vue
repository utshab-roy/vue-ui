<template>
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>

  <form @submit="submitForm">

    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formValues.name">
    </div>

     <div>
      <label for="profile">Profile Summary:</label>
      <textarea id="profile" v-model="formValues.profileSummary" />
    </div>

    <div>
      <label for="country">Country:</label>
      <select id="country" v-model="formValues.country">
          <option value=""></option>
          <option value="bangladesh">Bangladesh</option>
          <option value="japan">Japan</option>
          <option value="usa">USA</option>
      </select>
    </div>

    <div>
      <label for="job-location">Job Location:</label>
      <select id="job-location" multiple v-model="formValues.jobLocation">
          <option value=""></option>
          <option value="bangladesh">Bangladesh</option>
          <option value="japan">Japan</option>
          <option value="usa">USA</option>
      </select>
    </div>
  
    <div>
      <input type="checkbox" id="remote-work" 
      v-model="formValues.remoteWork" 
      true-value="yes" 
      false-value="no" />
      <label for="remoteW-work">Open for remote work ?</label>
    </div>

    <div>
      <label>Skill Set</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skillSet"/>
      <label for="html">HTML</label>
      <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet"/>
      <label for="javascript">JavaScript</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skillSet"/>
      <label for="css">CSS</label>
    </div>

    <div>
      <label>Years of Experience</label>
      <input type="radio" id="0-2" value="0-2" v-model="formValues.yearOfExperience"/>
      <label for="0-2">0-2</label>
      <input type="radio" id="3-5" value="3-5" v-model="formValues.yearOfExperience"/>
      <label for="3-5">3-5</label>
      <input type="radio" id="5-10" value="5-10" v-model="formValues.yearOfExperience"/>
      <label for="5-10">5-10</label>
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>

  </form>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        // this can be boolean value, to use it no need of true-value, false value
        remoteWork: 'no', 
        skillSet: [],
        yearsOfExperience: ''
      }
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault()
      console.log('Form values', this.formValues)
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
