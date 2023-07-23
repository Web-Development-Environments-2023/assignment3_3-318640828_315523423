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

    <!-- Filter dropdown -->
    <b-dropdown id="recipe-filter-dropdown" text="Filter" class="mt-2">
      <b-dropdown-item @click="changeNumberOfRecipes(5)">5 Recipes</b-dropdown-item>
      <b-dropdown-item @click="changeNumberOfRecipes(10)">10 Recipes</b-dropdown-item>
      <b-dropdown-item @click="changeNumberOfRecipes(15)">15 Recipes</b-dropdown-item>
    </b-dropdown>

   <!-- Filter dropdown for Cuisine -->
   <b-dropdown id="cuisine-filter-dropdown" text="Cuisine" class="mt-2">
      <b-dropdown-item @click="applyCuisineFilter('')">None</b-dropdown-item>
      <b-dropdown-item v-for="cuisine in cuisine_array" :key="cuisine" @click="applyCuisineFilter(cuisine)">
        {{ cuisine }}
      </b-dropdown-item>
    </b-dropdown>

    <!-- Filter dropdown for Diet -->
    <b-dropdown id="diet-filter-dropdown" text="Diet" class="mt-2">
      <b-dropdown-item @click="applyDietFilter('')">None</b-dropdown-item>
      <b-dropdown-item v-for="diet in dietary_list" :key="diet" @click="applyDietFilter(diet)">
        {{ diet }}
      </b-dropdown-item>
    </b-dropdown>

    <!-- Filter dropdown for Intolerance -->
    <b-dropdown id="intolerance-filter-dropdown" text="Intolerance" class="mt-2">
      <b-dropdown-item @click="applyIntoleranceFilter('')">None</b-dropdown-item>
      <b-dropdown-item v-for="intolerance in allergens_list" :key="intolerance" @click="applyIntoleranceFilter(intolerance)">
        {{ intolerance }}
      </b-dropdown-item>
    </b-dropdown>

    <!-- Recipe previews -->
    <div class="recipe-preview-container">
      <RecipePreviewList name="RecipePreviewList" :recipes="this.recipes" />
    </div>
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
        // selectedCuisineFilter: '', // Selected cuisine filter
        // selectedDietFilter: '', // Selected diet filter
        // selectedIntoleranceFilter: '', // Selected intolerance filter
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

    applyCuisineFilter(cuisine) {
      this.form.selectedCuisine = cuisine;
      console.log(this.form.selectedCuisine);

      //this.filterRecipes();
    },

    // Method to apply diet filter
    applyDietFilter(diet) {
      this.form.diets = diet;
      // this.filterRecipes();
    },

    // Method to apply intolerance filter
    applyIntoleranceFilter(intolerance) {
      this.form.intolerances = intolerance;
      // this.filterRecipes();
    },

    async changeNumberOfRecipes(number) {
      this.form.numberOfRecipes = number;
      // Re-fetch recipes based on the new number
      // await this.getRecipes();
    },

    filterRecipes() {
      const { selectedCuisine, diets, intolerances } = this.form;
      // Your filtering logic here, update the "filteredRecipes" property accordingly
      // For example:
      // this.filteredRecipes = this.recipes.filter(recipe => {
      //   return (
      //     (selectedCuisine.length === 0 || selectedCuisine.includes(recipe.cuisine)) &&
      //     (diets.length === 0 || diets.some(diet => recipe.diets.includes(diet))) &&
      //     (intolerances.length === 0 || intolerances.some(intolerance => recipe.intolerances.includes(intolerance))));
      // });

      this.filteredRecipes = [];
      for (recipe in this.recipes) {
        if (selectedCuisine.length === 0 || selectedCuisine.includes(recipe.cuisine)) {
          if (diets.length === 0 || diets.some(diet => recipe.diets.includes(diet))) {
            if (intolerances.length === 0 || intolerances.some(intolerance => recipe.intolerances.includes(intolerance))) {
              this.filteredRecipes.push(recipe);
            }
          }
        }
      }
    },


    async getRecipes() {
      try {
        console.log("this is validation")
        const query = this.form.search;
        const num = this.form.numberOfRecipes;
        
        this.recipes = [];
        console.log("this is queryArguments: the string - " + query);
        let option_last_implements = ""
        if (this.form.selectedCuisine.length != 0 ) {
          option_last_implements = option_last_implements + this.form.selectedCuisine;
        }
        else {
          option_last_implements = option_last_implements + "None";
        }
        if (this.form.diets.length != 0) {
          option_last_implements = option_last_implements + "/" + this.form.diets;
        }
        else {
          option_last_implements = option_last_implements + "/None";
        }
        console.log("blowwwwwwwwwww",this.form.intolerances)
        if (this.form.intolerances.length != 0) {
          option_last_implements = option_last_implements + "/" + this.form.intolerances;
        }
        else {
          option_last_implements = option_last_implements + "/None";
        }

        const response = await axios.get(this.$root.store.server_domain + "/recipes/search/" + query + "/" + num + "/" + option_last_implements,  
        // {params: { query: query, number: num }, withCredentials: true});
        {withCredentials: true});


        // const response = await axios.get(`${this.$root.store.server_domain}/recipes`, { params: queryArguments }); 
        console.log("this is response: " + response.data);
        if (response.status === 200) {
          this.recipes = response.data;
        // const recipe_final_array = [];
        // this.recipes.forEach(async recipe => {
        //   console.log("#1: " + recipe.id);
        //   //const respon = await axios.get(this.$root.store.server_domain + "/recipes/fullData/",  {params: recipe.id});
        //   //console.log("#2: " + response.status);
        //   //recipe_final_array.push(response.data)
        // });
        //console.log(recipe_final_array);
        console.log("this is this.recipe:" + this.recipes);
        if (!(this.recipes.length > 0 && this.recipes[0].title != null)){
          this.recipes = [];
          this.showResults = false;
        }
        this.showResults = true;
        console.log(this.recipes);
        // this.filterRecipes();
        
        // this.filteredRecipes = [];
        // this.recipes.forEach ((recipe) => { 
        //   if (this.selectedCuisine.length === 0 || this.selectedCuisine.includes(recipe.cuisine)) {
        //     if (this.diets.length === 0 || this.diets.some(diet => recipe.diets.includes(diet))) {
        //       if (this.intolerances.length === 0 || this.intolerances.some(intolerance => recipe.intolerances.includes(intolerance))) {
        //         this.filteredRecipes.push(recipe);
        //       }
        //     }
        //   }
        // });
        console.log(this.filteredRecipes);


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
  },
  computed: { 
    filteredRecipes() {
      // Initially, return all recipes before applying filters
      return this.recipes;
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