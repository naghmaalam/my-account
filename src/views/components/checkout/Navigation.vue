<template>
  <div class="noti-head">
    <p>
      {{ $t("your") }} IP: {{ ip }} - ISP: {{ location }}, {{ place }}, status:
      {{ status }}
      {{ isp }}
    </p>
  </div>
  <nav
    class="
      nav
      navbar navbar-expand-md navbar-dark
      nav
      inner-menu
      d-none d-md-block
    "
    id="nav"
  >
    <div class="container-fluid mobile-style">
      <a class="navbar-brand" href="https://swoshsvpn.com/">
        <img
          class="logo img-fluid"
          src="@/assets/images/navigation/logo.png"
          alt="SwoshsVPN"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click.prevent="mobMenuShow()"
      ></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto ml-0">
          <li class="nav-item">
            <a class="nav-link" href="https://swoshsvpn.com/what-is-vpn">{{
              $t("what_is_vpn")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://swoshsvpn.com/benefits">{{
              $t("benefits")
            }}</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://swoshsvpn.com/my-account/#/purchase"
              >{{ $t("pricing") }}</a
            >
          </li>
          <li>
            <div
              class="nav-link dropdown-toggle"
              @mouseenter="showMenu"
              @mouseleave="hideMenu"
              @click="toggleMenu"
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $t("download") }}
            </div>
          </li>

          <!-- start of drop-down -->
          <transition name="navbar">
            <div
              class="dropdown-content shadow pb-3"
              v-if="isShown"
              @mouseenter="showMenu"
              @mouseleave="hideMenu"
            >
              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-android"
                ><i class="flaticon-android pr-3" aria-hidden="true"></i
                >{{ $t("android") }}</a
              >

              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-ios"
              >
                <i class="flaticon-apple pr-3" aria-hidden="true"></i
                >{{ $t("ios") }}</a
              >

              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-windows"
              >
                <i class="flaticon-windows pr-3" aria-hidden="true"></i
                >{{ $t("windows") }}</a
              >

              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-mac"
              >
                <i class="flaticon-macos pr-3" aria-hidden="true"></i
                >{{ $t("mac_os") }}</a
              >
              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-linux"
                ><i class="flaticon-linux pr-3" aria-hidden="true"></i
                >{{ $t("linux") }}</a
              >
              <a class="dropdown-item" href="https://swoshsvpn.com/app-download"
                ><i class="flaticon-responsive pr-3" aria-hidden="true"></i>
                {{ $t("all_platform") }}</a
              >
            </div>
          </transition>

          <!-- end of drop down -->

          <li class="nav-item">
            <a class="nav-link" href="https://swoshsvpn.com/blog">{{
              $t("blog")
            }}</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="../my-account.html">My Account</a> -->
            <router-link :to="{ name: 'home' }" class="nav-link">
              {{ $t("my_account") }}
            </router-link>
          </li>
          <li class="nav-item cta-header">
            <a
              class="nav-link"
              href="https://swoshsvpn.com/my-account/#/purchase"
              >{{ $t("get_strated") }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- mob res nav bar -->
  <nav
    class="nav navbar navbar-expand-md navbar-dark nav inner-menu d-md-none"
    id="nav"
  >
    <div class="container-fluid mobile-style">
      <a class="navbar-brand" href="https://swoshsvpn.com/">
        <img
          class="logo img-fluid"
          src="@/assets/images/navigation/logo.png"
          alt="SwoshsVPN"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click.prevent="mobMenuShow()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="mob-responsive-nav"
        id="navbarSupportedContent"
        v-if="isMobNavShown"
        @mouseleave="hideMenu"
        @mouseenter="mobMenuShow"
        @click="toggleMenu"
      >
        <ul class="navbar-nav ml-auto ml-0">
          <li class="nav-item">
            <a class="nav-link" href="https://swoshsvpn.com/what-is-vpn">{{
              $t("what_is_vpn")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://swoshsvpn.com/benefits">{{
              $t("benefits")
            }}</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://swoshsvpn.com/my-account/#/purchase"
              >{{ $t("pricing") }}</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $t("download") }}
            </a>
            <div
              class="dropdown-menu animate slideIn"
              aria-labelledby="navbarDropdown2"
            >
              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-android"
                ><i class="fa fa-android icon" aria-hidden="true"></i
                >{{ $t("android") }}</a
              >
              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-ios"
                ><i class="fa fa-apple icon" aria-hidden="true"></i
                >{{ $t("iOS") }}</a
              >
              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-windows"
                ><i class="fa fa-windows icon" aria-hidden="true"></i
                >{{ $t("windows") }}</a
              >
              <a
                class="dropdown-item"
                href="https://swoshsvpn.com/download-vpn-for-linux"
                ><i class="fa fa-linux icon" aria-hidden="true"></i
                >{{ $t("linux") }}</a
              ><a
                class="dropdown-item"
                href="https://swoshsvpn.com/app-download"
                ><i class="fa fa-sitemap icon" aria-hidden="true"></i
                >{{ $t("all_platform") }}</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog/index.html">{{ $t("blog") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../my-account.html">{{
              $t("my_account")
            }}</a>
          </li>
          <li class="nav-item cta-header">
            <a class="nav-link" href="#">{{ $t("get_strated") }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { stateUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
import { useRouter } from "vue-router";
// import { getIPLocation } from "@/modules/utils";
import { useUser } from "@/hooks/useUser";

export default defineComponent({
  setup() {
    const router = useRouter();
    const user = useUser();

    const ip = ref();
    const location = ref();
    const place = ref();
    const status = ref();
    const isp = ref();
    const isShown = ref(false);
    const isMouseOn = ref(false);
    const isMobNavShown = ref(false);

    const showMenu = () => {
      isMouseOn.value = true;
      isShown.value = true;

      // setTimeout(() => {
      //   if (isMouseOn.value) isShown.value = true;
      // }, 300);
    };

    const mobMenuShow = () => {
      isMobNavShown.value = !isMobNavShown.value;
      isMouseOn.value = true;
    };

    const hideMenu = () => {
      isMouseOn.value = false;
      setTimeout(() => {
        if (!isMouseOn.value) isShown.value = false;
      }, 300);
    };

    const toggleMenu = () => {
      isMouseOn.value = !isMouseOn.value;
      isShown.value = !isShown.value;
    };

    const redirect = (page: any) => {
      router.push({ name: page });
    };

    onMounted(async () => {
      const rspns = await user.get.getIpLocation();
      if (!(rspns instanceof Error)) {
        ip.value = rspns.ipAddress || "-";
        location.value = rspns.location || "-";
        place.value = rspns.place || "-";
        status.value = rspns.status || "-";
        isp.value = rspns.isp || "-";
      }
    });

    return {
      stateUser,
      showSideMenu: useSettings().do.sideMenu.show,
      redirect,
      isShown,
      showMenu,
      hideMenu,
      toggleMenu,
      isMobNavShown,
      mobMenuShow,
      ip,
      location,
      place,
      status,
      isp,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-toggler-container {
  position: absolute;
  top: 15px;
  left: 15px;
  .navbar-toggler {
    border-radius: 10px;
    background: linear-gradient(#a215ff 0%, #5f29ff 100%);
    color: #fff;
    font-family: Poppins;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
  }
}

/* dropdown */

.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  top: 61px;
  right: 450px;
  width: 200px;
  height: auto;
  border-radius: 0px 0px 5px 5px;
  background: #1c1431;
  opacity: 0.9;
  z-index: -999;
  // border: 1px solid red;
  > div {
    cursor: pointer;
    .name {
      width: 150px;
    }
  }

  a {
    color: #fff;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  a:hover {
    background-color: #f1f1f1;
  }

  .mob-responsive-nav {
    width: 100%;
    background-color: #6d24ff;
    color: #ffffff;
    position: absolute;
    top: 10%;
    text-align: center;
  }

  .noti-head {
    background-color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: white;
    font-size: 13px;
    position: relative;
    z-index: 20;
  }
}

// .navbar {
//   position: absolute;
//   // transform: translate(-3rem);
//   transition: all 0.3s ease 0s, visibility 0s linear 0.3s;
// }

.nav {
  z-index: 999;
  transition: translate(-3rem);
  transition: linear 0.3s ease-in-out, all ease-in 0.4s;
}

.navbar-enter-from {
  // opacity: 0;
  transform: translateY(-100%);
}
.navbar-enter-active {
  transition: all 0.4s;
}
.navbar-enter-to {
  // opacity: 1;
  transform: translateY(0%);
}

.navbar-leave-from {
  // opacity: 1;
  transform: translateY(0%);
}
.navbar-leave-active {
  transition: all 0.4s;
}
.navbar-leave-to {
  // opacity: 0;
  transform: translateY(-100%);
}
</style>
