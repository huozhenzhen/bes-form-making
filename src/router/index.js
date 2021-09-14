import Vue from "vue";
import Router from "vue-router";

import Home from "../demo/Home.vue";
import Home1 from "../demo/Home1.vue";
import LanguageView from "./LanguageView.vue";

Vue.use(Router);

const language =
  localStorage.getItem("language") ||
  (navigator.language == "zh-CN" ? "zh-CN" : "en-US");

export default new Router({
  routes: [
    {
      path: "/",
      redirect: (to) => ({ name: "lang" }),
    },
    {
      path: "/lang",
      // name: 'lang',
      component: LanguageView,
      children: [
        {
          path: "",
          name: "index",
          component: Home,
        },
      ],
    },
    {
      path: "/test",
      name: 'lang',
      component: LanguageView,
      children: [
        {
          path: "",
          name: "index1",
          component: Home1,
        },
      ],
    },
  ],
});
