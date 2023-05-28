import { createStore } from "vuex";

import auth from "./auth";
import user from "./user";
import cars from "./cars";

export default createStore({
  modules: {
    auth,
    user,
    cars
  }
});