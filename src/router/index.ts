import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/pages/Home.vue"),
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
    component: () => import("@/views/components/my-account/DevicesTable.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
