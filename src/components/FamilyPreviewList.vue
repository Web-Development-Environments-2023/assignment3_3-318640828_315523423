<template>
    <b-container>
      <b-row>
        <b-col v-for="r in recipes" :key="r.id">
          <FamilyPreview class="familyPreview" :recipe="r" />
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import FamilyPreview from "./FamilyPreview.vue";
  export default {
    data() {
      return {
        recipes_array: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    name: "FamilyPreviewList",
    components: {
        FamilyPreview
    },
    props: {
      recipes: {
        type: Array,
        required: true
      }
    },
    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/MyFamilyRecipes",
          );
  
          // console.log(response);
          const recipes = response.data.recipes;
          this.recipes = [];
          this.recipes.push(...recipes);
          // console.log(this.recipes);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
  }
  </style>
  