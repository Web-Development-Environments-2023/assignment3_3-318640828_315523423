
<template>
    <div>
      <h2> My Recipes </h2>
      <ul>
        <p> 
            {{ my }}
        </p>
      </ul>
      <MyRecipePreviewList :recipes="my" />
    </div>
  </template>
  
  <script>
  import MyRecipePreviewList from "../components/InternalPreviewList.vue";
  export default {

    data() {
      return {
        my: []
      };
    },
    components: {
      MyRecipePreviewList
    },
    mounted() {
      this.getmy();
    },
    methods: {
      async getmy() {
        try {
            const response = await this.axios.get(this.$root.store.server_domain + "/users/MyRecipes",
            {withCredentials: true});
            this.my = response.data;
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  

