<template>
  <div class="sidebar-sticky">
    <div class="container pl-0 pr-0">
      <div class="row p-4 justify-content-center align-items-center">
        <img
          src="@/assets/images/my-account/logo-swoshs.png"
          class="img-fluid swoshs-logo pt-2"
          alt=""
        />
      </div>

      <div class="container sidebar-menus">
        <div class="row active-button">
          <div class="col">
            <div class="d-flex flex-row align-items-start">
              <div class="px-2 mt-4">
                <i class="flaticon-house icon-color"></i>
              </div>
              <div class="dashboard d-flex flex-column">
                <h5 class="mt-4">Dashboard</h5>
                <p>
                  The Account Dashboard is a comprehensive overview of account
                  details.
                </p>
                <div class="borderline mt-4"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" @click="redirect('devices')">
          <div class="col">
            <div class="d-flex flex-row">
              <div class="px-2 mt-4">
                <i class="flaticon-responsive icon-color"></i>
              </div>
              <div class="dashboard d-flex flex-column">
                <h5 class="mt-4">Devices</h5>
                <p>
                  Manage and overview of your secured connected devices and
                  details.
                </p>
                <div class="borderline mt-4"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" @click="redirect('downloads')">
          <div class="col">
            <div class="d-flex flex-row">
              <div class="px-2 mt-4">
                <i class="flaticon-cloud-computing icon-color"></i>
              </div>
              <div class="dashboard d-flex flex-column">
                <h5 class="mt-4">Downloads</h5>
                <p>
                  Get Swoshs VPN with specific platform of your choice, from
                  Android, iOS, Windows etc.
                </p>
                <div class="borderline mt-4"></div>
              </div>
            </div>
          </div>
        </div>

        <a href="subscription.html">
          <div class="row">
            <div class="col">
              <div class="d-flex flex-row">
                <div class="px-2 mt-4">
                  <i
                    class="flaticon-calendar-interface-symbol-tool icon-color"
                  ></i>
                </div>
                <div class="dashboard d-flex flex-column">
                  <h5 class="mt-4">Subscription</h5>
                  <p>
                    Where you can check the overview details of your
                    subscription and order history.
                  </p>
                  <div class="borderline mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="account-settings-refer-friend.html">
          <div class="row">
            <div class="col">
              <div class="d-flex flex-row">
                <div class="px-2 mt-4">
                  <i
                    class="flaticon-calendar-interface-symbol-tool icon-color"
                  ></i>
                </div>
                <div class="dashboard d-flex flex-column">
                  <h5 class="mt-4">
                    Refer a Friend <span class="promo px-2">promo</span>
                  </h5>
                  <p>
                    Share your unique referral link with friends via email, FB,
                    or whatever works for you.
                  </p>
                  <div class="borderline mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div class="row pb-5">
          <div class="col pb-5">
            <div class="pb-5 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

      // if in mobile then add delay
      if (props.isMobile) {
        setTimeout(() => {
          router.push({ name: page });
        }, 750);
      } else {
        router.push({ name: page });
      }
    };
    return {
      redirect,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-menus {
  height: 85vh;
  overflow-y: auto;
  // background-color: red;
  .a-menu {
    padding-left: 15px;
    padding-right: 15px;
  }
}

.dashboard {
  max-width: 250px;
}

.dashboard h5 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: left;
  color: #fff;
  padding-right: 15px;
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
  position: relative;
  bottom: 20px;
  right: 25px;
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
</style>
