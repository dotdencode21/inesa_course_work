import Home from "@/pages/Home/index.vue";
import Auth from "@/pages/Auth/index.vue";
import Cars from "@/pages/Cars/index.vue";
import Account from "@/pages/Account/index.vue";

export default [
  { 
    path: "/", 
    component: Home,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/cars",
    component: Cars
  },
  {
    path: "/account",
    component: Account
  }
];