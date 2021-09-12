import Vue from "vue";
import Vuex from "vuex";

import launches from "@/fetch/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    launches: [],
  },
  mutations: {
    SET_LAUNCHES: (state, payload) => {
      state.launches = payload;
    },
  },
  actions: {
    FETCH_LAUNCHES: async ({ commit }) => {
      const launchesList = await launches.fetchUpcoming();
      let formatted;

      formatted = launchesList.results.map((entry) => {
        return {
          name: entry.name,
          rocketName: entry.rocket.configuration.name,
          image: entry.image,
          videos: entry.vidURLs,
          time: entry.net,
        };
      });

      commit("SET_LAUNCHES", formatted);
    },
  },
  modules: {},
});
