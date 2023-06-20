
<template>
    <div>
        <h2> My Favorites </h2>
      <button @click="getFavorites">Favorites</button>
      <ul>
        <p> 
            {{ favorites }}
        </p>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        favorites: []
      };
    },
    methods: {
      async getFavorites() {
        try {
            //const response = await this.axios.get(this.$root.store.server_domain + '/users/favorites');
            const response = await this.axios.get("http://localhost:3000/users/favorites");
            //this.$root.store.favorites = response.data;
            this.favorites = response.data;
            this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  

