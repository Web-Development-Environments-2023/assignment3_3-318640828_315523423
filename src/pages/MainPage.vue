
<template>

<div class="container">
  <div class="title">
    <h1> Main Page </h1>
  </div>
  <div class="basedOnLogin"> 
        <h2> Last watched recipes </h2>
        <h3> You need to Login to vue this </h3>
        <span v-if="!$root.store.username" class="guest-section">
          <LoginPage v-if="showLoginPage" />
        </span> 
        <span v-if="$root.store.username" class="user-section">
            // the user lastviewed recipes
        </span>
  </div>  

  <div class="randomRecipes">
    <h2> Random Recipes </h2>
    <RandomRecipePreviewList :recipes="random" />
  </div>



    <!-- <RecipePreviewList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></RecipePreviewList> -->
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
          //return [];
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

.content {
  display: flex;
  flex-basis: 150%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.basedOnLogin,
.randomRecipes {
  flex-basis: calc(50% - 5px);
  margin: 10px 0;
}
</style>
