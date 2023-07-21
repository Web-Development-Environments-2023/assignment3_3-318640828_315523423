<template>
  <div>
    <b-modal id="modal-add-recipe" title="Create New Recipe" @ok="createRecipe">
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
    </b-modal>
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
    createRecipe() {
      // Emit an event to the parent component with the created recipe data
      this.$emit('recipe-created', this.recipe);
      // Clear the recipe data and hide the modal
      this.recipe = {
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
      };
      this.$bvModal.hide('modal-add-recipe');
    },
    show() {
      console.log('showing modal');
      this.$refs.modal.show();
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  },
};
</script>
