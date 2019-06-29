import Vue from "vue";
import Vuex from "vuex";

// import { fetchNews, fetchUser } from "../api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      console.log("----------------------");
      console.log(token);
      state.token = token;
    }
  },
  actions: {}
});
