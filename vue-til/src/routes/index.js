import Vue from "vue";
import VueRouter from "vue-router";
// import LoginView from "../views/LoginView.vue";
// import SignupView from "../views/SignupView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: () => import("../views/LoginView.vue")
    },
    {
      path: "/signup",
      component: () => import("../views/SignupView.vue")
    }
  ]
});
