import PromoHeadline from "@/views/components/my-account/PromoHeadline.vue";
import ReferFriendPromoHeadline from "@/views/components/my-account/ReferFriendPromoHeadline.vue";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/views/layouts/Main.vue";
import ReferFriendMain from "@/views/layouts/ReferFriendMain.vue";

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
      headline: false,
    },
    component: () => import("@/views/pages/ReferFriendPage.vue"),
  },
  {
    name: "rewards",
    path: "/referfriend/rewards",
    meta: {
      activeMenu: "referfriend",
      headline: ReferFriendPromoHeadline,
    },
    component: () => import("@/views/pages/RewardsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(): any {
    return { x: 0, y: 0 };
  },
});

// insert default data to router.meta
router.beforeEach((to, from, next) => {
  // layout
  if (!to.meta.layout) {
    to.meta.layout = Main;
  }

  // active menu
  if (!to.meta.activeMenu) {
    to.meta.activeMenu = to.name;
  }
  // headline
  if (to.meta.headline === false) {
    to.meta.headline = null;
  } else if (typeof to.meta.headline === "undefined") {
    to.meta.headline = PromoHeadline;
  }

  next();
});

export default router;
