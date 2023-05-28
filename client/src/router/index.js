import Home from "@/pages/Home/index.vue";
import Auth from "@/pages/Auth/index.vue";

export default [
  { 
    path: "/", 
    component: Home,
  },
  {
    path: "/auth",
    component: Auth,
  }
];