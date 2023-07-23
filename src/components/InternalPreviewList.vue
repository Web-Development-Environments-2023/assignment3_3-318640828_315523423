<template>
  <b-container>
    <div class="recipe-list">
      <InternalRecipePreview v-for="r in recipes" :key="r.id" class="recipe-item" :recipe="r"/>
    </div>
  </b-container>
</template>

<script>
import InternalRecipePreview from "./InternalPreview.vue";
export default {
  data() {
    return {
      recipes_array: []
    };
  },
  mounted() {
    //this.updateRecipes();
  },
  name: "InternalPreviewList",
  components: {
    InternalRecipePreview
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
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes",
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
.recipe-item {
  width: 100%;
  } 
</style> 