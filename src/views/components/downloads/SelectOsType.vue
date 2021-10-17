<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="account-downloads pt-5">Select your OS Type</div>
        <div class="my-account-downloads">
          Improve your internet protection by installing Swoshs to your devices.
        </div>
      </div>
    </div>
  </div>
  <!-- Devices Table -->
  <div class="container account-content">
    <div class="row">
      <!-- devices -->
      <!-- /////////////////////////////////////////// -->
      <div
        v-for="(device, i) in devices"
        :key="i"
        :id="device.id"
        class="col-md-2 my-devices mr-2 mb-2"
        @click="$emit('select-device', device)"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <i class="downloads-icons pt-4" :class="device.icon"></i>
          <div class="downloads-title pb-1">{{ device.title }}</div>
          <div class="downloads-subtitle pb-3">{{ device.subtitle }}</div>
        </div>
      </div>
      <!-- /////////////////////////////////////////// -->
      <!-- devices -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Device } from "@/types/Devices";

export default defineComponent({
  emits: ["select-device"],
  setup() {
    const devices: Device[] = [
      {
        id: "windows",
        title: "Windows",
        subtitle: "Support: Win7 /Win8 /Win10",
        icon: "flaticon-windows",
        fileUrl: "https://google.com",
      },
      {
        id: "apple",
        title: "iOS",
        subtitle: "Support: iOS 11+",
        icon: "flaticon-apple",
        fileUrl: "https://google.com",
      },
      {
        id: "linux",
        title: "Linux",
        subtitle: "Support: Ubuntu LTS 16.04+",
        icon: "flaticon-linux",
        fileUrl: "https://google.com",
      },
      {
        id: "android",
        title: "Android",
        subtitle: "Support: Android 5.0+",
        icon: "flaticon-android",
        fileUrl: "https://google.com",
      },
      {
        id: "macos",
        title: "Mac OS",
        subtitle: "Support: MacOS 10.12+",
        icon: "flaticon-macos",
        fileUrl: "https://google.com",
      },
    ];

    return {
      devices,
    };
  },
});
</script>

<style scoped>
.downloads-icons {
  color: #81afde;
  font-size: 3rem;
}

.downloads-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #383361;
}

.downloads-subtitle {
  font-family: Poppins;
  font-weight: 300;
  font-size: 9px;
  text-align: center;
  color: #383361;
}

.account-downloads {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: left;
  color: #383361;
}

.my-account-downloads {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1.5rem;
  text-align: left;
  color: #383361;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.my-devices {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
  cursor: pointer;
}

.support {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.account-downloads {
  padding-top: 1rem !important;
}
</style>
