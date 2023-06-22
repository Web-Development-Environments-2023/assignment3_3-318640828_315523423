<template>
    <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="family-recipe-preview"
  >
    <div class="recipe-footer"> 
      <div :title="recipe[0].owner" class="recipe-title">
      {{ recipe[0].owner }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe[0].cookingTime }} cookingTime</li>
        <li>{{ recipe[0].ingridients }} ingridients</li>
        <li>{{ recipe[0].instructions }} instructions</li>
      </ul>
    </div>
    </router-link>
  </template>
  

  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true
      }
    },
    created() {
    console.log(this.recipe.owner);}
  };
  </script>
  

  <style scoped>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      padding: 20px;
    }

    .recipe-preview {
      text-decoration: none;
    }

    .recipe-body {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      background-color: #eee;
    }

    .recipe-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .recipe-footer {
      background-color: #fff;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-top: 10px;
    }

    .recipe-title {
      color: #333;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .recipe-overview li {
  display: inline-block;
  margin-right: 10px;
  color: #777;
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f2f2f2;
}    
    
  </style>
  





