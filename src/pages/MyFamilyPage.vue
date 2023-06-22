
<template>
    <div>
        <h2> My Family </h2>
      <ul>
        <p> 
            {{ family }}
        </p>
      </ul>
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
  

