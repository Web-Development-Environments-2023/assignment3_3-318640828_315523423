<template>
    <router-link
    :to="{ name: 'familyrecipe', params: { recipeId: recipe.id } }"
    class="family-recipe-preview"
  >
    <div class="recipe-footer">
        
      <div :title="recipe.owner" class="recipe-title">
        {{ recipe.owner }}
      </div>

      <ul class="recipe-overview">
        <li>{{ recipe.owner }} owner</li>
        <li>{{ recipe.cookingTime }} cookingTime</li>
        <li>{{ recipe.ingridients }} ingridients</li>
        <li>{{ recipe.instructions }} instructions</li>

      </ul>

    </div>


    </router-link>
  </template>
  
  <style scoped>
  .recipe-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
  }
  
  /* .attribute {
    margin-bottom: 5px;
  } */
  
  .attribute strong {
    font-weight: bold;
  }
  
  /* .attribute:last-child {
    margin-bottom: 0;
  } */
  </style>

  <script>
  export default {

    data() {
      return {
        image_load: false
      };
    },
    props: {
      recipe: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
