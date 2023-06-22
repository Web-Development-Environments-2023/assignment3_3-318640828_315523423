<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <!-- @click="handleTemplatePress(recipe.id)" -->
  
      <div class="recipe-body">
      <img v-if="image_load && recipe.image" :src="recipe.image" class="recipe-image" />
      <div v-else class="placeholder"></div>
    </div>

    <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
    </div>

    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.aggregateLikes }} likes</li>
        <li v-if="recipe.vegetarian === true">vegetarian</li>
        <li v-if="recipe.vegan === true">vegan</li>
        <li v-if="recipe.glutenFree === true">glutenFree</li>
      </ul>

    </div>
  </router-link>
</template>

<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then((i) => {
      this.image_load = true;
    });
  },
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
  
  <!-- <script>
  export default {
    data() {
      return {
        image_load: false
      };
    },
    mounted() {
      this.image_load = true;
    },
    props: {
      recipe: {
        type: Object,
        required: true
      }
    }
  };
  </script> -->