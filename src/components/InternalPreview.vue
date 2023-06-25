<template>
  <router-link
    :to="{ name: 'Internalrecipe', params: { recipeId: recipe } }"
    class="recipe-preview"
  >
    <!-- @click="handleTemplatePress(recipe.id)" -->
  
      <div class="recipe-body">
        <img :src="this.recipe[0].image" class="center" />
      </div>

    <div class="recipe-footer">
      <div :title="recipe[0].title" class="recipe-title">
        {{ recipe[0].title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe[0].readyInMinutes }} minutes</li>
        <li>{{ recipe[0].aggregateLikes }} likes</li>
        <li v-if="recipe[0].vegetarian === true">vegetarian</li>
        <li v-if="recipe[0].vegan === true">vegan</li>
        <li v-if="recipe[0].glutenFree === true">glutenFree</li>
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
.recipe-preview {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.recipe-preview:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recipe-body {
  text-align: center;
}

.recipe-body img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.recipe-footer {
  margin-top: 10px;
}

.recipe-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.recipe-overview {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.recipe-overview li {
  margin-right: 10px;
  font-size: 14px;
}

.recipe-overview li::before {
  content: '•';
  margin-right: 5px;
}

.recipe-overview li:last-child {
  margin-right: 0;
}

.recipe-overview li[title] {
  cursor: pointer;
}

.recipe-overview li[title]:hover {
  text-decoration: underline;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
