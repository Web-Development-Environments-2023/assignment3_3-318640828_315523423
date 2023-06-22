<template>
    <div>
      <div id="nav">
        <router-link :to="{ name: 'main' }" class="nav-link">Vue Recipes</router-link>
        <span class="divider">|</span>
        <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
        <span class="divider">|</span>
        <span v-if="!$root.store.username" class="guest-section">
          Guest:
          <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
          <span class="divider">|</span>
          <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
        </span>
        <span v-else class="user-section">
          <router-link :to="{ name: 'favorites' }" class="nav-link">My Favorites</router-link>
          <span class="divider">|</span>
          <router-link :to="{ name: 'family' }" class="nav-link">My Family</router-link>
          <span class="divider">|</span>
          <span class="username">{{ $root.store.username }}</span>:
          <button class="logout-button" @click="Logout">Logout</button>
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

<style>
#nav {
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  align-items: center;
}

#nav a {
  margin-right: 10px;
  color: #333;
  text-decoration: none;
  font-weight: bold; /* Add this line to make all links bold */
}

#nav .divider {
  margin: 0 5px;
  color: #333;
}

#nav .guest-section {
  display: flex;
  align-items: center;
}

#nav .user-section {
  display: flex;
  align-items: center;
}

#nav .username {
  margin-right: 10px;
  font-weight: bold;
}

#nav .logout-button {
  padding: 5px 10px;
  color: #fff;
  background-color: #333;
  border: none;
  cursor: pointer;
}

.logout-button {
  margin-left: 10px;
}
</style>
