<template>
  <!-- member since -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="account-info-title">{{ $t("howdy") }}</div>
      </div>
      <div class="col-md-6">
        <div class="account-info-member">
          {{ $t("member_since") }}:
          <span class="account-info-date"> 04/07/2021 </span>
        </div>
      </div>
    </div>
  </div>

  <!-- my devices, subscription, your account, support -->
  <div class="container account-content gap-3">
    <div class="row">
      <!-- my devices -->
      <div class="my-devices col-md-6 my-2 hide-mobile">
        <div class="account-title pt-3 px-3">{{ $t("my_devices") }}</div>
        <div class="row-line mt-2"></div>
        <div
          class="d-flex flex-row justify-content-around align-items-center mb-4"
        >
          <div class="recently-connected d-flex flex-column">
            <div class="account-subtitle">
              {{ $t("recently_connected") }} (6)
            </div>
            <div
              class="
                desktop-connected
                d-flex
                flex-row
                justify-content-around
                pt-4
              "
            >
              <img
                src="@/assets/images/my-account/windows.png"
                class="img-fluid"
                alt=""
              />
              <div class="d-flex flex-column">
                <div class="desktop pl-3">Desktop-MKEUF6J</div>
                <div class="account-info pl-3">
                  {{ $t("last_signin") }} : 06/26/2021
                </div>
              </div>
            </div>
          </div>
          <div class="vertical-line mt-3"></div>
          <button class="my-account-btn">{{ $t("view_more") }}</button>
        </div>
      </div>

      <!-- my devices for mobile -->
      <div class="my-devices col-md-6 my-2 show-mobile hide-desktop">
        <div class="account-title pt-3 px-3">{{ $t("my_devices") }}</div>
        <div class="row-line mt-2"></div>
        <div
          class="d-flex flex-row justify-content-around align-items-center mb-4"
        >
          <div
            class="
              recently-connected
              d-flex
              justify-content-center
              align-items-center
              flex-column
            "
          >
            <div class="account-subtitle">
              {{ $t("recently_connected") }} (6)
            </div>
            <img
              src="@/assets/images/my-account/windows.png"
              class="img-fluid mob-res-image"
              alt=""
            />
            <div class="d-flex flex-column">
              <div class="desktop pl-3">Desktop-MKEUF6J</div>
              <div class="account-info pl-3">
                {{ $t("last_signin") }} : 06/26/2021
              </div>
            </div>
            <button class="my-account-btn">{{ $t("view_more") }}</button>
          </div>
        </div>
      </div>

      <!-- Subscription -->
      <div class="subscription col-md-6 my-2">
        <div class="account-title pt-3 px-3">{{ $t("subscription") }}</div>
        <div class="row-line mt-2"></div>
        <div
          class="
            d-flex
            flex-row
            justify-content-around
            align-items-center
            mob-res-col
            mb-4
          "
        >
          <img
            src="@/assets/images/my-account/shield.png"
            class="img-fluid mob-res-image pt-4"
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
                <div class="account-subtitle pb-4">
                  {{ $t("premium_package") }}
                </div>
                <div class="d-flex flex-row mob-res-col">
                  <div class="desktop pb-3">
                    {{ $t("one_month_subscription") }}
                  </div>
                  <div class="active-btn">{{ $t("active") }}</div>
                </div>
                <button class="my-account-btn">{{ $t("view_details") }}</button>
              </div>
            </div>
          </div>
          <!-- <div class="active-btn">Active</div> -->
        </div>
      </div>
    </div>

    <!-- your account -->
    <div class="row gap-3">
      <div class="your-account col-md-6 my-2">
        <div class="account-title pt-3 px-3">{{ $t("your_account") }}</div>
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
            class="img-fluid mb-5 mob-res-image"
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
                <div class="mob-res-btn">
                  <button class="my-account-btn">
                    {{ $t("view_details") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- support -->
      <div class="support col-md-6 my-2">
        <div class="account-title pt-3 px-3">{{ $t("support") }}</div>
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
            class="img-fluid pb-4 mob-res-image"
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
                <div class="mob-res-btn">
                  <button class="my-account-btn">
                    {{ $t("contact_support") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
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

.account-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 34px;
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

.hide-desktop {
  display: none;
}

@media screen and (max-width: 992px) {
  .reverse-to-top {
    display: flex;
    flex-direction: column-reverse;
  }

  .account-info-member {
    text-align: left;
  }

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
    padding-bottom: 0rem !important;
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
}
</style>
