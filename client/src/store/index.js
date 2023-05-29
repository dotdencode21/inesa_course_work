import { createStore } from "vuex";

import auth from "./modules/auth";
import user from "./modules/user";
import cars from "./modules/cars";

export default createStore({
  modules: {
    auth,
    user,
    cars
  }
});