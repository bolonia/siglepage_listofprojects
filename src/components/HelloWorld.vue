<template>
  <!-- blocks in background -->
  <div class="area">
    <div class="circles projects">
      <ul>
        <li v-for="project in this.bg" :key="project.id">
          <div class="title">
            <img
              src="../assets/logo_telegram_airplane_air_plane_paper_airplane_icon_143170.png"
              alt=""
            />
            <h3>{{ project.title }}</h3>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <div class="social_media">
            <a v-bind:href="project.twitter"
              ><img src="../assets/logotw.png" alt=""
            /></a>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="nav">
    <h1>suiecosystem</h1>
    <!-- <div class="linkBlock">for link in fiture</div> -->
    <button onclick="location.href = `https://suiecosystem.top/submit-sui-project/`">Submit</button>
  </div>
  <div class="main">
    <div class="categories">
      <button
        @click="selectCategoryHandler"
        v-for="item in this.categories"
        :key="item"
      >
        {{ item }}
      </button>
    </div>
    <div class="projects">
      <ul>
        <li v-for="project in this.projects" :key="project.id">
          <div class="title">
            <img
              src="https://suiecosystem.top/wp-content/uploads/2022/08/aySZ37SC_400x400-120x120.jpg"
              alt=""
            />
            <h3>{{ project.title }}</h3>
          </div>
          <p>{{ project.excerpt.split(",")[0].split(".")[0] }}</p>
          <div class="social_media">
            <a v-bind:href="project.twitter"
              ><img src="../assets/logotw.png" alt=""
            /></a>
            <svg class="icon" height="20" width="20">
              <use xlink:href="#icon-website"></use>
            </svg>
          </div>
        </li>
      </ul>
    </div>
    <button v-show="this.showScrollBtn" onclick="window.scrollTo(0, 0)" class="scrollToTop"><img src="../assets/double-arrow-top-icon.png" alt=""></button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      categories: [
        "NFT",
        "Bridge",
        "DeFi",
        "Dex",
        "GameFi",
        "Infrastructure",
        "Launchpad",
        "Name Service",
        "NFT Market",
        "Official Partners",
        "SocialFi",
        "Tools",
        "Wallet",
      ],
      projects: [],
      bg: [],
      selectCategory: "",
      page: 1,
      scroll: 0,
      arr: [],
      stopLoad: false,
      showScrollBtn: false
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 20 ? this.showScrollBtn = true : this.showScrollBtn = false;
      if (document.documentElement.scrollHeight - 20 <= document.documentElement.scrollTop +document.documentElement.clientHeight){
        this.page += 1;
        if (!this.stopLoad) {
          this.stopLoad = true;
          axios
            .get(`https://suiecosystem.top/wp-json/api/get_project_by_slug_pagination/${this.selectCategory}/${this.page}/18`)
            .then((response) => {
              let arr = [...Array.from(this.projects), ...response.data];
              this.projects = arr;
              if (response.data) setTimeout((this.stopLoad = false), 2000);
            });
        }
      }
    });

    axios
      .get("https://suiecosystem.top/wp-json/api/get_project_all")
      .then((response) => {

        response.data.forEach(element => element.excerpt = "Lorem ipsum dolor sit amet consectetur adipisicing elit quidem ipsum repellat est repellendus illo molestias!");

        this.projects = response.data;
        this.bg = response.data.slice(0, 10);
      });
  },
  methods: {
    selectCategoryHandler(e) {
      this.selectCategory = e.path[0].innerText.toLowerCase().replace(/ /g, "-");
      this.page = 1;
      this.stopLoad = false;
      window.scrollTo(0, 0);

      axios
        .get(`https://suiecosystem.top/wp-json/api/get_project_by_slug_pagination/${this.selectCategory}/1/18`)
        .then((response) => {
          this.projects = response.data;
          this.bg = response.data.slice(0, 10);
        });
    },
  },
};
</script>

<style >
.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: .4em 8vw;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  backdrop-filter: blur(10px);
}
.title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}
.title img {
  width: 65px;
  height: 65px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
}
li {
  width: 15vw;
  height: 11rem;
  display: inline-block;
  margin: 15px;
  padding: 10px 20px 10px;
  /* background-color: #7b7b7b55; */
  background-color: #dfdfdf27;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  transition: all 0.3s ease-in-out;
  /* backdrop-filter: blur(5px); */
}
li:hover {
  /* transform: scale(1.05); */
  transform: translateY(-10px);
  background-color: #c6c8e7c2;
}

li p {
  height: 5.2rem;
}

.main {
  display: flex;
  padding: 0 5em;
}

.categories {
  width: 20vw;
  height: 100vh;
  margin-top: 1.9em;
}

.projects {
  width: 80vw;
  display: inline-block;
  margin-top: 1em;
}

.categories button, .nav button, .scrollToTop{
  display: block;
  width: 80%;
  text-align: justify;
  outline: none;
  border: none;
  border-radius: 1px;
  margin: 0 0 10px 2em;
  padding: 23px 15px;
  transition: all 0.3s ease-in-out;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 2px;
  color: #2a2a2ac1;
  /* background-color: #dfdfdf27; */
  background-color: #dfdfdf27;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.2s ease-in-out;
}
.categories button:hover, .nav button:hover {
  background-color: #c6c8e7c2;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.nav button{
  width: 100px;
}
.scrollToTop{
  position: fixed;
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  font-size: 2em;
  padding: 2px 0 0 14px;

  bottom: .5em;
  right: .8em;
}
.scrollToTop img{
  transition: all 0.2s ease-in-out;
  width: 1.3em;
  height: 1.3em;
  opacity: .2;
}
.scrollToTop:hover img{
  opacity: .5;
}

.title img {
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  margin-right: 5px;
}
.social_media {
  height: max-content;
  display: flex;
  position: relative;
  padding-bottom: 20px;
}
.social_media img {
  width: 20px;
  height: 15px;
  margin-top: 8px;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
}
.social_media img:hover {
  opacity: 1;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap");
* {
  margin: 0px;
  padding: 0px;
  font-family: "Raleway", sans-serif;
}

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.area {
  position: fixed;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  width: 100%;
  height: 100vh;
  z-index: -2;
  top: 0;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  bottom: -5em;
  left: 25%;
  width: 110px;
  height: 110px;
  animation-delay: 12s;
}

.circles li:nth-child(2) {
  bottom: -20em;
  left: 10%;
  width: 200px;
  height: 200px;
  animation-delay: 2s;
  animation-duration: 0s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 120px;
  height: 120px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  bottom: -20em;
  left: 40%;
  width: 160px;
  height: 160px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 180px;
  height: 180px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  bottom: -20em;
  left: 50%;
  width: 260px;
  height: 260px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 120px;
  height: 120px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1100px) rotate(720deg);
    opacity: 0;
    border-radius: 20%;
  }
}
</style>
