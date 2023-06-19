<template>
  <div id="app">
    <NavBar></NavBar>
    
    <router-view />
  
    <!-- <NavBar></NavBar> -->
  </div>

  
    
</template>

<script>
import NavBar from "./pages/NavBar";
export default {
  name: "App",
  components: {NavBar},
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

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #b611c5;
}

.guest-section {
  font-weight: bold;
}

.user-section {
  font-weight: bold;
  color: #42b983;
}

/* Hover effect */
#nav a:hover {
  background-color: #f2f2f2;
  color: #b611c5;
}
</style>
