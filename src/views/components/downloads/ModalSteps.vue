<template>
  <Fade2>
    <div class="modal" v-if="open">
      <div class="modal-backdrop"></div>
      <Fade>
        <div class="modal-content">
          <div class="download-modal-header pr-5">
            <div class="windowClose close" @click="closeModal">
              <!-- <i class="icon-size flaticon-cancel"></i> -->
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
                <!-- <i class="checked-icon flaticon-checked"></i> -->
                <i class="fas fa-check"></i>
              </div>
              <div class="circle-title">Select OS</div>
              <div class="circle-line"></div>
              <div class="circle-icon circle-2">2</div>
              <div class="circle-title">Download</div>
              <div class="circle-line"></div>
              <div class="circle-icon circle-3">3</div>
              <div class="circle-title">Install</div>
              <div class="circle-line"></div>
              <div class="circle-icon circle-4">4</div>
              <div class="circle-title">Done</div>
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
                  <i class="downloads-icons pt-1" :class="device.icon"></i>
                  <div class="downloads-title pb-1">{{ device.title }}</div>
                </div>
              </div>
              <div class="mt-3 pl-5">
                <div class="device-modal-title">
                  Download SwoshVPN for {{ device.title }}
                </div>
                <div class="device-modal-subtitle">
                  * Your privacy and Internet security can be protected when the
                  device is connected. It is recommended to keep the connection
                  status
                </div>
              </div>
            </div>
          </div>

          <div class="download-modal-footer pr-5">
            <div class="d-flex flex-row justify-content-around pb-4 ml-4">
              <div class="pl-3 mt-0 pt-4">
                <div class="device-modal-title">
                  Swoshs VPN is ready to download
                </div>
                <div class="device-modal-subtitle pt-3">
                  You can also send a link to your address
                  <b> {{ stateUser.email }} </b> where you can download the
                  Swoshs VPN.
                </div>
              </div>
              <div class="device-download-btns pt-4">
                <a href="#">
                  <div class="device-download-btn pt-3 pb-3 pl-4 pr-4">
                    download
                  </div>
                </a>
                <a href="#">
                  <div class="device-sendemail-btn mt-2 pt-3 pb-3 pl-4 pr-4">
                    Send Email
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </Fade2>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";

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
    const closeModal = () => {
      context.emit("update:open", false);
    };

    onMounted(() => {
      console.log("props.device = ", props.device);
    });
    return {
      stateUser,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
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

.modal {
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
    width: 40%;
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
    line-height: 34px;
    text-align: left;
    color: #383361;
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
</style>
