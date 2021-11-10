<template>
  <div class="noti-head">
    <p>
      Your IP: 87.200.180.92 - ISP: Emirates Integrated Telecommunications
      Company PJSC
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
      <a class="navbar-brand" href="index.html">
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
            <a class="nav-link" href="/what-is-vpn.html">What is VPN?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="benefits.html">Benefits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="purchase.html">Pricing</a>
          </li>
          <li>
            <div
              class="nav-link"
              @mouseenter="showMenu"
              @mouseleave="hideMenu"
              @click="toggleMenu"
            >
              Download
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
              <a class="dropdown-item" href="/android.html"
                ><i class="flaticon-android pr-3" aria-hidden="true"></i
                >Android</a
              >

              <a class="dropdown-item" href="/windows.html">
                <i class="flaticon-windows pr-3" aria-hidden="true"></i
                >Windows</a
              >
              <a class="dropdown-item" href="/ios.html">
                <i class="flaticon-apple pr-3" aria-hidden="true"></i>iOS</a
              >
              <a class="dropdown-item" href="/linux.html"
                ><i class="flaticon-linux pr-3" aria-hidden="true"></i>Linux</a
              >
            </div>
          </transition>

          <!-- end of drop down -->

          <li class="nav-item">
            <a class="nav-link" href="/blog/index.html">Blog</a>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="../my-account.html">My Account</a> -->
            <router-link :to="{ name: 'home' }" class="nav-link">
              My Account
            </router-link>
          </li>
          <li class="nav-item cta-header">
            <a class="nav-link" href="/purchase.html">Get Started</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- mob-responbsive drop-down -->

    <!-- <transition name="navbar" class="d-md-none">
      <div
        class="mob-responsive-nav shadow pb-3"
        v-if="isMobNavShown"
        @mouseleave="hideMenu"
        @mouseenter="mobMenuShow"
      >
        <a class="dropdown-item" href="what-is-vpn.html">What is VPN?</a>

        <a class="nav-link" href="benefits.html">Benefits</a>

        <a class="nav-link" href="purchase.html">Pricing</a>

        <a class="nav-link" href="blog/index.html">Blog</a>

        <a class="nav-link" href="../my-account.html">My Account</a>

        <li class="nav-item cta-header">
          <a class="nav-link" href="#">Get Started</a>
        </li>
      </div>
    </transition> -->
  </nav>

  <!-- mob res nav bar -->
  <nav
    class="nav navbar navbar-expand-md navbar-dark nav inner-menu d-md-none"
    id="nav"
  >
    <div class="container-fluid mobile-style">
      <a class="navbar-brand" href="../index.html">
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
            <a class="nav-link" href="../what-is-vpn.html">What is VPN?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../benefits.html">Benefits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../purchase.html">Pricing</a>
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
              Download
            </a>
            <div
              class="dropdown-menu animate slideIn"
              aria-labelledby="navbarDropdown2"
            >
              <a class="dropdown-item" href="./android.html"
                ><i class="fa fa-android icon" aria-hidden="true"></i>Android</a
              >
              <a class="dropdown-item" href="/windows.html"
                ><i class="fa fa-windows icon" aria-hidden="true"></i>Windows</a
              >
              <a class="dropdown-item" href="/ios.html"
                ><i class="fa fa-apple icon" aria-hidden="true"></i>iOS</a
              ><a class="dropdown-item" href="/linux.html"
                ><i class="fa fa-linux icon" aria-hidden="true"></i>Linux</a
              ><a class="dropdown-item" href="/app-download.html"
                ><i class="fa fa-sitemap icon" aria-hidden="true"></i>All
                Platform</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog/index.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../my-account.html">My Account</a>
          </li>
          <li class="nav-item cta-header">
            <a class="nav-link" href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { stateUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

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
</style>
