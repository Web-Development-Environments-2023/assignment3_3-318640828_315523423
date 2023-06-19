<template>
<div class="container">
<h1 id="title"> My Favorites</h1>
<MyFavorite class="MyFavoritesList" title="My Favorites" server_domain="/users/favoriterecipes" 
error_msg = "There are no favorite recipes for the connected user"/>
</div>
</template>

<script>
import MyFavorite from "../components/MyFavorites.vue"

export default {
    data(){
        MyFavorite
    }
};

</script> 