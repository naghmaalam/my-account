import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   name: 'root',
  //   path: '/',
  //   component: () => import('@/views/home/Home.vue')
  // },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "navBar",
    path: "/navBar",
    component: () => import("@/views/components/my-account/NavBar.vue"),
  },
  {
    name: "sidebar",
    path: "/sidebar",
    component: () => import("@/views/components/my-account/SideBar.vue"),
  },

  {
    name: "dash",
    path: "/dash",
    component: () => import("@/views/components/my-account/DashboardBody.vue"),
  },
  {
    name: "code",
    path: "/code",
    component: () => import("@/views/components/login/LoginEnterCode.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
