import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/layouts/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: "main",
    path: "/",
    component: Main,
    children: [
      {
        name: "root",
        path: "",
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
        name: "orderhistory",
        path: "/orderhistory",
        component: () => import("@/views/pages/OrderHistoryPage.vue"),
      },
      {
        name: "test",
        path: "/test",
        component: () =>
          import("@/views/components/freeUser/FreeUserReferFriend.vue"),
      },
      {
        name: "referfriend",
        path: "/referfriend",
        meta: {
          customComponents: {
            headline: "ReferFriendPromoHeadline",
          },
        },
        component: () => import("@/views/pages/ReferFriend.vue"),
      },
      {
        name: "rewards",
        path: "/rewards",
        meta: {
          customComponents: {
            headline: "ReferFriendPromoHeadline",
          },
        },
        component: () => import("@/views/pages/RewardsPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
