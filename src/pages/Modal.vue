<template>
    <div>
      <div>
        <b-button v-b-modal.create-recipe-modal>Create Recipe</b-button>
        <b-modal id="create-recipe-modal" title="Create Recipe">
          <form @submit.prevent="submitForm">
            <!-- Form content -->
            <!-- ... -->
          </form>
        </b-modal>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CreateRecipeModal",
    data() {
      return {
        recipeName: "",
        // Rest of the form data properties
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic
        // ...
        this.$bvModal.hide("create-recipe-modal"); // Close the modal after form submission
      },
    },
  };
  </script>
  
  <style>
  /* Modal styles */
  </style>