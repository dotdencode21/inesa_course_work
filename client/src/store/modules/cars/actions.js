import axios from "axios";

import { SERVER_URL } from "@/constants";

export default {
  async getCars({ commit }) {
    try {
      const { data } = await axios.get(`${SERVER_URL}/cars/all`);

      if (data) {
        commit("setCars", data);
      }
    } catch (e) {
      console.error(e);
    }
  },
  async createCar({ commit }, payload) {
    try {
      const { status } = await axios.post(`${SERVER_URL}/cars/add`, payload);

      if (status === 200) {
        await dispatch("getCars");
      }
    } catch (e) {
      console.error(e);
    }
  },
  async updateCar({ dispatch }, payload) {
    try {
      const { status } = await axios.put(`${SERVER_URL}/cars/update`, payload);

      if (status === 200) {
        await dispatch("getCars");
      }
    } catch (e) {
      console.error(e);
    }
  },
  async deleteCar({ commit }, payload) {
    try {
      const { status } = await axios.delete(`${SERVER_URL}/cars/update`, payload);

      if (status === 200) {
        await dispatch("getCars");
      }
    } catch (e) {
      console.error(e);
    }
  },
};