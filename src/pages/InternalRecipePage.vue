
<template>
    <div class="container">
        <div class="recipe-header mt-3 mb-4">
          <h1>{{ this.recipe.title }}</h1>
          <img :src="this.recipe.image" class="center" />
        </div>
  
        <div class="recipe-body">
          <div class="mb-3">
                <div>Ready in {{ this.recipe.readyInMinutes }} minutes</div>
                <div>Likes: {{ this.recipe.aggregateLikes }} likes</div>
              </div>
          </div>
          <div class="instructions-wrapper">
            <div class="ingredients">
                {{ this.recipe.IngredientsAndAmount }}
              <h2>Ingredients:</h2>
              <ul>
                <li v-for="(r, index) in recipe.extendedIngredients" :key="index + '_' + r.id">
                  {{ r.original }}
                </li>
              </ul>
            </div>
            <div class="instructions">
              <h2>Instructions:</h2>
              <p>{{ recipe.instructions }}</p>
              <!-- <ol>
                <li v-for="s in this.recipe._instructions" :key="s.number">
                  {{ s.step }}
                </li>
              </ol> -->
            </div>
          </div>
  
  
    </div>
  </template>
  
  
  <script>
import { onMounted } from 'vue';

  export default {
    data() {
      return {
        recipe: {
            type: Object,
            required: true
            }
        };
    },
    mounted() {
        this.recipe= this.$route.params.recipeId[0];
    }
  };
  </script>

  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .recipe-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .recipe-header h1 {
    font-size: 24px;
    margin-top: 0;
  }
  
  .recipe-body {
    display: flex;
    justify-content: space-between;
  }
  
  .recipe-body .wrapper {
    width: 48%;
  }
  
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
  }
  
  .mb-3 {
    margin-bottom: 15px;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  /* Adjust the font size and line height of instructions */
  .recipe-body .wrapped .instructions {
    font-size: 16px;
    line-height: 1.5;
    
  }
  </style>