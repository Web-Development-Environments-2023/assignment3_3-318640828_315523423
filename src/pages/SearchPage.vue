<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <div class="search-container">
        <input type="text" v-model="$v.form.search.$model" placeholder="Search terms" @keydown.enter="handleSearchQuery">
        <button @click="handleSearchQuery">Search</button>
      </div>
    </b-input-group>

    <!-- <b-button-group class="mt-2"> -->
      <!-- <b-button v-for="term in searchTerms" :key="term" @click="addTermToSearch(term)">{{ term }}</b-button> -->
    <!-- </b-button-group> -->

    <!-- Recipe previews -->
    <div class="recipe-preview-container"> 
    <RecipePreviewList name="RecipePreviewList" :recipes="recipes"/>
    </div>
    <!-- {{ recipes }} -->
    <!-- VueSelect component -->
    <!-- <VueSelect v-model="selectedCuisine" :options="cuisine_array" label="Select Cuisine" multiple></VueSelect> -->

  </div>
</template>

<script>
import axios from 'axios'
import RecipePreviewList from "../components/RecipePreviewList.vue";
import 'vue-select/dist/vue-select.js'
import VueSelect from 'vue-select/dist/vue-select.js'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'SearchPage',
  components: {
    
    RecipePreviewList,
  },
  data() {
    return {
      form: {
        search: '',
        selected: null,
        numberOfRecipes: 5, 
        searchTerms: [],
        selectedCuisine: [], // Add selectedCuisine property
        orderBy: 'popularity',
        options: [],
        showResults: false,
        diets: [],
        intolerances: [],
        submitError: undefined,
      },
      selectedCuisine: [{ value: null, text: "", disabled: true }],
      diets: [{ value: null, text: "", disabled: true }],
      intolerances: [{ value: null, text: "", disabled: true }],
      recipes: [],
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
      
    };
  },
  methods: {
    async getRecipes() {
      try {
        console.log("this is validation")
        const query = this.form.search;
        // const queryArguments = {
        //   query: this.form.search,
        //   // number: this.form.numberOfRecipes,
        //   // cuisine: this.form.selectedCuisine.join(","),
        // };
        this.recipes = [];
        console.log("this is queryArguments: the string - " + query);
        const response = await axios.get(this.$root.store.server_domain + "/recipes/search/" + query, 
        {withCredentials: true});


        // const response = await axios.get(`${this.$root.store.server_domain}/recipes`, { params: queryArguments }); 
        console.log("this is response: " + response.data);
        if (response.status === 200) {
          this.recipes = response.data;
        const recipe_final_array = [];
        this.recipes.forEach(async recipe => {
          console.log("#1: " + recipe.id);
          const respon = await axios.get(this.$root.store.server_domain + "/recipes/fullData/",  {params: recipe.id});
          console.log("#2: " + respon.status);
          recipe_final_array.push(respon.data)
        });
        console.log(recipe_final_array);
        console.log("this is this.recipe:" + this.recipes);
        if (!(this.recipes.length > 0 && this.recipes[0].title != null)){
          this.recipes = [];
          this.showResults = false;
        }
        this.showResults = true;
        console.log(this.recipes);
      }
      } catch (error) {
        console.log(error);
      }
    },
    
    async handleSearchQuery() {
      try {
        if (this.form.search !== '') {
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
    async resetSearch() {
      this.form = {
        search: '',
        selected: null,
        numberOfRecipes: 5, 
        searchTerms: [],
        selectedCuisine: [], // Add selectedCuisine property
        orderBy: 'popularity',
        options: [],
        showResults: false,
        diet: [],
        intolerances: [],
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },

  validations: {
    form: {
      search: {
        required: true,
      },
  }, 

  

  mounted() {
    this.options = this.cuisine_array.map(cuisine => {
      return { name: cuisine, value: cuisine };
    });

    this.handleSearchQuery = this.handleSearchQuery.bind(this);

    this.diets.push(...diets);
    this.intolerances.push(...intolerances);
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

<style lang="scss" scoped>
  
.recipe-preview-container {
  column-count: 3;
  column-gap: 20px;
}
.container {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 150%;
    justify-content: space-between;
  }
  .title {
    text-align: center;
    background-color: bisque;
  }
  h2 {
    text-align: center;
  }
</style>