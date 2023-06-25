<template>
    <div class="recipe">
      <h2>{{ recipe.owner }}'s Recipe</h2>
      <p>Cooking Time: {{ recipe.cookingTime }}</p>
      <h3>Ingredients:</h3>
      <ul>
        <li>{{ recipe.ingredients }}</li>
      </ul>
      <h3>Instructions:</h3>
      <p>{{ recipe.instructions }}</p>
    </div>
  </template>

<script>
export default {
    data() {
        return {
            recipe: []
        };
    
    },
    mounted() {
        this.recipe = this.$route.params.recipeId;
    }

};

</script>


<style scoped>
.recipe {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2, h3 {
  margin-top: 0;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>