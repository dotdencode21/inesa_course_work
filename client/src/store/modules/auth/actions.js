import axios from "axios";

import { SERVER_URL } from "@/constants";

export default {
  async signIn({ dispatch }, payload) {
    try {
      const { data: { token } } = await axios.post(`${SERVER_URL}/auth/sign-in`, payload);      

      if (token) {
        localStorage.setItem("token", token);

        if (localStorage.getItem("token")){
          await dispatch("auth/user/getCurrentUser", localStorage.getItem("token"));
        }
      }
    } catch (e) {
      console.error(e);
    }
  },
  async signUp({ commit }, payload) {
    try {
      const { status } = await axios.post(`${SERVER_URL}/auth/sign-up`, payload);

      return status === 200;
    } catch (e) {
      console.error(e);
    }
  }
};