import axios from "axios";
import store from "../store/index.js";

function createInstance(options) {
  let header;
  if (store.state.token !== undefined) {
    header = {
      Authorization: store.state.token
    };
  } else {
    header = {};
  }

  return axios.create({
    baseURL: "http://localhost:3000/",
    headers: header
    // ...options
  });
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post("signup", userData);
}

function loginUser(loginData) {
  store.commit("SET_TOKEN", loginData.token);
  return instance.post("login", loginData);
}

export { registerUser, loginUser };
