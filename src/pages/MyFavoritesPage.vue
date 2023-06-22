
<template>
    <div>
      <h2> My Favorites </h2>
      <ul>
        <p> 
            {{ favorites }}
        </p>
      </ul>
      <RecipePreviewList :recipes="favorites" />
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
  

