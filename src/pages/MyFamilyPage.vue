<template>
    <div class="container">
    <h1 id="title"> My Family</h1>
    <MyFavorite class="MyFamilyList" title="My Family" server_domain="/users/myfamilyrecipes" 
    error_msg = "There are no favorite recipes for the connected user"/>
    </div>
    </template>
    
    <script>
    import MyFamily from "../components/MyFamilyRecipes.vue"
    
    export default {
        data(){
            MyFamily
        }
    };
    
    </script> 