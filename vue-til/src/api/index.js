import axios from "axios";

function createInstance(options) {
  return axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      Authorization: "hello"
    },
    ...options
  });
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post("signup", userData);
}

function loginUser(loginData) {
  return instance.post("login", loginData);
}

export { registerUser, loginUser };
