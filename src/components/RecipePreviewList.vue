<template>
  <b-container>
    <div class="recipe-list">
      <RecipePreview v-for="r in recipes" :key="r.id" class="recipe-item" :recipe="r"
      />
    </div>
    <!-- <b-row>
      <b-col v-for="r in recipes" :key="r.id" class="recipe-item">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row> -->
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  data() {
    return {
      recipes_array: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  name: "RecipePreviewList",
  components: {
    RecipePreview
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