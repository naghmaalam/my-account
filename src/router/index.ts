import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Main from "@/views/layouts/Main.vue";

const routes: Array<RouteRecordRaw> = [
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
    name: "freeUserAccount",
    path: "/freeUserAccount",
    component: () => import("@/views/pages/FreeUserAccountSettingsPage.vue"),
  },
  {
    name: "freeUserDevices",
    path: "/freeUserDevices",
    component: () => import("@/views/pages/FreeUserDevicesPage.vue"),
  },
  {
    name: "freeUserOrder",
    path: "/freeUserOrder",
    component: () => import("@/views/pages/FreeUserOrderHistoryPage.vue"),
  },
  {
    name: "freeUserFriend",
    path: "/freeUserFriend",
    component: () => import("@/views/pages/FreeUserReferFriendPage.vue"),
  },
  {
    name: "freeUserSubscription",
    path: "/freeUserSubscription",
    component: () => import("@/views/pages/FreeUserSubscriptionPage.vue"),
  },
  {
    name: "freeUserSubscription",
    path: "/freeUserSubscription",
    component: () => import("@/views/pages/FreeUserSubscriptionPage.vue"),
  },
  {
    name: "test",
    path: "/test",
    component: () => import("@/views/components/refferalLink/ReferralLink.vue"),
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
