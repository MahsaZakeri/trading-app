import { createRouter, createWebHashHistory } from "vue-router";
import TheHomeView from "../views/TheHomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TheHomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
