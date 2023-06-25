<template>
  <b-container>
    
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <InternalRecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
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
    this.updateRecipes();
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
