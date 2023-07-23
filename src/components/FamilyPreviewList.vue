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
      //this.updateRecipes();
    },
    name: "FamilyPreviewList",
    components: {
        FamilyPreview
    },
    props: {
      title: {
      type: String,
      required: true
      },
      recipes: {
        type: Array,
        required: true
      }
    },
    methods: {
      async updateRecipes() {
        try {
          console.log(this.$root.store.server_domain + "/users/MyFamilyRecipes");
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/MyFamilyRecipes",
          );
          const recipes = response.data.recipes;
          this.recipes = [];
          this.recipes.push(...recipes);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  
 <style lang="scss" scoped>
  .familyPreview {
    margin: 10px;
  }
  </style> 
  