import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// TODO:aliasの設定で、src/pages/Home/BBHomeに変更予定
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        // Home
        name: "Home",
        path: "/Home",

        component: () => import("../pages/Login/BBLogin.vue"),
      },
      {
        // Home
        name: "Home",
        path: "/Home",

        component: () => import("../pages/Home/BBHome.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
