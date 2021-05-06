import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Rooms from "../views/Rooms.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: Rooms,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
