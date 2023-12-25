import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// TODO:aliasの設定で、src/pages/Home/BBHomeに変更予定
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../../src/layouts/MainLayout.vue'),
    children: [
      {
        // Login
        name: 'Login',
        path: '/Login',

        component: () => import('../../src/pages/Login/BBLogin.vue'),
      },
      {
        // Home
        name: 'Home',
        path: '/Home',

        component: () => import('../../src/pages/Home/BBHome.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
