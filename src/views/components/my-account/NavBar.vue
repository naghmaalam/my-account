<template>
  <nav class="navbar fixed-top flex-md-nowrap p-0 shadow">
    <div
      class="
        account-navbar
        col
        d-flex
        flex-row
        justify-content-end
        align-items-end
      "
    >
      <div class="navbar-toggler-container">
        <button
          class="navbar-toggler position-absolute"
          type="button"
          aria-label="Toggle navigation"
          @click="showSideMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        class="d-flex flex-column justify-content-end align-items-end"
        @mouseenter="showMenu"
        @mouseleave="hideMenu"
        @click="toggleMenu"
      >
        <p class="loggedin pt-3">{{ $t("logged_in_as") }}</p>
        <p class="username pb-1">{{ stateUser.email }}</p>
      </div>
      <div
        class="dropdown"
        @mouseenter="showMenu"
        @mouseleave="hideMenu"
        @click="toggleMenu"
      >
        <a href="javascript:void(0)" class="dropbtn">
          <i
            class="
              flaticon-round-account-button-with-user-inside
              user-avatar
              mb-3
              pl-3
              pr-4
            "
          ></i>
        </a>
      </div>
    </div>

    <transition name="navbar">
      <div
        class="dropdown-content shadow pb-3"
        v-if="isShown"
        @mouseenter="showMenu"
        @mouseleave="hideMenu"
      >
        <div
          class="d-flex flex-row justify-content-between mt-2"
          @click="redirect('account')"
        >
          <img
            src="@/assets/images/account-settings/cogwheel.png"
            class="img-fluid swoshs-logo pl-3"
            alt=""
          />

          <div class="name">{{ $t("account_settings") }}</div>

          <i class="flaticon-arrow-angle-pointing-to-right pr-3"></i>
        </div>
        <div class="d-flex flex-row justify-content-between mt-3">
          <img
            src="@/assets/images/account-settings/lifesaver.png"
            class="img-fluid swoshs-logo pl-3"
            alt=""
          />

          <div class="name">{{ $t("support") }}</div>

          <i class="flaticon-arrow-angle-pointing-to-right pr-3"></i>
        </div>

        <div class="d-flex flex-row justify-content-between mt-3">
          <img
            src="@/assets/images/account-settings/faq.png"
            class="img-fluid swoshs-logo pl-3"
            alt=""
          />

          <div class="name">{{ $t("privacy") }}</div>

          <i class="flaticon-arrow-angle-pointing-to-right pr-3"></i>
        </div>
        <div
          class="d-flex flex-row justify-content-between mt-3"
          @click="logout"
        >
          <img
            src="@/assets/images/account-settings/logout.png"
            class="img-fluid swoshs-logo pl-3"
            alt=""
          />

          <div class="name">{{ $t("logout") }}</div>

          <i class="flaticon-arrow-angle-pointing-to-right pr-3"></i>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { stateUser, useUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    // SimpleFade,
  },
  setup() {
    const user = useUser();
    const router = useRouter();

    const isShown = ref(false);
    const isMouseOn = ref(false);

    const logout = () => {
      user.do.logout();
    };

    const showMenu = () => {
      isMouseOn.value = true;
      isShown.value = true;
      // setTimeout(() => {
      //   if (isMouseOn.value) isShown.value = true;
      // }, 300);
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
      logout,
      showSideMenu: useSettings().do.sideMenu.show,
      redirect,
      isShown,
      showMenu,
      hideMenu,
      toggleMenu,
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

.loggedin {
  font-family: Poppins;
  font-weight: normal;
  font-size: 11px;
  text-align: right;
  line-height: 5px;
  color: #5b5970;
  cursor: pointer;
}

.username {
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  line-height: 5px;
  text-align: right;
  color: #383361;
  cursor: pointer;
}

.account-bg {
  background: #f3f7fe;
  width: 100%;
  height: 100vh;
}

.account-navbar {
  width: 100%;
  background: #fff;
  z-index: 1;
}

.support {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.vertical-line {
  width: 0px;
  height: 149.19px;
  background: transparent;
  border: 1px solid #d4e3fc;
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

// a:hover,
// .dropdown:hover .dropbtn {
//   background-color: red;
// }

.dropdown {
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  top: 61px;
  right: 30px;
  width: 290px;
  height: auto;
  border-radius: 0px 0px 5px 5px;
  background: #fff;
  // border: 1px solid red;
  > div {
    cursor: pointer;
    .name {
      width: 150px;
    }
  }

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  a:hover {
    background-color: #f1f1f1;
  }
}
// .dropdown:hover .dropdown-content {
//   border: 1px solid red;
//   opacity: 1;
//   top: 100%;
// }

@media screen and (max-width: 992px) {
  .username {
    font-size: 10px;
    line-height: 5px;
  }

  .loggedin {
    font-size: 7px;
    line-height: 5px;
  }

  .user-avatar {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .dropdown-content {
    width: 100vw;
    left: 0;
    right: 0;
  }
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
