<template>
    <div>
            <div id="nav">
                <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
                <router-link :to="{ name: 'search' }">Search</router-link>|
                <span v-if="!$root.store.username">
                Guest:
                <router-link :to="{ name: 'register' }">Register</router-link>|
                <router-link :to="{ name: 'login' }">Login</router-link>|
                </span>
                <span v-else>
                {{ $root.store.username }}: <button @click="Logout">Logout</button>|
                <router-link :to="{ name: 'favorites' }">My Favorites</router-link>|
                <router-link :to="{ name: 'family' }">My Family</router-link>|
                </span>
            </div>
        
    </div>
</template>

<script>
export default {
    name: "NavBar",
    methods: {
        Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");

            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
        }
    }
};    
</script>