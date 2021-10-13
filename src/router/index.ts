import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "root",
    path: "/",
    component: () => import("@/views/pages/Home.vue"),
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/pages/Home.vue"),
  },
  {
    name: "devices",
    path: "/devices",
    component: () => import("@/views/pages/Devices.vue"),
  },
  {
    name: "downloads",
    path: "/downloads",
    component: () => import("@/views/pages/Downloads.vue"),
  },
  {
    name: "account",
    path: "/account",
    component: () => import("@/views/pages/AccountSettings.vue"),
  },
  {
    name: "subscription",
    path: "/subscription",
    component: () => import("@/views/pages/Subscription.vue"),
  },
  {
    name: "referfriend",
    path: "/referfriend",
    component: () => import("@/views/pages/ReferFriend.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
