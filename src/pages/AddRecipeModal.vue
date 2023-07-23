<template>
  <div class="recipe-form">
    <!-- <b-modal id="modal-add-recipe" title="Create New Recipe" @ok="createRecipe"> -->
    <form @submit.prevent="AddRecipeToDatabase">
      <div class="form-group">
        <label for="recipe_id">Recipe ID</label>
        <input type="text" id="recipe_id" v-model="recipe.recipe_id" required class="form-control">
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="recipe.title" required class="form-control">
      </div>

      <div class="form-group">
        <label for="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" v-model="recipe.imageUrl" required class="form-control">
      </div>

      <div class="form-group">
        <label for="readyInMinutes">Ready in Minutes</label>
        <input type="text" id="readyInMinutes" v-model.number="recipe.readyInMinutes" required class="form-control">
      </div>

      <div class="form-group">
        <label for="popularity">Popularity</label>
        <input type="text" id="popularity" v-model.number="recipe.popularity" required class="form-control">
      </div>

      <div class="form-check">
        <input type="checkbox" id="vegetarian" v-model="recipe.vegetarian" class="form-check-input">
        <label class="form-check-label" for="vegetarian">Vegetarian</label>
      </div>

      <div class="form-check">
        <input type="checkbox" id="vegan" v-model="recipe.vegan" class="form-check-input">
        <label class="form-check-label" for="vegan">Vegan</label>
      </div>

      <div class="form-check">
        <input type="checkbox" id="glutenFree" v-model="recipe.glutenFree" class="form-check-input">
        <label class="form-check-label" for="glutenFree">Gluten-Free</label>
      </div>

      <div class="form-group">
        <label for="ingredientsAndAmount">Ingredients and Amount</label>
        <textarea id="ingredientsAndAmount" v-model="recipe.ingredientsAndAmount" required class="form-control"></textarea>
      </div>

      <div class="form-group">
        <label for="instructions">Instructions</label>
        <textarea id="instructions" v-model="recipe.instructions" required class="form-control"></textarea>
      </div>

      <div class="form-group">
        <label for="servings">Servings</label>
        <input type="text" id="servings" v-model.number="recipe.servings" required class="form-control">
      </div>

      <button type="submit" class="btn btn-primary">Create Recipe</button>
    </form>
    <!-- </b-modal> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        recipe_id: '',
        title: '',
        imageUrl: '',
        readyInMinutes: 0,
        popularity: 0,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        ingredientsAndAmount: '',
        instructions: '',
        servings: 0,
      },
    };
  },
  methods: {
     async AddRecipeToDatabase() {
      try {
        await this.axios.post(
          this.$root.store.server_domain + "/users/MyRecipes",
          {
            recipe_id: this.recipe.recipe_id,
            title: this.recipe.title,
            image: this.recipe.imageUrl,
            readyInMinutes: this.recipe.readyInMinutes,
            popularity: this.recipe.popularity,
            vegetarian: this.recipe.vegetarian,
            vegan: this.recipe.vegan,
            glutenFree: this.recipe.glutenFree,
            IngredientsAndAmount: this.recipe.ingredientsAndAmount,
            instructions: this.recipe.instructions,
            servings: this.recipe.servings
          },
          { withCredentials: true }
        );
      //create alert that recipe was added successfully
      alert("Recipe was added successfully - Go Eat!");
      this.$emit("formSubmitted")
      } catch (err) {
        this.reset();
        alert("There was an error uploading the recipe data. Please try again.");
        
      }
    },
  },
};
</script>

<style>
.recipe-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.form-group {
  margin-bottom: 20px;
}

.form-check {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

form input,
form textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

form button:hover {
  background-color: #0056b3;
}
</style>


