<template>
  <!-- account settings -->
  <div class="container-fluid account-bg m-0 p-0">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="account-settings-title">
              {{ $t("account_settings") }}
            </div>
          </div>
          <div class="col-md-6">
            <div class="account-info-member">
              {{ $t("member_since") }}:
              <span class="account-info-date"> 04/07/2021 </span>
            </div>
          </div>
        </div>
      </div>

      <!-- new -->
      <div class="container">
        <div class="row mob-reverse">
          <div class="col-md-6 my-devices">
            <div class="account-settings-inputs pt-4">{{ $t("email") }}</div>
            <input
              class="input-email-password mr-5 mt-2 pt-2 pb-2 pl-2"
              type="text"
              name="email"
              id="email"
              placeholder="username@swoshsvpn.com"
            />
            <div class="account-settings-inputs mt-2">{{ $t("password") }}</div>

            <div
              class="
                input-btn
                d-flex
                flex-row
                justify-content-between
                pt-1
                pb-1
              "
            >
              <input
                class="as-input-email"
                type="password"
                name="password"
                id="password"
              />
              <div class="link-btn mr-1 pt-1 pb-1 pr-4 pl-4">
                {{ $t("edit") }}
              </div>
            </div>
            <div class="account-settings-content mob-res-footer mt-4 pr-5">
              {{ $t("account_settings_content") }}
            </div>
          </div>
          <div class="col-md-6 p-0">
            <div
              class="
                col-md-4
                account-settings-logo
                d-flex
                flex-column
                pt-4
                pb-4
              "
            >
              <img
                src="@/assets/images/account-settings/as-free-user.png"
                class="img-fluid swoshs-logo"
                alt=""
              />
              <button class="account-settings-btn mt-3 pr-5 pl-5">
                {{ $t("free_user") }}
              </button>
              <div class="account-settings-content mt-3">
                {{ $t("upgrade_package") }}
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
.account-settings-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 3rem;
  text-align: left;
  color: #383361;
}

.account-settings-btn {
  width: auto;
  border-radius: 0.5rem;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 2rem;
  text-align: center;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  text-shadow: 0px 13px 35px rgba(44, 89, 236, 0.61);
  text-transform: uppercase;
}

.account-settings-content {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  color: #635d8d;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-settings-inputs {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  color: #383361;
}

.input-email-password {
  width: 100%;
  height: auto;
  background: #f3f7fe;
  border: 1px solid #baa4ef;
  opacity: 0.66;
  border-radius: 0.3rem;
}

.account-settings-logo {
  background: #fcfdff;
}

.my-devices {
  background: #fff;
  /* filter: drop-shadow(4px 0px 8px rgba(214, 225, 243, 0.64)); */
  border-radius: 10px;
}
/* email & password input */

.input-btn {
  width: 100%;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #baa4ef;
  opacity: 0.66;
}

.as-input-email {
  width: 100%;
  border: 1px solid transparent;
}

.link-btn {
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: #7b47fc;
}

@media screen and (max-width: 992px) {
  .mob-reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  .account-settings-title {
    text-align: center !important;
  }

  .account-info-member {
    text-align: center !important;
  }

  .account-settings-content {
    text-align: center !important;
    padding-right: 0rem !important;
  }

  .mob-res-footer {
    padding-bottom: 3rem !important;
  }

  .account-settings-inputs {
    padding-top: 0rem !important;
  }

  .mob-res-image {
    width: 10rem !important;
  }
}
</style>
