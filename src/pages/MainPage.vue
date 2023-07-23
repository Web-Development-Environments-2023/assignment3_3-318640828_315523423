
<template>

  <div>
    <div class="title">
      <h1> Main Page </h1>
    </div>
  <div class="container">

    <div class="randomRecipes">
      <h2> Random Recipes </h2>
      <div class="random-preview-list">
      <RandomRecipePreviewList :recipes="random"/>
      </div>
    </div>

    <div class="basedOnLogin"> 
      <h2> Last watched recipes </h2>
      
      <span v-if="!$root.store.username" class="guest-section">
        <h3> You need to Login to vue this </h3>
      
        <LoginPage v-if="showLoginPage" />
      </span> 
      <span v-if="$root.store.username" class="user-section">
      <div class="last-viewed-preview-list">
        <lastViewedPreviewList :recipes="lastViewed" />
      </div>
      </span>
    </div>   
  </div>
  </div>
  </template>
  
  
  <script>
  import LoginPage from './LoginPage';
  import RandomRecipePreviewList from "../components/RecipePreviewList";
  import lastViewedPreviewList from "../components/RecipePreviewList";
  export default {
    data() {
      return {
        lastViewed: [],
        random: [],
        showLoginPage: true
      };
    },
    components: {
      lastViewedPreviewList,
      RandomRecipePreviewList,
      LoginPage
      
    },
    mounted() {
      this.getRandom();
      this.getLastViewed();
    },
    methods: {
        async getRandom() {
          try {
            //return [];
            const response = await this.axios.get(this.$root.store.server_domain + "/recipes/random",
            {withCredentials: true});
            this.random = response.data;
          } catch (err) {
            console.log(err);
          }
        },
        async getLastViewed() {
          try {
            //return [];
            const response = await this.axios.get(this.$root.store.server_domain + "/users/lastViewed",
            {withCredentials: true});
            this.lastViewed = response.data;
          } catch (err) {
            console.log(err);
          }
        }
      }
  };
  </script>
  
  <style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.randomRecipes {
  flex-basis: 50%;
  width: 100%;
}

.basedOnLogin {
  flex-basis: 50%;
  width: 100%;
}

.random-preview-list,
.last-viewed-preview-list {
  height: 100%;
  border: 2px solid black;
  
}

.title {
  text-align: center;
  background-color: bisque;
}

h2 {
  text-align: center;
  background-color: bisque;
  border-radius: 20%;
  border: 2px solid black;
}

.guest-section h3 {
  font-size: smaller;
  color: red;
  width: 100%;
  text-align: center;
}
</style>
  