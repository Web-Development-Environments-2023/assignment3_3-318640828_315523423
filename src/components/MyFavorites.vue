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
                    this.$root.store.server_domain +"/users/favoriterecipes",
                    {
                        username: this.$root.store.username
                    }
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