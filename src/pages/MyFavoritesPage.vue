
<template>
  <div>
    <div class="title">
      <h1> Favorites Page </h1>
    </div>
    <div class="container">
      <div class="favorites-container">
        <!-- <ul>
          <p> 
              {{ favorites }}
          </p>
        </ul> -->
      </div>
      <div class="recipe-preview-list-container">
      <RecipePreviewList :recipes="favorites" />
    </div>

    </div>
  </div>
  </template>
  
  <script>
  import RecipePreviewList from "../components/RecipePreviewList.vue";
  export default {

    data() {
      return {
        favorites: []
      };
    },
    components: {
      RecipePreviewList
    },
    mounted() {
      this.getFavorites();
    },
    methods: {
      async getFavorites() {
        try {
            const response = await this.axios.get(this.$root.store.server_domain + "/users/favorites",
            {withCredentials: true});
            this.favorites = response.data;
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  

  <style lang="scss" scoped>
.favorites-container {
  column-count: 2;
  column-gap: 20px;
}

.recipe-preview-list-container {
  column-count: 3;
  column-gap: 20px;
}
.container {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 150%;
    justify-content: space-between;
  }
  .title{
    text-align: center;
    background-color: bisque;
  }
</style>