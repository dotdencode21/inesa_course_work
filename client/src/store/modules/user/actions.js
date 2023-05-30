import axios from "axios";

import { SERVER_URL } from "@/constants";

export default {
  async getCurrentUser({ commit }, payload) {
    const { data } = await axios.post(`${SERVER_URL}/users/current`, payload);

    if (data) {
      commit("setCurrentUser", data);

      if (data.role === "ADMIN") {
        commit("setIsAdmin", true);
      }
    }
  },
  async updateCurrentUser({ dispatch }, payload) {
    try {
      const { status } = await axios.put(`${SERVER_URL}/users/update`, payload);
  
      if (status === 200) {
        await dispatch("getCurrentUser", payload);
      }
    } catch (e) {
      console.error(e);
    }
  }
};