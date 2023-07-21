<!-- <template>
    <div>
      <h1>Create Recipe</h1>
      <form @submit.prevent="createRecipe">
        <label for="recipe_id">recipe_id</label>
        <input type="text" id="recipe_id" v-model="recipe.recipe_id" required>

        <label for="title">Title</label>
        <input type="text" id="title" v-model="recipe.title" required>
        
        <label for="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" v-model="recipe.imageUrl" required>
        
        <label for="readyInMinutes">Ready in Minutes</label>
        <input type="text" id="readyInMinutes" v-model.number="recipe.readyInMinutes" required>
        
        <label for="popularity">Popularity</label>
        <input type="text" id="popularity" v-model.number="recipe.popularity" required>
        
        <label for="vegetarian">Vegetarian</label>
        <input type="text" id="vegetarian" v-model="recipe.vegetarian">
        
        <label for="vegan">Vegan</label>
        <input type="text" id="vegan" v-model="recipe.vegan">
        
        <label for="glutenFree">Gluten-Free</label>
        <input type="text" id="glutenFree" v-model="recipe.glutenFree">
        
        <label for="ingredientsAndAmount">Ingredients and Amount</label>
        <textarea id="ingredientsAndAmount" v-model="recipe.ingredientsAndAmount" required></textarea>
        
        <label for="instructions">Instructions</label>
        <textarea id="instructions" v-model="recipe.instructions" required></textarea>
        
        <label for="servings">Servings</label>
        <input type="text" id="servings" v-model.number="recipe.servings" required>
        
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  </template> -->


  
  <!-- <script>
  export default {
    // Component properties and methods
  
    data() {
      return {
        recipe: {
            recipe_id:'',
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
      createRecipe() {

        this.axios.post(this.$root.store.server_domain + "/users/MyRecipes", {
            recipe_id: this.recipe.recipe_id,
            title: this.recipe.title,
          image: this.recipe.imageUrl,
          readyInMinutes: this.recipe.readyInMinutes,
          popularity: this.recipe.popularity,
          vegetarian: this.recipe.vegetarian,
          vegan: this.recipe.vegan,
          glutenFree: this.recipe.glutenFree,
          ingredientsAndAmount: this.recipe.ingredientsAndAmount,
          instructions: this.recipe.instructions,
          servings: this.recipe.servings,
        });

        this.$router.push("/");
      },
    },
  };
  </script> -->


  <template>
    <div>
      <h1>Create Recipe</h1>
      <form @submit.prevent="createRecipe">
        <label for="recipe_id">recipe_id</label>
        <input type="text" id="recipe_id" v-model="recipe.recipe_id" required>
  
        <!-- Add other form fields for the recipe properties -->
        <label for="title">Title</label>
        <input type="text" id="title" v-model="recipe.title" required>
        
        <label for="imageUrl">Image URL</label>
        <input type="text" id="imageUrl" v-model="recipe.imageUrl" required>
        
        <label for="readyInMinutes">Ready in Minutes</label>
        <input type="text" id="readyInMinutes" v-model.number="recipe.readyInMinutes" required>
        
        <label for="popularity">Popularity</label>
        <input type="text" id="popularity" v-model.number="recipe.popularity" required>
        
        <label for="vegetarian">Vegetarian</label>
        <input type="text" id="vegetarian" v-model="recipe.vegetarian">
        
        <label for="vegan">Vegan</label>
        <input type="text" id="vegan" v-model="recipe.vegan">
        
        <label for="glutenFree">Gluten-Free</label>
        <input type="text" id="glutenFree" v-model="recipe.glutenFree">
        
        <label for="ingredientsAndAmount">Ingredients and Amount</label>
        <textarea id="ingredientsAndAmount" v-model="recipe.ingredientsAndAmount" required></textarea>
        
        <label for="instructions">Instructions</label>
        <textarea id="instructions" v-model="recipe.instructions" required></textarea>
        
        <label for="servings">Servings</label>
        <input type="text" id="servings" v-model.number="recipe.servings" required>
  
        <button type="submit">Create Recipe</button>
      </form>
  
      <!-- Include the Modal component -->
      <modal @recipe-created="handleRecipeCreated" />
    </div>
  </template>
  
<script>
import Modal from './AddRecipeModal.vue';

export default {
  components: {
    Modal,
  },
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
    createRecipe() {
      this.axios.post(this.$root.store.server_domain + "/users/MyRecipes", {
            recipe_id: this.recipe.recipe_id,
            title: this.recipe.title,
          image: this.recipe.imageUrl,
          readyInMinutes: this.recipe.readyInMinutes,
          popularity: this.recipe.popularity,
          vegetarian: this.recipe.vegetarian,
          vegan: this.recipe.vegan,
          glutenFree: this.recipe.glutenFree,
          ingredientsAndAmount: this.recipe.ingredientsAndAmount,
          instructions: this.recipe.instructions,
          servings: this.recipe.servings,
        });

        this.$router.push("/");
      },
    handleRecipeCreated(newRecipe) {
      // Handle the created recipe data here (optional)
      // For example, you can add it to a list or update the UI
      console.log('New Recipe:', newRecipe);
    },
  },
};
</script>


  <style scoped>
h1 {
  text-align: center;
}

form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  gap: 10px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="checkbox"] {
  margin-top: 5px;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>