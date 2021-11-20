<template>
  <div id="my-modal" class="modal">
    <div class="modal-content">
      <div class="download-modal-header pr-5">
        <div class="windowClose close">
          <i class="icon-size flaticon-cancel"></i>
        </div>
        <div
          class="
            circles
            d-flex
            flex-row
            justify-content-center
            align-items-center
          "
        >
          <div class="circle-check">
            <i class="checked-icon flaticon-checked"></i>
          </div>
          <div class="circle-title">{{ $t("select_os") }}</div>
          <div class="circle-line"></div>
          <div class="circle-2">2</div>
          <div class="circle-title">{{ $t("download") }}</div>
          <div class="circle-line"></div>
          <div class="circle-3">3</div>
          <div class="circle-title">{{ $t("install") }}</div>
          <div class="circle-line"></div>
          <div class="circle-4">4</div>
          <div class="circle-title">{{ $t("done") }}</div>
        </div>
      </div>
      <div class="modal-body pt-5 pb-5 pr-5">
        <div class="d-flex flex-row justify-content-around">
          <div class="windows-modal-download ml-5">
            <div class="col my-devices">
              <div
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                "
              >
                <i class="flaticon-windows downloads-icons pt-4"></i>
                <div class="downloads-title pb-1">{{ $t("windows") }}</div>
              </div>
            </div>
          </div>
          <div class="mt-3 pl-5">
            <div class="windows-modal-title">
              {{ $t("download_swoshs_for_windows") }}
            </div>
            <div class="windows-modal-subtitle">
              {{ $t("windows_modal_info") }}
            </div>
          </div>
        </div>
      </div>
      <div class="download-modal-footer pr-5">
        <div class="d-flex flex-row justify-content-around pb-4 ml-4">
          <div class="pl-3 mt-0 pt-4">
            <div class="windows-modal-title">
              {{ $t("ready_to_download") }}
            </div>
            <div class="windows-modal-subtitle pt-3">
              {{ $t("send_link_email") }}
              <b> user@domain.com </b> {{ $t("send_link_email2") }}
            </div>
          </div>
          <div class="windows-download-btns pt-4">
            <div class="windows-download-btn pt-3 pb-3 pl-4 pr-4">
              {{ $t("download") }}
            </div>
            <div class="windows-sendemail-btn mt-2 pt-3 pb-3 pl-4 pr-4">
              {{ $t("send_email") }}
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

:root {
  --modal-duration: 1s;
  --modal-color: #494f53;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background: rgba(48, 55, 66, 0.9);
  opacity: 0.88;
}

.modal-content {
  margin: 10% auto;
  width: 40%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  animation-name: modalopen;
  animation-duration: var(--modal-duration);
}

.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.download-modal-header {
  padding: 1.5rem;
  background: #fff;
}

.modal-body {
  background: #f3f7fe;
  z-index: 2;
}

.download-modal-footer {
  background: #f3f7fe;
  color: #fff;
  text-align: center;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border-top: 1px solid #dee2e6;
}

.close {
  color: #ccc;
  float: right;
  font-size: 30px;
  color: #fff;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-steps {
  width: 100%;
  background-color: #fff;
}

.circle-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 11px;
  text-align: left;
  color: #383361;
}

.circle-line {
  width: 92.36px;
  height: 0px;
  background: transparent;
  border: 1px solid #bccfec;
}

.circle-check {
  width: 29px;
  height: 28px;
  background: #4ad395;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  color: #fff;
}

.circle-2 {
  width: 28.55px;
  height: 28.55px;
  background: #087bcd;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.circle-3 {
  width: 28.55px;
  height: 28.55px;
  background: #b9cbdb;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.circle-4 {
  width: 28.55px;
  height: 28.55px;
  border-radius: 50%;
  text-align: center;
  background: #bccedf;
  color: #fff;
}

.circles * + * {
  margin-left: 0.7rem;
}

.windows-modal-download {
  width: 12rem;
  height: 113px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 13px 19px rgba(214, 225, 243, 0.64);
}

.windows-modal-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.windows-modal-subtitle {
  font-family: Poppins;
  font-weight: 300;
  font-size: 11px;
  line-height: 17px;
  text-align: left;
  color: #383361;
}

.windows-download-btn {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
}

.windows-sendemail-btn {
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  color: #a115ff;
  font-size: 1rem;
}

.close {
  position: absolute;
  right: -2rem;
  width: 4rem;
  top: -2.5rem;
}

.checked-icon {
  text-align: center;
  color: #fff;
  background-color: green;
}

.scan-container {
  width: 15rem;
  height: 8rem;
  background: #fff;
  border-radius: 5px;
}
</style>
