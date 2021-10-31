<template>
  <section class="container-fluid content-word">
    <div class="container">
      <div class="row numb-group">
        <h4 class="numb2 media-num">04</h4>
        <p class="payment-selection media-title">Payment Selection</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <ul class="cards media-cards" id="payment-methods">
            <li class="payment border-active">
              <div class="row">
                <div class="col">
                  <h6 class="media-card-title">Credit Card</h6>
                </div>
                <div class="col text-right">
                  <img
                    class="img-fluid media-img-card"
                    src="@/assets/website/images/payment/credit-card.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li class="payment">
              <div class="row">
                <div class="col">
                  <h6 class="media-card-title">Paypal</h6>
                </div>
                <div class="col text-right">
                  <img
                    class="img-fluid media-img-paypal"
                    src="@/assets/website/images/payment/paypal.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li class="payment">
              <div class="row">
                <div class="col">
                  <h6 class="media-card-title">Bitcoin</h6>
                </div>
                <div class="col text-right">
                  <img
                    class="img-fluid"
                    src="@/assets/website/images/payment/bitcoin.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li class="payment">
              <div class="row">
                <div class="col">
                  <h6 class="media-card-title">Google Pay</h6>
                </div>
                <div class="col text-right">
                  <img
                    class="img-fluid media-img-gpay"
                    src="@/assets/website/images/payment/GPay.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="benefits-box">
            <h4>Your plan includes</h4>
            <ul>
              <li>Unlimited devices</li>
              <li>Unlimited and fast content delivery</li>
              <li>No logs policy</li>
              <li>Uncompromised security and privacy</li>
              <li>24/7 customer service</li>
              <li>Enterprise-grade infrastructure and reliability.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section ref="paySection" class="container-fluid content-word">
    <div class="container">
      <div class="row">
        <div class="col">
          <hr />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 mt-4">
          <div>
            <a class="pay-btn" href="#">
              PAY {{ devices.currency + fmtCurr(devices.price) }}
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 noti-payment">
          <p class="pb-5">
            * The price is valid for the first term of your subscription. After
            the first term, your subscription will be automatically renewed for
            an additional 1-year term annually and you will be charged at
            then-applicable renewal price. The price is subject to change, but
            we will always send you a notification email prior to charging.
            Learn more
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
              <a class="pay-btn" href="#">
                PAY {{ devices.currency + fmtCurr(devices.price) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeUp>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";
import { debounce } from "lodash";

import { isElementInViewport } from "@/modules/utils";
import { fmtCurr } from "@/modules/utils";

import { ComponentDevice } from "@/types/Devices";
import { ComponentPlan } from "@/types/Plans";

import FadeUp from "@/views/components/transitions/FadeUp.vue";

export default defineComponent({
  components: {
    FadeUp,
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
  },
  setup() {
    onMounted(async () => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const paySection = ref();
    const showPaySection = ref(true);
    const handleScroll = debounce(
      (event: Event) => {
        // log("event handleScroll", isElementInViewport(paySection.value));
        showPaySection.value = !isElementInViewport(paySection.value);
      },
      100,
      { leading: false, trailing: true }
    );

    return {
      fmtCurr,
      paySection,
      showPaySection,
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
