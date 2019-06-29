<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">password: </label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from "../api/index.js";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      loginUser({
        username: this.username,
        password: this.password
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
