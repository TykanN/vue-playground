import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Login from "@/views/LoginView.vue";
import Board from "@/views/BoardView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => About,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/board/write",
    name: "board.write",
    component: Board,
  },
];

const About = import(/* webpackChunkName: "about" */ "../views/AboutView.vue");

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
