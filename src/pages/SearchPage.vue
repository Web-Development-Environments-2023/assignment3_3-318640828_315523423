<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" placeholder="Search terms"></b-form-input>
    </b-input-group>

    <b-button-group class="mt-2">
      <b-button v-for="term in searchTerms" :key="term" @click="addTermToSearch(term)">{{ term }}</b-button>
    </b-button-group>
  </div>
</template>

<script>
import axios from 'axios'
import RecipePreview from '../components/RecipePreview.vue';
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  data() {
    return {
      recipes: [],
      selected: null,
      numberOfRecipes: 5, 
      searchTerms: [],
      orderBy: 'popularity',
      options: [],
      showResults: false,
      cuisine_array: [
        "African",
        "Asian",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese"
      ],
      dietary_list: [
        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Modified Paleo (Dairy allowed)",
        "Low FODMAP",
        "Whole30"
      ],
      allergens_list: [
        "Dairy",
        "Egg",
        "Gluten",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat"
      ],
      search: '',
      cuisine: [],
      dietary: [],
      allergens: [],
    };
  },
  methods: {
    async getRecipes() {
      try{
        const queryArguments = {
          query: this.searchQuery,
          number: this.numResults,
          cuisine: this.selectedCuisine.join(","),
          diet: this.selectedDiet.join(","),
          intolerances: this.selectedIntolerances.join(",")
        };
        const response = await axios.get(`${this.$root.store.server_domain}/recipes/search`, { queryArguments });
        this.recipes = response.data;
        if (!(this.recipes.length > 0 && this.recipes[0].title != null)){
          this.recipes = [];
          this.showResults = false;
        }
        this.showResults = true;
        console.log(this.recipes);
    }
    catch (error) {
      console.log(error);
    }
    },
    
    addTermToSearch(term) {
      if (!this.searchTerms.includes(term)) {
        this.searchTerms.push(term);
      }
    },
},
  // components: {
  //   RecipePreview,
  //   VueSelect
  // },
  mounted() {
    this.options = this.cuisine_array.map(cuisine => {
      return { name: cuisine, value: cuisine };
    });
  },
  watch: {
    selected: function(val) {
      this.cuisine = val.map(cuisine => cuisine.value).join(',');
    }
  }
};
</script>