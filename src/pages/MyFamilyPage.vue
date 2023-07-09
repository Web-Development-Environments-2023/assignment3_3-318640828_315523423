
<template>
    <div>
      <div class="title">
      <h1> Family recipes Page </h1>
    </div>
      <!-- <ul>
        <p> 
            {{ family }}
        </p>
      </ul> -->
      <FamilyPreviewList :recipes="family" />
    </div>
  </template>
  
  <script>
  import FamilyPreviewList from "../components/FamilyPreviewList.vue";
  export default {

    data() {
      return {
        family: []
      };
    },
    mounted() {
      this.getFamily();
    },
    components: {
      FamilyPreviewList
    },
    methods: {
      async getFamily() {
        try {
            const response = await this.axios.get(this.$root.store.server_domain + "/users/MyFamilyRecipes",
            {withCredentials: true});
            this.family = response.data;
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  


  <style lang="scss" scoped>
  .title {
    text-align: center;
    background-color: bisque;
  }
  h2 {
    text-align: center;
  }
  </style>
