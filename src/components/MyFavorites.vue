<template>
    <div>
        <h1>My Favorites</h1>   
    </div>
</template>


<script>
export default {
    data() {
        return getFavorites();
    },
    methods:{
        async getFavorites(){
            try{
                const response = await this.axios.get(
                    "http://localhost:3000/users/favorites",
                    //this.$root.store.server_domain +"/users/favoriterecipes",
                );
                console.log(response);
                this.$root.store.favorites = response.data;
            }catch(err){
                console.log(err.response);
            }
        }
    }

};

</script>