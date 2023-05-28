import axios from "axios";

import { SERVER_URL } from "../../constants";

export default {
  async signIn(_, payload) {
    try {
      const { token } = await axios.post(`${SERVER_URL}/auth/sign-in`, payload);

      if (token) {
        localStorage.setItem("token", token);
      }
    } catch (e) {
      console.error(e);
    }
  },
  async signUp({ commit }, payload) {
    try {
      const data = await axios.post(`${SERVER_URL}/auth/sign-up`, payload);

      if (data) {
        commit("setRegistered", true);
      }
    } catch (e) {
      console.error(e);
    }
  }
};