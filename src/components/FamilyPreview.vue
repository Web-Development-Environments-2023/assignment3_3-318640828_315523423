<template>
  <router-link
    :to="{ name: 'Internalfamily', params: { recipeId: recipe[0] } }"
    class="family-recipe-preview"
  >
    <div class="recipe-body">
      <div :title="recipe[0].owner" class="recipe-title">{{ recipe[0].owner }}</div>
        <img v-if="recipe[0].image" :src="recipe[0].image" class="recipe-image" />
       
      <div class="recipe-details">
        <ul class="recipe-info">
          <li>{{ recipe[0].cookingTime }} cookingTime</li>
          <li>{{ recipe[0].ingridients }} ingridients</li>
          <li>{{ recipe[0].instructions }} instructions</li>
        </ul>
      </div>
  </div>
  </router-link>
</template>

  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true
      }
    },
    created() {
      console.log(this.recipe.owner);}
  };
  </script>
  

  <style lang="scss" scoped>    
  .family-recipe-preview {
      text-decoration: none;
      width: 50%;
      max-width: 300px;
      color: #333;
      max-height: 400px;
    }


.recipe-body {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.recipe-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 10px;
    }
  
.recipe-title {
      color: #333;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
.recipe-details {
  display: flex;
  justify-content: space-between;
  flex-direction:column;
}


.recipe-info{
  display: flex;
  width: 100%;
  justify-content: space-between;

}

.recipe-info li{
  display: inline-block;
  margin-right: 10px;
  color: #777;
  font-size: 14px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f2f2f2;
}

</style>
  





