<template>
  
    <div>
      <div id="nav">
        <span v-if="!$root.store.username" class="guest-section">
        Hello guest
        </span> 
        <span v-if="$root.store.username" class="user-section">
        Hello {{ $root.store.username }}
      </span>
        
        <router-link :to="{ name: 'main' }" class="nav-link">Vue Recipes</router-link>
        <span class="divider">|</span>
        <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
        <span class="divider">|</span>
        <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
        <span class="divider">|</span>
        <span v-if="!$root.store.username" class="guest-section">
          <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
          <span class="divider">|</span>
          <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
        </span>
        <span v-else class="user-section">
          <b-dropdown right split text="My Content">
            <b-dropdown-item>
              <router-link :to="{ name: 'favorites' }" class="nav-link">My Favorites</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link :to="{ name: 'family' }" class="nav-link">My Family</router-link>
            </b-dropdown-item>     
            <b-dropdown-item>
              <router-link :to="{ name: 'myRec' }" class="nav-link">My Recipes</router-link>
            </b-dropdown-item>   
            <b-dropdown-item>
              <router-link :to="{ name: 'create' }" class="nav-link">Create New Recipe</router-link>
            </b-dropdown-item>  
            
            <b-dropdown-item @click="activateNewRecipe" class="nav-link">Create New Recipe</b-dropdown-item>
              <b-modal v-if="showModalDialog" v-model="showModalDialog"  hide-footer title="Add Recipe">
                <AddRecipeModal @formSubmitted="unshowModalDialog"></AddRecipeModal>
              </b-modal>

          </b-dropdown>
          <button class="logout-button" @click="Logout">Logout</button>



        </span>
      </div>
    </div>
  </template>


<script>
import AddRecipeModal from './AddRecipeModal.vue';
export default {
    
  data() {
      return {
        showLoginPage: true,
        showModalDialog: false
      };
    },
    components: {
      AddRecipeModal
    },
  name: "NavBar",
    methods: {
        Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");

            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
        },
        activateNewRecipe() {
          this.showModalDialog = true;
        },
        unshowModalDialog() {
          this.showModalDialog = false;
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

