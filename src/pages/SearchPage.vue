<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <div class="search-container">
        <input type="text" v-model="search" placeholder="Search terms" @keydown.enter="handleSearchQuery">
        <button @click="handleSearchQuery">Search</button>
      </div>
    </b-input-group>

    <b-button-group class="mt-2">
      <!-- <b-button v-for="term in searchTerms" :key="term" @click="addTermToSearch(term)">{{ term }}</b-button> -->
    </b-button-group>

    <!-- Recipe previews -->
    <RecipePreview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></RecipePreview>

    <!-- VueSelect component -->
    <VueSelect v-model="selectedCuisine" :options="cuisine_array" label="Select Cuisine" multiple></VueSelect>

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
      selectedCuisine: [], // Add selectedCuisine property
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
      
    };
  },
  methods: {
    async getRecipes() {
      try {
        const queryArguments = {
          query: this.search.trim().split(" "),
          number: this.numberOfRecipes,
          cuisine: this.selectedCuisine.join(","),
        };
        const response = await axios.get(`${this.$root.store.server_domain}/recipes/`, { params: queryArguments });
        this.recipes = response.data;
        if (!(this.recipes.length > 0 && this.recipes[0].title != null)){
          this.recipes = [];
          this.showResults = false;
        }
        this.showResults = true;
        console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    
    async handleSearchQuery() {
      try {
        if (this.search.trim() !== '') {
          await this.getRecipes();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
    
    async addTermToSearch(term) {
      try{
        if (!this.searchTerms.includes(term)) {
          this.searchTerms.push(term);
        }
      }
      catch (error) {
        console.log(error);
      }
    },

    // async handleSearchQuery() {
    //   try {
    //     {{console.log(this.search)}}
    //     if (this.search.trim() !== '') {
    //       this.searchTerms = this.search.trim().split(" ");
    //       await this.getRecipes();
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // handleSearchQuery: async () => {
    //   try {
    //     {{console.log(this.search)}}
    //     if (this.search.trim() !== '') {
    //       this.searchTerms = this.search.trim().split(" ");
    //       await this.getRecipes();
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },


  validations: {
    form: {
      search: {
        required: true,
      },
  }, 

  components: {
    RecipePreview,
    VueSelect
  },
  mounted() {
    this.options = this.cuisine_array.map(cuisine => {
      return { name: cuisine, value: cuisine };
    });

    this.handleSearchQuery = this.handleSearchQuery.bind(this);
  },
  watch: {
    selected: function(val) {
      this.cuisine = val.map(cuisine => cuisine.value).join(',');
    },
    search: function(newSearch) {
    // Call your method to handle the search query here
    this.handleSearchQuery(newSearch);
    }
  }
  }
};
</script>
