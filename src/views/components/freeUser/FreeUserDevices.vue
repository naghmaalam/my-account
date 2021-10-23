<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="account-info-title">{{ $t("devices") }}</div>
      </div>
    </div>
  </div>
  <div class="container account-content">
    <div class="row">
      <div class="my-devices col-lg-6 my-2 pr-3 pl-3">
        <div class="d-flex flex-row justify-content-between">
          <div class="d-flex flex-column">
            <div class="devices-title pt-3 px-3">
              {{ $t("free_user_devices_title") }}
            </div>
            <div class="devices-subtitle px-3">
              {{ $t("devices_subtitle") }}
            </div>
          </div>
          <div class="add-device mt-3">
            <button class="devices-btn pr-3 pl-3 pt-2 pb-2">
              {{ $t("upgrade") }}
            </button>
          </div>
        </div>
        <div class="devices-row-line mt-2"></div>
        <!-- Galaxy  -->
        <div class="d-flex flex-row justify-content-between pt-2 pb-3">
          <div class="devices-name d-flex flex-row">
            <i class="flaticon-android pl-3 pr-3"></i>
            <div>Galaxy A80</div>
          </div>
          <div class="devices-logout d-flex flex-row">
            <i class="flaticon-logout pr-2 pt-1"></i>
            <div>Logout</div>
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
}

@media screen and (max-width: 992px) {
  .devices-btn {
    font-size: 0.6rem;
  }
}
</style>
