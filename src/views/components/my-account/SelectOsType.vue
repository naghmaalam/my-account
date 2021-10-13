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
      <!-- windows device -->
      <div id="modal-btn" class="col-md-2 my-devices mr-2 mb-2">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <i class="flaticon-windows downloads-icons pt-4"></i>
          <div class="downloads-title pb-1">Windows</div>
          <div class="downloads-subtitle pb-3">Support: Win7 /Win8 /Win10</div>
        </div>
      </div>

      <!-- mac device  -->
      <div id="mac-device" class="col-md-2 my-devices mr-2 mb-2">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <i class="flaticon-apple downloads-icons pt-4"></i>
          <div class="downloads-title pb-1">Mac OS</div>
          <div class="downloads-subtitle pb-3">Support: MacOS 10.12+</div>
        </div>
      </div>

      <!-- linux device -->
      <div id="linux-device" class="col-md-2 my-devices mr-2 mb-2">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <i class="flaticon-linux downloads-icons pt-4"></i>
          <div class="downloads-title pb-1">Linux</div>
          <div class="downloads-subtitle pb-3">Support: Ubuntu LTS 16.04+</div>
        </div>
      </div>

      <!-- Android device -->
      <div id="android-device" class="col-md-2 my-devices mr-2 mb-2">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <i class="flaticon-android downloads-icons pt-4"></i>
          <div class="downloads-title pb-1">Android</div>
          <div class="downloads-subtitle pb-3">Support: Android 5.0+</div>
        </div>
      </div>

      <!-- ios device -->
      <div id="ios-device" class="col-md-2 my-devices mb-2">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <i class="flaticon-macos downloads-icons pt-4"></i>
          <div class="downloads-title pb-1">iOS</div>
          <div class="downloads-subtitle pb-3">Support: iOS 11+</div>
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
