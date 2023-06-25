import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },

  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/MyFavoritesPage"),
  },
  {
    path: "/family",
    name: "family",
    component: () => import("./pages/MyFamilyPage"),
  },
  {
    path: "/myRec",
    name: "myRec",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("./pages/CreateRecipePage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/Internalrecipe",
    name: "Internalrecipe",
    component: () => import("./pages/InternalRecipePage"),
  },
  {
    path: "/Internalfamily",
    name: "Internalfamily",
    component: () => import("./pages/InternalFamilyPage"),
  },
  {
    path: "*", 
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
