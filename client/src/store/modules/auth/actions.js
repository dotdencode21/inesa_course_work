import axios from "axios";

import { SERVER_URL } from "@/constants";

export default {
  async signIn(_, payload) {
    try {
      const { data: { token } } = await axios.post(`${SERVER_URL}/auth/sign-in`, payload);      

      if (token) {
        localStorage.setItem("token", token);
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