<template>
  <router-link
    :to="{ name: 'Internalrecipe', params: { recipeId: recipe } }"
    class="recipe-preview"
  >
    <div class="recipe-body">
      <div :title="recipe[0].title" class="recipe-title">{{ recipe[0].title }}</div>
      <img v-if="recipe[0].image" :src="recipe[0].image" class="recipe-image" />

      <div class="recipe-details">
        <div class="recipe-info">
          <ul>
            <li>{{ recipe[0].readyInMinutes }} minutes</li>
            <li>{{ recipe[0].aggregateLikes }} likes</li>
          </ul>
        </div>

        <div class="recipe-info">
          <ul>
            <li v-if="recipe[0].vegetarian">vegetarian</li>
            <li v-if="recipe[0].vegan">vegan</li>
            <li v-if="recipe[0].glutenFree">gluten-free</li>
          </ul>
        </div>
      </div>
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



<style lang="scss" scoped>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      padding: 20px;
    }

    .recipe-preview {
      text-decoration: none;
      width: 100%;
      max-width: 300px;
      color: #333;
      max-height: 400px;
    }

    .recipe-body {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 100%;
    }
    .recipe-title {
      color: #333;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .recipe-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 10px;
    }

 
  
    
.recipe-details {
  display: flex;
  justify-content: space-between;
  flex-direction:column;
}
.recipe-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.recipe-info ul,
.recipe-options ul {
  list-style: none;
  padding: 0;
}

.recipe-info li,
.recipe-options li {
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
  
