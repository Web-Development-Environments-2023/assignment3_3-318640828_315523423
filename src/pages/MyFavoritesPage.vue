
<template>
    <div>
      

        <h2> My Favorites </h2>
      <button @click="getFavorites">Favorites</button>
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
    methods: {
      async getFavorites() {
        try {
            const response = await this.axios.get(this.$root.store.server_domain + "/users/favorites",
            {withCredentials: true});
            //const response = await this.axios.get("http://localhost:3000/users/favorites",{withCredentials: true});
            //this.$root.store.favorites = response.data;
            this.favorites = response.data;
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  

