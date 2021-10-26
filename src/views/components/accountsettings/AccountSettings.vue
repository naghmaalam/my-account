<template>
  <!-- account settings -->
  <div class="container-fluid account-bg mt-5 p-0">
    <div class="container mb-3">
      <div class="row">
        <div class="col-md-6">
          <div class="account-settings-title">{{ $t("account_settings") }}</div>
        </div>
        <div class="col-md-6">
          <div class="account-info-member text-right">
            <h1>{{ $t("member_since") }}:</h1>
            <span class="account-info-date">
              {{ memberDate }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- new -->
    <div class="container">
      <div class="row mob-reverse">
        <div class="col-md-8 my-devices">
          <div class="account-settings-inputs pt-4">{{ $t("email") }}</div>
          <input
            class="input-email-password mr-5 mt-2 pt-2 pb-2 pl-2"
            style="color: var(--swoshs-color2)"
            type="text"
            name="email"
            id="email"
            placeholder="username@swoshsvpn.com"
            :value="stateUser.email"
            disabled
            readonly
          />
          <div class="account-settings-inputs mt-2">{{ $t("password") }}</div>

          <div
            class="input-btn d-flex flex-row justify-content-between pt-1 pb-1"
          >
            <div class="d-flex align-items-center ml-4">************</div>
            <div
              class="link-btn mr-1 pt-1 pb-1 pr-4 pl-4"
              @click="showUpdatePassword = true"
            >
              {{ $t("edit") }}
            </div>
          </div>
          <div class="account-settings-content mob-res-footer mt-4 pr-5">
            {{ $t("account_settings_content") }}
          </div>
        </div>
        <div class="col-md-4 px-0">
          <div class="account-settings-logo d-flex flex-column p-5">
            <img
              src="@/assets/images/account-settings/Swoshs-logo.png"
              class="img-fluid swoshs-logo"
              alt=""
            />
            <template v-if="!isExpired && isPremium">
              <button class="account-settings-btn mt-3 pr-5 pl-5">
                {{ $t("premium") }}
              </button>
            </template>
            <template v-else-if="!isExpired && !isPremium">
              <button class="account-settings-btn mt-3 pr-5 pl-5">
                {{ $t("free_user") }}
              </button>
              <div class="account-settings-content mt-3 text-center">
                <span style="color: red">*</span>
                {{ $t("upgrade_package") }}
              </div>
            </template>
            <template v-if="isExpired && isPremium">
              <button class="expired-btn account-settings-btn mt-3 pr-5 pl-5">
                {{ $t("premium") }}
              </button>
              <div class="account-settings-content mt-3 text-center">
                <span style="color: red">*</span>
                {{ $t("subscription_expired_message") }}
              </div>
            </template>
            <template v-else-if="isExpired && !isPremium">
              <button class="expired-btn account-settings-btn mt-3 pr-5 pl-5">
                {{ $t("free_user") }}
              </button>
              <div class="account-settings-content mt-3 text-center">
                <span style="color: red">*</span>
                {{ $t("subscription_expired_message") }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <teleport to="body">
      <UpdatePassword v-model:open="showUpdatePassword" />
    </teleport>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import { stateUser } from "@/hooks/useUser";
import { months } from "@/modules/utils";

import UpdatePassword from "@/views/components/accountsettings/changepassword/UpdatePassword.vue";

export default defineComponent({
  components: {
    UpdatePassword,
  },
  setup() {
    const showUpdatePassword = ref(false);
    const memberDate = computed(() => {
      const date = new Date(stateUser.value.me?.createdAt as string);

      if (date.toString() === "Invalid Date") return "- / - / -";
      else
        return `${date.getFullYear()} / ${
          months[date.getMonth()]
        } / ${date.getDate()} `;
    });

    const isPremium = computed(() => {
      return stateUser.value.currentSubscription.title === "premium";
    });
    const isExpired = computed(() => {
      return stateUser.value.currentSubscription.isExpired;
    });

    return {
      stateUser,
      showUpdatePassword,
      memberDate,
      isPremium,
      isExpired,
    };
  },
});
</script>

<style lang="scss" scoped>
.account-info-member {
  display: flex;
  justify-content: end;
  align-content: center;
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
////////////////////////////////////////////

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
  border-radius: 10px 0 0 10px;
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
  cursor: pointer;
}

.expired-btn {
  background: var(--swoshs-linear-gradient2);
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
