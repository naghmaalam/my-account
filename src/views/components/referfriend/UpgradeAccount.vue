<template>
  <div class="container account-content">
    <div class="row">
      <div class="my-devices col my-2 pr-3 pl-3 mt-5">
        <div class="d-flex flex-row justify-content-center">
          <div
            class="
              mob-res-margin
              d-flex
              flex-column
              align-items-center
              justify-content-center
              mt-5
              pt-5
            "
          >
            <img
              src="@/assets/images/account-settings-refer-friend/free-user-rf.png"
              alt=""
              class="rf-image"
            />

            <template v-if="actionType === 'renew'">
              <div class="devices-title pt-3 px-3">
                {{ $t("subscription_expired") }}
              </div>
              <div class="devices-subtitle px-3">
                {{ $t("subscription_expired_message") }}
              </div>
              <div class="add-device text-center mt-3 pb-5">
                <button class="devices-btn pt-2 pb-2">
                  {{ $t("renew") }}
                </button>
              </div>
            </template>
            <template v-else>
              <div class="devices-title pt-3 px-3">
                {{ $t("upgrade_account_get_reward") }}
              </div>
              <div class="devices-subtitle px-3">
                {{ $t("package_not_supported") }}
              </div>
              <div class="add-device text-center mt-3 pb-5">
                <button class="devices-btn pt-2 pb-2">
                  {{ $t("upgrade") }}
                </button>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { stateUser } from "@/hooks/useUser";

export default defineComponent({
  setup() {
    const actionType = computed(() => {
      let action = "renew";
      if (!stateUser.value.currentSubscription.isExpired) {
        if (stateUser.value.currentSubscription.title === "premium") {
          action = "renew";
        } else {
          action = "upgrade";
        }
      } else {
        if (stateUser.value.currentSubscription.title === "premium") {
          action = "renew";
        } else {
          action = "upgrade";
        }
      }
      return action;
    });

    return {
      actionType,
    };
  },
});
</script>

<style scoped>
.add-device {
  width: 100%;
  color: #ffff;
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.my-devices {
  border-radius: 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(243, 247, 254, 1) 50%
  );
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

.account-info {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
}

.rf-image {
  width: 50%;
}

.devices-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  color: #383361;
}

.devices-subtitle {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 2rem;
  text-align: center;
  color: #383361;
}

.devices-btn {
  border-radius: 10px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  color: #ffff;
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  border: 1px solid #a08beb;
  text-align: center;
  text-transform: uppercase;
}

.devices-row-line {
  width: auto;
  height: 0px;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.devices-name {
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.devices-logout {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: right;
  color: #5c7bf7;
  border: 1px solid rgba(0, 0, 0, 0);
}

@media screen and (max-width: 992px) {
  .devices-btn {
    font-size: 0.6rem;
  }

  .rf-image {
    margin-top: 8rem;
  }

  .devices-title {
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .devices-subtitle {
    padding-top: 1rem !important;
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  .my-devices {
    margin-top: 0rem !important;
  }

  .mob-res-margin {
    margin-top: 0rem !important;
  }

  .add-device {
    padding-bottom: 1rem !important;
  }
}
</style>
