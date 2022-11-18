<template>
  <div class="category">
    <h1>{{dataEl}} <span>{{this.projects.length}}</span></h1>
    <ul class="projects_in_category">
      <li class="project_in_category" v-for="project in this.projects" :key="project">{{project.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import ProjectCard from './ProjectCard.vue';

export default {
    name: "BigCard",
    props: ['dataEl'],
    components: {
      // ProjectCard
    },
    data() {
      return {
        projects: [],
        selectCategory: ''
      }
    },
    mounted() {
      axios
      .get(`https://suiecosystem.top/wp-json/api/get_project_by_slug_pagination/${this.dataEl}/1/100`)
      .then((response) => {
        this.projects = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    }
}
</script>

<style scoped>
.category{
  margin: 5vw;
}
.project_in_category{
  padding-left: 8px;
  list-style: none;
  font-size: 18px;
}
li:hover{
  transform: none;
  background-color: none;
  box-shadow: none;
}
h1{
  position: sticky;
  top: 0vw;
  color: white;
  background: black;
  padding: 5px;
  margin: 0 0 5px;
  border-radius: 2px;
}
span{
  font-size: 14px;
  float: right;
  margin-left: 5px;
}
</style>