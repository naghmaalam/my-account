<template>
  <!-- <div class="sidebar-sticky"> -->
  <!-- <div class="container pl-0 pr-0"> -->
  <div class="sidebar-container">
    <div
      class="sidebar-header row p-4 justify-content-center align-items-center"
    >
      <img
        src="@/assets/images/my-account/logo-swoshs.png"
        class="img-fluid swoshs-logo pt-2"
        alt=""
      />
    </div>

    <div class="container sidebar-menus">
      <div
        class="row"
        @click="redirect('home')"
        :class="{ 'active-button': $route.meta.activeMenu == 'home' }"
      >
        <div class="col">
          <div class="d-flex flex-row align-items-start">
            <div class="px-2 mt-4">
              <i class="flaticon-house icon-color"></i>
            </div>
            <div class="dashboard d-flex flex-column">
              <h5 class="mt-4">{{ $t("dashboard") }}</h5>
              <p>
                {{ $t("dashboard_info") }}
              </p>
              <div class="borderline mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        @click="redirect('devices')"
        :class="{ 'active-button': $route.meta.activeMenu == 'devices' }"
      >
        <div class="col">
          <div class="d-flex flex-row">
            <div class="px-2 mt-4">
              <i class="flaticon-responsive icon-color"></i>
            </div>
            <div class="dashboard d-flex flex-column">
              <h5 class="mt-4">{{ $t("devices") }}</h5>
              <p>
                {{ $t("devices_info") }}
              </p>
              <div class="borderline mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        @click="redirect('downloads')"
        :class="{ 'active-button': $route.meta.activeMenu == 'downloads' }"
      >
        <div class="col">
          <div class="d-flex flex-row">
            <div class="px-2 mt-4">
              <i class="flaticon-cloud-computing icon-color"></i>
            </div>
            <div class="dashboard d-flex flex-column">
              <h5 class="mt-4">{{ $t("downloads") }}</h5>
              <p>
                {{ $t("downloads_info") }}
              </p>
              <div class="borderline mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        @click="redirect('subscription')"
        :class="{ 'active-button': $route.meta.activeMenu == 'subscription' }"
      >
        <div class="col">
          <div class="d-flex flex-row">
            <div class="px-2 mt-4">
              <i class="flaticon-calendar-interface-symbol-tool icon-color"></i>
            </div>
            <div class="dashboard d-flex flex-column">
              <h5 class="mt-4">{{ $t("subscription") }}</h5>
              <p>
                {{ $t("subscription_info") }}
              </p>
              <div class="borderline mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row"
        @click="redirect('referfriend')"
        :class="{ 'active-button': $route.meta.activeMenu == 'referfriend' }"
      >
        <div class="col">
          <div class="d-flex flex-row">
            <div class="px-2 mt-4">
              <i class="flaticon-calendar-interface-symbol-tool icon-color"></i>
            </div>
            <div class="dashboard d-flex flex-column">
              <h5 class="mt-4">
                {{ $t("refer_friend") }}
                <span class="promo px-2">{{ $t("promo") }}</span>
              </h5>
              <p>
                {{ $t("refer_friend_info") }}
              </p>
              <div class="borderline mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="pb-3"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useSettings } from "@/hooks/useSettings";

export default defineComponent({
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const router = useRouter();
    const redirect = (page: string) => {
      useSettings().do.sideMenu.hide();
      router.push({ name: page });
    };
    return {
      redirect,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-container {
  display: flex;
  height: 100vh;
  flex-flow: column;
}

.sidebar-menus {
  overflow-y: auto;
  // border: 1px solid red;
  max-height: 100%;
  // background-color: red;
  > div {
    cursor: pointer;
    transition: all 0.5s;
  }
  .a-menu {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.dashboard {
  // max-width: 250px;
  max-width: 200px;
}

.dashboard h5 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: left;
  color: #fff;
  padding-right: 15px;
  position: relative;
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.dashboard p {
  /* width: 200px; */
  height: auto;
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.7rem;
  line-height: 17px;
  text-align: left;
  color: rgba(255, 255, 255, 0.88);
  padding-right: 15px;
}

.borderline {
  width: auto;
  height: 0px;
  background: transparent;
  border: 1px solid #fff;
  opacity: 0.19;
}

.icon-color {
  color: #fff;
  opacity: 0.5;
}

.promo {
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 500;
  font-size: 9px;
  text-align: right;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  background: #ff0080;
  position: absolute;
  top: 0;
  right: 0;
}

.subscription {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.your-account {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.active-btn {
  width: 101px;
  height: 30px;
  border-radius: 15px;
  background: #e9f9ee;
  font-family: Poppins;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #15c50a;
  border: 1px solid rgba(0, 0, 0, 0);
}

.user-avatar {
  color: #c6cfde;
}

/* dropdown */

.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover,
.dropdown:hover .dropbtn {
  /* background-color: red; */
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 307px;
  height: 226px;
  border-radius: 0px 0px 30px 30px;
  background: #fff;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.sidebar-header {
  background: #322653;
  margin-right: 0rem !important;
}
</style>
