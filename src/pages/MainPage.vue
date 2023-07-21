
<template>

  <div>
    <div class="title">
      <h1> Main Page </h1>
    </div>
  <div class="container">
    <div class="randomRecipes">
      <h2> Random Recipes </h2>
      <RandomRecipePreviewList :recipes="random" />
    </div>
    <div class="basedOnLogin"> 
          <h2> Last watched recipes </h2>
          <span v-if="!$root.store.username" class="guest-section">
            <h3> You need to Login to vue this </h3>
            <LoginPage v-if="showLoginPage" />
          </span> 
          <span v-if="$root.store.username" class="user-section">
              // the user lastviewed recipes
          </span>
    </div>   
  </div>
  </div>
  </template>
  
  
  <script>
  import LoginPage from './LoginPage';
  import RandomRecipePreviewList from "../components/RecipePreviewList";
  export default {
    data() {
      return {
        random: [],
        showLoginPage: true
      };
    },
    components: {
      RandomRecipePreviewList,
      LoginPage
      
    },
    mounted() {
      this.getRandom();
    },
    methods: {
        async getRandom() {
          try {
            return [];
            const response = await this.axios.get(this.$root.store.server_domain + "/recipes/random",
            {withCredentials: true});
            this.random = response.data;
          } catch (err) {
            console.log(err);
          }
        }
      }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 150%;
    justify-content: space-between;
  }
 
  .basedOnLogin,
  .randomRecipes {
    flex-basis: calc(50%);
    width: 100%;   

  }
  .basedOnLogin h3 {
    font-size: smaller;
    color: red;
    width: 100%;
    text-align: center;
  }
  .title {
    text-align: center;
    background-color: bisque;
  }
  h2 {
    text-align: center;
  }
  .basedOnLogin LoginPage{
    margin-left: 0%;
  }

  </style>
  