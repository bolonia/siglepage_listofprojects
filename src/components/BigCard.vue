<template>
    <div className="category_BigCard">
        <div className="ctext">
          <h2>{{this.dataEl}}</h2>
          <ol>
            <li v-for="project in this.projects" :key="project">
              <span className="NumName"><span>{{project.title}}</span></span> 
            </li>
          </ol>
          <span @click="selectCategoryHandler">See more</span>
        </div>
      </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "BigCard",
    props: ['dataEl'],
    data() {
      return {
        projects: [],
        selectCategory: ''
      }
    },
    mounted() {
      axios
      .get(`https://suiecosystem.top/wp-json/api/get_project_by_slug_pagination/${this.dataEl}/1/3`)
      .then((response) => {
        this.projects = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
    selectCategoryHandler(e) {
      this.selectCategory = e.path[0].innerText.toLowerCase().replace(/ /g, "-");

      axios
        .get(`https://suiecosystem.top/wp-json/api/get_project_by_slug_pagination/${this.selectCategory}/1/18`)
        .then((response) => {
          this.projects = response.data;
          this.bg = response.data.slice(0, 10);
        });
    },
  },
}
</script>

<style scoped>
  .category_BigCard{    
    margin: 1em;
    width: 250px;
    padding: .4rem;
    position: relative;
    background: linear-gradient(0.1turn, purple, rgb(185, 27, 213), orange);
    border-radius: 20px;
    box-shadow: rgba(39, 40, 40, 0.5) 0px 8px 24px;
    background-size: 100% 200%;
    transition: all 1.2s ease;
    background-position: 0 0;
  }
  .category_BigCard:hover{
    transform: scale(1.02);
    background-position: 0 100%;
    box-shadow: rgba(39, 40, 40, 0.9) 0px 8px 24px;
  }
  
  .ctext{
    border-radius: 20px;
    background: #6666667d;
    color: white;
    /* padding: 2rem; */
    padding: 1rem;
    text-align: left;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    text-shadow: 1px 1px 5px rgb(41, 39, 39, 0.5);
  }
  .ctext h2{
    font-size: 48px;
    padding: 1.5rem 0 0 1rem;
  }

  a, li{
    color: rgb(243, 231, 255);
    padding: 5px 10px;
    transition: all .2s ease-in-out;
    border-radius: 6px;
  }
  a:hover, li:hover{
    background: #1f1d1d7d;
    transform: scale(1.01);
  }

  h1{
    margin-top: 0px;
  }
  li{
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
  }
  ol{
    padding-inline-start: 0px;
    padding-left: 0;
  }

  .NumName *{
    margin-left: 10px;
  }
</style>