import axios from "axios";

import { SERVER_URL } from "@/constants";

export default {
  async getCars({ commit }) {
    const { data } = await axios.get(`${SERVER_URL}/cars/all`);

    if (data) {
      commit("setCars", data);
    }
  },
  async getCar({ commit }, payload) {

  },
  async createCar({ commit }, payload) {

  },
  async updateCar({ commit }, payload) {

  },
  async deleteCar({ commit }, payload) {

  },
};