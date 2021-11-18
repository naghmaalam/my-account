<template>
  <section class="container-fluid content-word">
    <div class="container">
      <div class="row numb-group">
        <h4 class="numb2 media-num">02</h4>
        <p class="payment-selection media-title">
          {{ $t("customize_devices") }}
        </p>
      </div>
      <div class="row">
        <div class="container">
          <div class="accordion-wrapper">
            <div class="accordion" data-accordion="close">
              <div class="accordion-header">
                <div
                  class="font-awesome mb-2"
                  @click="devices.show = !devices.show"
                >
                  <div v-if="devices.show">
                    <i class="fas fa-chevron-circle-down"></i>
                  </div>

                  <div v-else>
                    <i class="fas fa-chevron-circle-up"></i>
                  </div>
                </div>
              </div>
              <FadeHeight>
                <div class="accordion-body" v-if="devices.show">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-md-8 text-center">
                        <div
                          style="
                            border: 1px solid #c1c1c1;
                            border-radius: 20px;
                            padding: 30px;
                          "
                        >
                          <h6 class="mb-3">
                            {{ $t("number_of_devices_connect") }}
                          </h6>
                          <div class="input-group media-input-group">
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="btn btn-default btn-number custom-inc"
                                :class="{ disabled: !devices.isQtyDynamic }"
                                :disabled="!devices.isQtyDynamic"
                                @click="addRemDevices('rem')"
                              >
                                <i
                                  class="fa fa-minus media-fa-minus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </span>
                            <span class="word-devices media-word-devices">
                              {{ devices.allowedQuantity + devices.quantity }}
                              {{ $t("devices") }}
                            </span>
                            <span class="input-group-btn">
                              <button
                                type="button"
                                class="btn btn-default btn-number custom-inc"
                                :class="{ disabled: !devices.isQtyDynamic }"
                                :disabled="!devices.isQtyDynamic"
                                @click="addRemDevices('add')"
                              >
                                <i
                                  class="fa fa-plus media-fa-plus"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </span>
                          </div>
                          <h1 class="text-center media-price mt-3">
                            {{ devices.currency + fmtCurr(devices.price) }}
                          </h1>
                          <h6 class="mb-3">
                            {{ devices.pricePerDeviceText }}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeHeight>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, watch } from "vue";
// import { log } from "@/modules/debug";
import { fmtCurr } from "@/modules/utils";

import { ComponentPlan } from "@/types/Plans";
import { ComponentDevice } from "@/types/Devices";

import FadeHeight from "@/views/components/transitions/FadeHeight.vue";

type Operation = "add" | "rem";

export default defineComponent({
  components: {
    FadeHeight,
  },
  emits: ["update:devices"],
  props: {
    selectedPlan: {
      type: Object as PropType<ComponentPlan>,
      required: true,
    },
  },
  setup(props, context) {
    const devices = reactive<ComponentDevice>({
      show: true,
      isQtyDynamic: false,
      allowedQuantity: 0,
      quantity: 0,
      pricePerAdditionalDevice: 0,
      pricePerDeviceText: "",
      origPrice: 0,
      price: 0,
      currency: "",
    });

    function setDevice(plan: ComponentPlan) {
      devices.allowedQuantity = plan.allowed_device_number;
      // for now set mon1 plan to have dynamic quantity
      devices.isQtyDynamic = plan.pricesArr[1].additional_device_price > 0;
      devices.pricePerDeviceText =
        plan.pricesArr[1].symbol + plan.pricesArr[1].price_per_month_des;
      devices.pricePerAdditionalDevice =
        plan.pricesArr[1].additional_device_price;
      devices.price = plan.pricesArr[1].price;
      devices.origPrice = plan.pricesArr[1].price;
      devices.currency = plan.pricesArr[1].symbol;
      devices.quantity = 0;
      context.emit("update:devices", devices);
      // log("setDevice()", plan);
    }

    watch(
      () => props.selectedPlan,
      (nVal) => {
        setDevice(nVal as ComponentPlan);
      }
    );

    const addRemDevices = (oprtn: Operation) => {
      if (oprtn === "add") {
        devices.quantity++;
        devices.price = devices.pricePerAdditionalDevice * devices.quantity;
        devices.price = devices.origPrice + devices.price;
        context.emit("update:devices", devices);
      } else {
        if (devices.quantity > 0) {
          devices.quantity--;
          devices.price = devices.pricePerAdditionalDevice * devices.quantity;
          devices.price = devices.origPrice + devices.price;
          context.emit("update:devices", devices);
        }
      }
    };

    return {
      addRemDevices,
      devices,
      fmtCurr,
    };
  },
});
</script>
<style lang="scss" scoped>
.input-group.media-input-group,
.media-input-group {
  width: 100%;
  max-width: 350px;
  height: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-content: center;
  button.custom-inc {
    background-color: #dfdfed;
    padding: 0;
    text-align: center;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button.custom-inc.disabled {
    opacity: 0.2;
    box-shadow: none;
    cursor: default;
  }

  .word-devices {
    font-size: 1.5rem;
    font-weight: 700;
    color: #212529;
    line-height: normal;
    margin: 0 5px;
    display: flex;
    align-items: center;
  }
}

.accordion {
  .accordion-header {
    display: flex;
    justify-content: end;
  }
}

.font-awesome {
  cursor: pointer;
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

@media screen and (max-width: 768px) {
  .media-input-group {
    button.custom-inc {
      height: 40px;
      width: 40px;
    }
    .word-devices {
      font-size: 1rem;
    }
  }
}
</style>
