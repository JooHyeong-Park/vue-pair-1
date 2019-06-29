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
      <div>
        <label for="nickname">nickname: </label>
        <input id="nickname" type="text" v-model="nickname" />
      </div>
      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
import { registerUser } from "../api/index.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    submitForm() {
      const data = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      };
      registerUser(data)
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
