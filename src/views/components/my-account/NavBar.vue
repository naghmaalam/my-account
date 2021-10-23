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
      <div class="d-flex flex-column justify-content-end align-items-end">
        <p class="loggedin pt-3">{{ $t("logged_in_as") }}</p>
        <p class="username pb-1">{{ stateUser.email }}</p>
      </div>
      <Fade2>
        <div class="dropdown">
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
          <div class="dropdown-content">
            <div
              class="d-flex flex-row justify-content-around"
              @click="redirect('account')"
            >
              <div>
                <img
                  src="@/assets/images/account-settings/cogwheel.png"
                  class="img-fluid swoshs-logo"
                  alt=""
                />
              </div>
              <div>{{ $t("account_settings") }}</div>
              <div><i class="flaticon-arrow-angle-pointing-to-right"></i></div>
            </div>
            <div class="d-flex flex-row justify-content-around">
              <div>
                <img
                  src="@/assets/images/account-settings/lifesaver.png"
                  class="img-fluid swoshs-logo"
                  alt=""
                />
              </div>
              <div>{{ $t("support") }}</div>
              <div>
                <i class="flaticon-arrow-angle-pointing-to-right"></i>
              </div>
            </div>

            <div class="d-flex flex-row justify-content-around">
              <img
                src="@/assets/images/account-settings/faq.png"
                class="img-fluid swoshs-logo"
                alt=""
              />
              <div>{{ $t("privacy") }}</div>
              <i class="flaticon-arrow-angle-pointing-to-right"></i>
            </div>
            <div class="d-flex flex-row justify-content-around" @click="logout">
              <img
                src="@/assets/images/account-settings/logout.png"
                class="img-fluid swoshs-logo"
                alt=""
              />
              <div>{{ $t("logout") }}</div>
              <i class="flaticon-arrow-angle-pointing-to-right"></i>
            </div>
          </div>
        </div>
      </Fade2>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { stateUser, useUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
import { useRouter } from "vue-router";
import Fade2 from "@/views/components/transitions/Fade2.vue";

export default defineComponent({
  components: {
    Fade2,
  },
  setup() {
    const user = useUser();
    const router = useRouter();

    const logout = () => {
      user.do.logout();
    };

    const redirect = (page: any) => {
      router.push({ name: page });
    };

    return {
      stateUser,
      logout,
      showSideMenu: useSettings().do.sideMenu.show,
      redirect,
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
}

.username {
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  line-height: 5px;
  text-align: right;
  color: #383361;
}

.account-bg {
  background: #f3f7fe;
  width: 100%;
  height: 100vh;
}

.account-navbar {
  width: 100%;
  background: #fff;
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
  /* font-size: 3rem; */
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
}
</style>
