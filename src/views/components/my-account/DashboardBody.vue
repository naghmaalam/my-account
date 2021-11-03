<template>
  <!-- member since -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="account-info-title text-center text-md-left">
          {{ $t("howdy") }}
        </div>
      </div>
      <div class="col-md-6">
        <div
          class="
            account-info-member
            text-center text-md-right
            d-flex
            justify-content-center justify-content-md-end
            align-content-center
          "
        >
          <h1>{{ $t("member_since") }}:</h1>
          <span class="account-info-date">
            {{ memberDate }}
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- my devices, subscription, your account, support -->
  <div class="container account-content gap-3">
    <div class="row">
      <!-- my devices -->

      <div class="col-md-6 p-0">
        <div class="panel my-devices m-2 p-4">
          <div class="account-title">{{ $t("my_devices") }}</div>
          <div class="row-line mt-2"></div>
          <div
            class="
              d-flex
              flex-column
              justify-content-between
              align-items-center
              flex-md-row
            "
            v-if="stateUser.devices.connected"
          >
            <div class="recently-connected d-flex flex-column m-2">
              <div class="account-subtitle py-3 p-md-3">
                {{ $t("recently_connected") }}
                ({{ stateUser.devices.connected }})
              </div>
              <div
                class="
                  desktop-connected
                  d-flex
                  flex-row
                  justify-content-around
                  pt-2
                "
              >
                <!-- <img
                  src="@/assets/images/my-account/windows.png"
                  class="img-fluid"
                  alt=""
                /> -->
                <div
                  class="
                    device-icon
                    p-3
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <i :class="getIcon(recentOs)"></i>
                </div>
                <div
                  class="
                    d-flex
                    flex-column
                    align-items-start
                    justify-content-center
                  "
                >
                  <div class="desktop pl-3 text-capitalize">
                    {{ recentDevice }}
                  </div>
                  <div class="account-info pl-3">
                    {{ $t("last_signin") }} : {{ lastSignin }}
                  </div>
                </div>
              </div>
            </div>
            <div class="vertical-line mt-3 d-none d-md-block"></div>
            <button class="my-account-btn m-4" @click="redirect('devices')">
              {{ $t("view_more") }}
            </button>
          </div>

          <!--start: when no devices connected..................... -->
          <div v-else>
            <div
              class="
                d-flex
                flex-column
                justify-content-between
                align-items-center
                flex-md-row
              "
            >
              <div class="recently-connected d-flex flex-column m-2">
                <div class="account-subtitle p-md-3">No Devices</div>
                <div
                  class="
                    desktop-connected
                    d-flex
                    flex-row
                    justify-content-around
                    pt-2
                  "
                >
                  <div
                    class="
                      d-flex
                      flex-column
                      align-items-start
                      justify-content-center
                    "
                  >
                    <div class="devices-info">
                      Currently, none of your devices are protected by Swoshs.
                      Let's connect and protect your first device — just click
                      Install.
                    </div>
                  </div>
                </div>
              </div>
              <div class="vertical-line mt-3 d-none d-md-block"></div>
              <div class="ml-2">
                <button
                  class="my-account-btn m-4 ml-5"
                  @click="redirect('checkout')"
                >
                  Get Swoshs VPN
                </button>
              </div>
            </div>
          </div>
          <!-- end: when no devices connected................ -->
        </div>
      </div>

      <!-- Subscription -->
      <div class="col-md-6 p-0">
        <div class="panel subscription m-2 p-4">
          <div class="account-title">{{ $t("subscription") }}</div>
          <div class="row-line mt-2"></div>
          <div
            class="
              d-flex
              flex-column flex-md-row
              justify-content-around
              align-items-center
              position-relative
            "
          >
            <img
              src="@/assets/images/my-account/shield.png"
              class="img-fluid pt-4"
              alt=""
            />
            <div class="recently-connected d-flex flex-column">
              <div
                class="desktop-connected d-flex flex-row justify-content-around"
              >
                <div class="d-flex flex-column">
                  <div
                    class="
                      account-subtitle
                      py-2
                      pt-md-4
                      py-md-3
                      text-capitalize
                    "
                  >
                    {{ stateUser.currentSubscription.title }}
                  </div>
                  <div class="d-flex flex-row">
                    <div class="desktop pb-3 pb-md-3">
                      {{ stateUser.currentSubscription.plan.title }}
                      {{ $t("subscription") }}
                    </div>
                  </div>
                  <button
                    class="my-account-btn"
                    @click="redirect('subscription')"
                  >
                    {{ $t("view_details") }}
                  </button>
                </div>
              </div>
            </div>
            <div class="position-relative"></div>
            <div
              v-if="stateUser.currentSubscription.isExpired"
              class="status-btn inactive-btn"
            >
              {{ $t("inactive") }}
            </div>
            <div v-else class="status-btn active-btn">{{ $t("active") }}</div>
          </div>
        </div>
      </div>

      <div class="col-md-6 p-0">
        <div class="panel your-account m-2 p-4">
          <div class="account-title">{{ $t("your_account") }}</div>
          <div class="row-line mt-2"></div>
          <div
            class="
              d-flex
              flex-row
              justify-content-around
              align-items-center
              mob-res-col
            "
          >
            <img
              src="@/assets/images/my-account/personal-computer.png"
              class="img-fluid m-3"
              alt=""
            />

            <div class="recently-connected d-flex flex-column">
              <div
                class="
                  desktop-connected
                  d-flex
                  flex-row
                  justify-content-around
                  pt-4
                  pb-3
                "
              >
                <div class="d-flex flex-column">
                  <div class="account-subtitle pl-3">
                    {{ $t("account_section") }}
                  </div>
                  <div class="account-info pb-4 mt-3 pl-3">
                    {{ $t("your_account_info") }}
                  </div>
                  <div
                    class="
                      pb-3
                      px-2
                      d-flex
                      justify-content-center justify-content-md-start
                    "
                  >
                    <button class="my-account-btn" @click="redirect('account')">
                      {{ $t("view_details") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- support -->
      <div class="col-md-6 p-0">
        <div class="panel support m-2 p-4">
          <div class="account-title">{{ $t("support") }}</div>
          <div class="row-line mt-2"></div>
          <div
            class="
              d-flex
              flex-row
              justify-content-around
              align-items-center
              mob-res-col
            "
          >
            <img
              src="@/assets/images/my-account/life-saver.png"
              class="img-fluid m-3"
              alt=""
            />
            <div class="recently-connected d-flex flex-column">
              <div
                class="
                  desktop-connected
                  d-flex
                  flex-row
                  justify-content-around
                  pt-4
                "
              >
                <div class="d-flex flex-column">
                  <div class="account-subtitle pl-3">{{ $t("need_help") }}</div>
                  <div class="account-info pb-4 mt-3 pl-3">
                    {{ $t("support_info") }}
                  </div>
                  <a href="http://swoshsvpn.com/contact.html">
                    <div
                      class="
                        pb-3
                        px-2
                        d-flex
                        justify-content-center justify-content-md-start
                      "
                    >
                      <button class="my-account-btn">
                        {{ $t("contact_support") }}
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { stateUser } from "@/hooks/useUser";
import { months } from "@/modules/utils";
import { getIcon } from "@/modules/utils";

import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const recentDevice = computed(() => {
      return stateUser.value.devices.list.length
        ? stateUser.value.devices.list[0].name
        : "-";
    });
    const recentOs = computed(() => {
      return stateUser.value.devices.list.length
        ? stateUser.value.devices.list[0].type
        : "-";
    });
    const memberDate = computed(() => {
      const date = new Date(
        stateUser.value.dateRegistered as unknown as string
      );

      if (date.toString() === "Invalid Date") return "- / - / -";
      else
        return `${date.getFullYear()} / ${
          months[date.getMonth()]
        } / ${date.getDate()} `;
    });

    const redirect = (page: string) => {
      router.push({ name: page });
    };

    return {
      stateUser,
      memberDate,
      redirect,
      recentDevice,
      lastSignin: "---",
      getIcon,
      recentOs,
    };
  },
});
</script>

<style lang="scss" scoped>
.panel {
  min-height: 300px;
}

.account-info-member {
  // display: flex;
  // justify-content: end;
  // align-content: center;
  h1 {
    font-size: 0.7rem;
    font-weight: bold;
    color: gray;
    margin: 0 10px;
    line-height: inherit;
    display: flex;
    align-items: center;
  }
  .account-info-date {
    font-size: 1rem;
    font-weight: bold;
    color: var(--swoshs-black);
  }
}

.account-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 34px;
  text-align: left;
  color: var(--swoshs-black);
  margin: 0px 20px 20px 20px;
}

.status-btn {
  position: absolute;
  top: 20px;
  right: 0;
  width: 101px;
  height: 30px;
  border-radius: 15px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0);
}

.active-btn {
  color: var(--swoshs-green);
  background: var(--swoshs-light-green);
}

.inactive-btn {
  color: var(--swoshs-red);
  background: var(--swoshs-light-red);
}

.device-icon {
  font-size: 3rem;
  color: #fff;
  background: var(--swoshs-linear-gradient);
  width: 80px;
  height: 80px;
  border-radius: 10px;
  opacity: 0.7;
}

///////////////////////////////////////

.my-devices {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
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

.my-account-btn {
  width: 161.68px;
  height: 43.47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #724bfe;
}

.account-info-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 50px;
  text-align: left;
  color: #383361;
}

.row-line {
  width: 100%;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.account-subtitle {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
  white-space: nowrap;
}

.account-info {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
}

.desktop {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 20px;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
  opacity: 0.5;
}

.hide-desktop {
  display: none;
}

.devices-info {
  font-family: Poppins;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1rem;
}

@media screen and (max-width: 992px) {
  .reverse-to-top {
    display: flex;
    flex-direction: column-reverse;
  }

  // .account-info-member {
  //   text-align: left;
  // }

  .mob-res-col {
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .mob-res-image {
    width: 4rem;
    margin-bottom: 0.2rem !important;
  }

  .mob-device-img {
    padding-top: 1.5rem !important;
  }

  .account-title {
    text-align: center;
  }

  .account-subtitle {
    text-align: center;
  }

  .mob-acct-subtitle {
    padding-top: 1.5rem !important;
  }

  .mob-res-btn {
    text-align: center;
    margin-top: 0.2rem;
  }

  .hide-mobile {
    display: none;
  }

  .show-mobile {
    display: block;
  }

  .show-desktop {
    display: block;
  }

  .mob-btn {
    margin-top: 1.5rem !important;
  }
  .desktop-connected {
    padding-top: 0rem !important;
  }

  .mob-res-padding {
    padding-top: 1rem !important;
  }

  .mob-res-margin {
    margin-top: 1rem !important;
  }
}
</style>
