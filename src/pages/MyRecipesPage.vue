
<template>
    <div>
      <div class="title">
        <h1> My Recipes Page </h1>
      </div>
      <div class="container">
      <!-- <ul>
        <p> 
            {{ my }}
        </p>
      </ul> -->
      <div class="recipe-preview-list-container">

      <MyRecipePreviewList :recipes="my" />
      </div>
    </div>
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
  



  <style lang="scss" scoped>


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
  .title {
    text-align: center;
    background-color: bisque;
  }
  h2 {
    text-align: center;
  }
  </style>