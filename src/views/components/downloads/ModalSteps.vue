<template>
  <Fade2>
    <div class="modal" v-if="open">
      <div class="modal-backdrop"></div>
      <Fade>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="download-modal-header pr-5">
              <div class="windowClose close" @click="closeModal">
                <i class="fas fa-times"></i>
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
                <div class="circle-icon circle-check">
                  <i class="fas fa-check"></i>
                </div>
                <div class="circle-title">{{ $t("select_os") }}</div>
                <div class="circle-line"></div>
                <div class="circle-icon circle-2">2</div>
                <div class="circle-title">{{ $t("download") }}</div>
                <div class="circle-line"></div>
                <div class="circle-icon circle-3">3</div>
                <div class="circle-title">{{ $t("install") }}</div>
                <div class="circle-line"></div>
                <div class="circle-icon circle-4">4</div>
                <div class="circle-title">{{ $t("done") }}</div>
              </div>
            </div>

            <div class="modal-body pt-5 pb-5 pr-5">
              <div class="d-flex flex-row justify-content-around">
                <div class="device-image ml-4">
                  <div
                    class="
                      d-flex
                      flex-column
                      justify-content-center
                      align-items-center
                      py-3
                      px-4
                    "
                  >
                    <i class="downloads-icons pt-1" :class="device?.icon"></i>
                    <div class="downloads-title pb-1">{{ device?.title }}</div>
                  </div>
                </div>
                <div class="mt-3 pl-5">
                  <div class="device-modal-title">
                    {{ $t("download_for") }} {{ device?.title }}
                  </div>
                  <div class="device-modal-subtitle">
                    * {{ $t("your_privacy") }}
                  </div>
                </div>
              </div>
            </div>

            <div class="download-modal-footer pr-5">
              <div class="d-flex flex-row justify-content-around pb-4 ml-4">
                <div class="pl-3 mt-0 pt-4">
                  <div class="device-modal-title">
                    {{ $t("ready_to_download") }}
                  </div>
                  <div class="device-modal-subtitle p-1">
                    <span
                      v-html="$t('send_link_email', { email: stateUser.email })"
                    ></span>
                  </div>
                </div>
                <div class="device-download-btns pt-4">
                  <a
                    :href="device?.fileUrl"
                    target="_blank"
                    @click="isDownloadHereShown = true"
                  >
                    <div
                      class="device-download-btn pt-3 pb-3 pl-4 pr-4"
                      style="text-transform: uppercase"
                    >
                      {{ $t("download") }}
                    </div>
                  </a>
                  <a href="#">
                    <div
                      class="device-sendemail-btn mt-2 pt-3 pb-3 pl-4 pr-4"
                      style="text-transform: uppercase"
                    >
                      {{ $t("send_email") }}
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </Fade2>
  <Fade>
    <div class="download-here" v-if="isDownloadHereShown">
      <div class="dtp-arrow">
        <div class="dtp-arrow-header"></div>
        <div class="dtp-arrow-body">
          <p>Click this file to start installing <strong>Swoshs VPN</strong></p>
        </div>
        <div class="dtp-arrow-footer">
          <i class="fas fa-angle-double-down"></i>
        </div>
      </div>
    </div>
  </Fade>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";

import { stateUser } from "@/hooks/useUser";

import { Device } from "@/types/Devices";

import Fade from "@/views/components/transitions/Fade.vue";
import Fade2 from "@/views/components/transitions/Fade2.vue";

export default defineComponent({
  components: {
    Fade,
    Fade2,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    device: {
      type: Object as PropType<Device>,
    },
  },
  setup(props, context) {
    const isDownloadHereShown = ref(false);
    const closeModal = () => {
      isDownloadHereShown.value = false;
      context.emit("update:open", false);
    };

    onMounted(() => {
      isDownloadHereShown.value = false;
      console.log("props.device = ", props.device);
    });

    return {
      stateUser,
      closeModal,
      isDownloadHereShown,
    };
  },
});
</script>

<style lang="scss" scoped>
.download-here {
  // position: fixed;
  // z-index: 1031;
  // bottom: 0;
  // Arrow on Download Thank You page/popup

  .dtp-arrow {
    width: 160px;
    height: auto;
    position: absolute;
    left: 37px;
    bottom: 0;
    display: block;
    z-index: 9000;
    opacity: 0;
    will-change: transform;

    background: var(--swoshs-linear-gradient);
    border-radius: 10px;

    animation: animateArrow0 500ms ease-in-out 3000ms 1 normal,
      animateArrow1 2500ms ease-in-out 3500ms 1 normal,
      animateArrow2 2000ms ease-in-out 6000ms infinite normal;

    .dtp-arrow-header {
      background: transparent
        url("~@/assets/images/account-settings/Swoshs-logo.png") center center
        no-repeat;
      background-size: contain;
      height: 104px;
      position: relative;
      bottom: -1px;
      margin: 25px;
    }

    .dtp-arrow-body {
      color: #fff;
      background: transparent;
      padding: 15px;

      p {
        margin-bottom: 0;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 2px;
        text-transform: uppercase;
        text-align: center;
        font-weight: normal;
      }
    }

    .dtp-arrow-footer {
      // background: transparent
      //   url("../i/v2/pages/download-thank-you/popup-arrow-footer.png") 50% 50%
      //   no-repeat;
      height: 89px;
      position: relative;
      top: -1px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 3rem;
      padding-bottom: 10px;
    }
  }
}

@keyframes animateArrow0 {
  0% {
    bottom: 10px;
    opacity: 0;
  }
  100% {
    bottom: 500px;
    opacity: 0;
  }
}

@keyframes animateArrow1 {
  0% {
    bottom: 500px;
    opacity: 0;
  }
  33% {
    bottom: 10px;
    opacity: 1;
  }
  60% {
    bottom: 200px;
    opacity: 1;
  }
  100% {
    bottom: 10px;
    opacity: 1;
  }
}

@keyframes animateArrow2 {
  0% {
    bottom: 10px;
    opacity: 1;
  }
  50% {
    bottom: 100px;
    opacity: 1;
  }
  100% {
    bottom: 10px;
    opacity: 1;
  }
}

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
  white-space: nowrap;
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

.modal ::v-deep() {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  z-index: 1031;

  .modal-backdrop {
    background: #000000c4;
  }

  .modal-content {
    margin: 10% auto;
    // width: 40%;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
    z-index: 1040;
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

  .circles {
    .circle-icon {
      width: 28px;
      height: 28px;
      min-width: 28px;
      min-height: 28px;
      line-height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circle-title {
      white-space: nowrap;
    }
  }

  .device-image {
    box-shadow: 0px 13px 19px rgba(214, 225, 243, 0.64);
    background: #fff;
    border-radius: 20px;
    min-width: 130px;
  }

  .device-modal-title {
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: inherit;
    text-align: left;
    color: #383361;
    margin-bottom: 0.5rem;
    padding-right: 1rem !important;
  }

  .device-modal-subtitle {
    font-family: Poppins;
    font-weight: 300;
    font-size: 11px;
    line-height: 17px;
    text-align: left;
    color: #383361;
  }

  .device-download-btn {
    background: linear-gradient(#a215ff 0%, #5f29ff 100%);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
  }

  .device-sendemail-btn {
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
    right: -1.5rem;
    top: -1.5rem;

    color: #ccc;
    float: right;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.44) !important;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
  }
  .checked-icon {
    text-align: center;
    color: #fff;
    // background-color: green;
  }

  .scan-container {
    width: 15rem;
    height: 8rem;
    background: #fff;
    border-radius: 5px;
  }

  a {
    color: inherit;
  }
  b,
  strong {
    font-weight: bold;
  }
}

/* dont display below Medium Devices, Desktops */
@media only screen and (max-width: 992px) {
  .download-here {
    display: none !important;
  }
}
</style>
