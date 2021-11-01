<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="account-info-title">
          {{ $t("devices") }}
        </div>
      </div>
    </div>
  </div>
  <div class="container account-content">
    <div class="row">
      <div class="my-devices col-lg-6 my-2 pr-3 pl-3">
        <div class="d-flex flex-row justify-content-between">
          <div class="d-flex flex-column">
            <div class="devices-title pt-3 px-3">
              {{
                $t("devices_title", { deviceQty: stateUser.devices.allowed })
              }}
            </div>
            <div class="devices-subtitle px-3">
              {{ $t("devices_subtitle") }}
            </div>
          </div>
          <a href="#" @click.prevent="$router.push({ name: 'checkout' })">
            <div class="add-device mt-3">
              <button class="devices-btn pr-3 pl-3 pt-2 pb-2">
                {{ $t("add_device") }}
              </button>
            </div>
          </a>
        </div>
        <div class="devices-row-line mt-2"></div>
        <template v-if="deviceList.length > 0">
          <transition-group name="list" tag="div">
            <template v-for="(item, i) in deviceList" :key="`i_${i}`">
              <div class="list-item d-flex flex-column">
                <div class="d-flex flex-row justify-content-between pt-2">
                  <div class="devices-name d-flex flex-row">
                    <div class="px-3 device-icon">
                      <i :class="getIcon(item.type)"></i>
                    </div>

                    <div>{{ item.name }}</div>
                  </div>
                  <div
                    class="
                      devices-logout
                      d-flex
                      flex-row
                      justify-content-center
                      align-items-center
                      mr-1
                    "
                    @click="logoutDevice(item, i)"
                  >
                    <span
                      v-if="isLoading[i]"
                      class="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <i class="flaticon-logout pr-2 pt-1"></i>
                    <div>Logout</div>
                  </div>
                </div>
                <div class="devices-row-line mt-2"></div>
              </div>
            </template>
          </transition-group>
        </template>
        <template v-else>
          <div
            class="
              d-flex
              flex-column
              justify-content-center
              align-items-center
              mt-5
            "
          >
            <img
              src="@/assets/images/subscription/empty.png"
              alt="order-history-empty"
              class="pb-3"
            />
          </div>
        </template>
        <br />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { stateUser, useUser } from "@/hooks/useUser";
import { getIcon } from "@/modules/utils";

import { LoggedInDevice } from "@/types/Devices";

export default defineComponent({
  setup() {
    const user = useUser();

    const isLoading = ref<boolean[]>([]);

    const testList = ref<LoggedInDevice[]>([...stateUser.value.devices.list]);

    const deviceList = computed(() => {
      return stateUser.value.devices.list;
    });

    const logoutDevice = async (device: LoggedInDevice, i: number) => {
      console.log(device, i);
      isLoading.value[i] = true;
      let success = await user.do.device.logout(device.id);
      if (success) success = await user.do.account.refreshStorage();
      isLoading.value[i] = false;

      // setTimeout(() => {
      //   isLoading.value[i] = false;
      //   testList.value = testList.value.filter((item) => {
      //     return item.id !== device.id;
      //   });
      // }, 1000);
    };

    return {
      stateUser,
      logoutDevice,
      getIcon,
      deviceList,
      testList,
      isLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-device {
  width: 100%;
  text-align: right;
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.my-devices {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
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

.devices-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 20px;
  text-align: left;
  color: #383361;
}

.devices-subtitle {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.6rem;
  line-height: 0.9rem;
  text-align: left;
  color: #383361;
}

.devices-btn {
  border-radius: 10px;
  background: #fff;
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: left;
  color: #724bfe;
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
  cursor: pointer;
}

.device-icon {
  width: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
}

@media screen and (max-width: 992px) {
  .devices-btn {
    font-size: 0.6rem;
  }
}

// .list-item {
//   transition: all 10.3s ease;
//   display: flex;
// }

// .list-enter-from,
// .list-leave-to {
//   opacity: 0;
//   transform: translateX(10px);
// }

// .list-leave-active {
//   position: absolute;
// }

// .list-move {
//   transition: transform 10.3s ease;
// }
</style>
