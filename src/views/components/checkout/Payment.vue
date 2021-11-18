<template>
  <section class="container-fluid content-word">
    <div class="container">
      <div class="row numb-group">
        <h4 class="numb2 media-num">04</h4>
        <p class="payment-selection media-title">
          {{ $t("select_payment_method") }}
        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <template v-if="!isLoadingPaymentMethods">
            <ul class="cards media-cards" id="payment-methods">
              <template v-for="pm in paymentMethods" :key="pm">
                <li
                  class="payment"
                  :class="{ 'border-active': pm.selected }"
                  @click="selectPayment(pm)"
                >
                  <div class="row">
                    <div class="col d-flex align-items-center">
                      <h6 class="media-card-title m-0">{{ pm.name }}</h6>
                    </div>
                    <div class="col text-right">
                      <img class="img-fluid" :src="pm.icon" alt="" />
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </template>
          <template v-else>
            <div
              class="
                spinner-container
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="spinner-grow text-primary my-5" role="status">
                <span class="sr-only">{{ $t("loading_dots") }}</span>
              </div>
            </div>
          </template>
        </div>
        <div class="col-md-6">
          <div class="benefits-box">
            <h4>{{ $t("your_plan_includes") }}</h4>
            <ul>
              <li>{{ $t("unlimited_fast_delivery") }}</li>
              <li>{{ $t("no_logs_policy") }}</li>
              <li>{{ $t("uncompromised_security") }}</li>
              <li>{{ $t("dedicated_customer_service") }}</li>
              <li>{{ $t("enterprise_grade") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section ref="paySection" class="container-fluid content-word pt-0 mt-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <hr />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 mt-4">
          <div>
            <a
              class="pay-btn d-flex justify-content-center align-items-center"
              href="#"
              @click.prevent="pay"
              :class="{ disabled: isLoadingPayment }"
            >
              {{ $t("pay") }} {{ devices.currency + fmtCurr(devices.price) }}
              <span
                v-if="isLoadingPayment"
                class="spinner-border spinner-border-sm ml-2"
                role="status"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 noti-payment">
          <p class="pb-5">
            {{ $t("subscription_information") }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <FadeUp>
    <section
      v-if="showPaySection"
      class="position-fixed"
      style="width: 100%; bottom: 0; z-index: 5"
    >
      <div class="container-fluid" id="buy-btn">
        <div class="row justify-content-center align-items-center purchase-btn">
          <div class="col-md-4 my-4 btn-fixed">
            <div>
              <a
                class="pay-btn d-flex justify-content-center align-items-center"
                href="#"
                @click.prevent="pay"
                :class="{ disabled: isLoadingPayment }"
              >
                {{ $t("pay") }} {{ devices.currency + fmtCurr(devices.price) }}
                <span
                  v-if="isLoadingPayment"
                  class="spinner-border spinner-border-sm ml-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeUp>
  <teleport to="body">
    <ModalPayment v-model:open="showModalPayment" :text="modalText" />
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";
import { debounce } from "lodash";

import { isElementInViewport } from "@/modules/utils";
import { log } from "@/modules/debug";
import { fmtCurr } from "@/modules/utils";
// import { log } from "@/modules/debug";

import { ComponentDevice } from "@/types/Devices";
import { ComponentPlan } from "@/types/Plans";
import { ComponentPM } from "@/types/Payment";

import { usePayment } from "@/hooks/usePayment";
import { stateUser } from "@/hooks/useUser";
import { useValidation } from "@/hooks/useValidation";
import { useToast } from "@/hooks/useToast";

import FadeUp from "@/views/components/transitions/FadeUp.vue";
import ModalPayment from "@/views/components/checkout/ModalPayment.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    FadeUp,
    ModalPayment,
  },
  props: {
    selectedPlan: {
      type: Object as PropType<ComponentPlan>,
      required: true,
    },
    devices: {
      type: Object as PropType<ComponentDevice>,
      required: true,
    },
    email: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const route = useRoute();
    const isLoadingPaymentMethods = ref(true);
    const isLoadingPayment = ref(false);
    const showModalPayment = ref(false);
    const payment = usePayment();
    const paymentSelected = ref<ComponentPM>();
    const paymentMethods = ref<ComponentPM[]>([]);
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
      isLoadingPaymentMethods.value = true;
      const rspns = await payment.get.paymentMethods();
      if (!(rspns instanceof Error)) {
        paymentMethods.value = rspns.map((val) => {
          return {
            ...val,
            selected: false,
          };
        });
        // select first element
        paymentMethods.value[0].selected = true;
        paymentSelected.value = paymentMethods.value[0];
      }
      isLoadingPaymentMethods.value = false;
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const paySection = ref();
    const showPaySection = ref(true);
    const handleScroll = debounce(
      () => {
        // log("event handleScroll", isElementInViewport(paySection.value));
        showPaySection.value = !isElementInViewport(paySection.value);
      },
      100,
      { leading: false, trailing: true }
    );

    const selectPayment = (payment: ComponentPM) => {
      paymentMethods.value.forEach((val) => {
        val.selected = false;
      });
      payment.selected = true;
      paymentSelected.value = payment;
    };
    const modalText = ref("");
    const vldt = useValidation();
    const toast = useToast();
    const pay = async () => {
      // if user is premium and active
      // if (
      //   stateUser.value.authenticated &&
      //   stateUser.value.currentSubscription.title === "premium" &&
      //   !stateUser.value.currentSubscription.isExpired
      // ) {
      //   modalText.value =
      //     "You are currently on an active premium subscription.";
      //   showModalPayment.value = true;
      //   return;
      // }

      // validate email if not authenticated or is guest
      vldt.checkErrors({
        email: props.email,
      });
      if (!stateUser.value.authenticated && vldt.hasErrors()) {
        toast.do.errorTranslated(vldt.getError());
        return;
      }

      const paymentMethodId = paymentSelected.value?.id as number;
      const planId = props.selectedPlan.id;
      const amount = props.devices.price;
      const additionalDevices = props.devices.quantity;

      isLoadingPayment.value = true;
      let rspns: Error | { orderId: number; paymentGatewayUrl: string };
      // if user is logged in
      if (stateUser.value.authenticated) {
        rspns = await payment.do.pay(
          paymentMethodId,
          planId,
          amount,
          additionalDevices
        );
      } else {
        // if not authenticated
        rspns = await payment.do.payAsGuest(
          props.email,
          paymentMethodId,
          planId,
          amount,
          additionalDevices
        );
      }

      if (!(rspns instanceof Error)) {
        isLoadingPayment.value = true;
        log("REDIRECTING TO: ", rspns.paymentGatewayUrl);
        window.location.href = rspns.paymentGatewayUrl;
      } else {
        isLoadingPayment.value = false;
        modalText.value = rspns.message;
        showModalPayment.value = true;
      }

      // setTimeout(() => {
      //   log("PAYING! = ", paymentMethodId, planId, amount, additionalDevices);
      //   isLoadingPayment.value = false;
      // }, 1500);
    };

    return {
      fmtCurr,
      paySection,
      paymentMethods,
      showPaySection,
      showModalPayment,
      modalText,
      isLoadingPaymentMethods,
      isLoadingPayment,
      paymentSelected,
      selectPayment,
      pay,
    };
  },
});
</script>
<style lang="scss" scoped>
#buy-btn {
  background-color: #fff;
  box-shadow: 0 0px 2.2px #bfcde275, 0 0px 5.3px #bfcde275, 0 0px 10px #bfcde275,
    0 0px 17.9px #bfcde275, 0 0px 33.4px #bfcde275, 0 0px 80px #bfcde275;
}
</style>
