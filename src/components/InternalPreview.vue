<template>
  <router-link
    :to="{ name: 'Internalrecipe', params: { recipeId: recipe } }"
    class="recipe-preview"
  >
    <!-- @click="handleTemplatePress(recipe.id)" -->
  

    <div class="recipe-footer">
      <div :title="recipe[0].title" class="recipe-title">{{ recipe.title }}</div>

      <div class="recipe-details">
        <div class="recipe-info">
          <ul>
            <li>{{ recipe[0].readyInMinutes }} minutes</li>
            <li>{{ recipe[0].aggregateLikes }} likes</li>
          </ul>
        </div>

        <div class="recipe-options">
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

<style scoped>
.recipe-preview {
  display: flex;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  width: 100%;
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
  margin-bottom: 10px;

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


.recipe-info ul,
.recipe-options ul {
  list-style: none;
  margin: 0;
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
  margin-bottom: 10px;
}

</style>
