import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import PromoHeadline from "@/views/components/my-account/PromoHeadline.vue";
import ReferralLinkPage from "@/views/pages/ReferralLinkPage.vue";

import Main from "@/views/layouts/Main.vue";
import ReferralLinkMain from "@/views/layouts/ReferralLinkMain.vue";

import SideBar from "@/views/components/my-account/SideBar.vue";
import NavBar from "@/views/components/my-account/NavBar.vue";

const components = {
  navigation: NavBar,
  sidebar: SideBar,
  headline: PromoHeadline,
};

const components2 = {
  navigation: NavBar,
  sidebar: SideBar,
};

const routes: Array<RouteRecordRaw> = [
  {
    name: "root",
    path: "",
    components: {
      default: () => import("@/views/pages/Home.vue"),
      ...components,
    },
  },
  {
    name: "home",
    path: "/home",
    components: {
      default: () => import("@/views/pages/Home.vue"),
      ...components,
    },
  },
  {
    name: "devices",
    path: "/devices",
    components: {
      default: () => import("@/views/pages/Devices.vue"),
      ...components,
    },
  },
  {
    name: "downloads",
    path: "/downloads",
    components: {
      default: () => import("@/views/pages/Downloads.vue"),
      ...components,
    },
  },
  {
    name: "account",
    path: "/account",
    components: {
      default: () => import("@/views/pages/AccountSettingsPage.vue"),
      ...components,
    },
  },
  {
    name: "subscription",
    path: "/subscription",
    components: {
      default: () => import("@/views/pages/Subscription.vue"),
      ...components,
    },
  },
  {
    name: "orderhistory",
    path: "/orderhistory",
    components: {
      default: () => import("@/views/pages/OrderHistoryPage.vue"),
      ...components,
    },
  },
  {
    name: "freeUserAccount",
    path: "/freeUserAccount",
    components: {
      default: () => import("@/views/pages/FreeUserAccountSettingsPage.vue"),
      ...components,
    },
  },
  {
    name: "freeUserDevices",
    path: "/freeUserDevices",
    components: {
      default: () => import("@/views/pages/FreeUserDevicesPage.vue"),
      ...components,
    },
  },
  {
    name: "freeUserOrder",
    path: "/freeUserOrder",
    components: {
      default: () => import("@/views/pages/FreeUserOrderHistoryPage.vue"),
      ...components,
    },
  },
  {
    name: "freeUserSubscription",
    path: "/freeUserSubscription",
    components: {
      default: () => import("@/views/pages/FreeUserSubscriptionPage.vue"),
      ...components,
    },
  },
  {
    name: "freeUserSubscription",
    path: "/freeUserSubscription",
    components: {
      default: () => import("@/views/pages/FreeUserSubscriptionPage.vue"),
      ...components,
    },
  },
  {
    name: "referfriend",
    path: "/referfriend",
    components: {
      default: () => import("@/views/pages/ReferFriendPage.vue"),
      ...components2,
    },
  },
  {
    name: "rewards",
    path: "/referfriend/rewards",
    meta: {
      activeMenu: "referfriend",
    },
    components: {
      default: () => import("@/views/pages/RewardsPage.vue"),
      ...components2,
    },
  },
  {
    name: "referrallink",
    path: "/register/referrer/:inviteCode",
    props: true,
    meta: {
      layout: ReferralLinkMain,
    },
    components: {
      default: ReferralLinkPage,
    },
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

  next();
});

export default router;
