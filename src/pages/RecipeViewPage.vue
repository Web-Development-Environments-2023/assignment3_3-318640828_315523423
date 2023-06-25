
<template>

  <div class="container">
    <div v-if="recipe">
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


  </div>
</template>


<script>
export default {
  data() {
    return {
      recipe: [],
      };
  },
  async created() {
    try {  
    try {
          const url = `${this.$root.store.server_domain}/recipes/fullData/:recipe_id`;
          const replacedUrl = url.replace(":recipe_id", this.$route.params.recipeId.id);
          const response = await this.axios.get(replacedUrl, {
            withCredentials: true
          });     
        if (response.status !== 200) this.$router.replace("/NotFound");
        this.recipe = response.data[0];
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }    
    let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response.data[0].recipe;
      
      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);
      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
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

.recipe-body .wrapped .instructions {
  font-size: 16px;
  line-height: 1.5;
  
}
</style>