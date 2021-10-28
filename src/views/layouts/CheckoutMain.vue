<template>
  <div id="checkout-page">
    <!-- //////////////// -->
    <header class="container-fluid header-content header-purchase">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="purchase-title">
              Secure your digital life effortlessly
            </h1>
            <p class="purchase-subtitle">
              100% moneyback guarantee for your first 30 days of period.
            </p>
          </div>
        </div>
      </div>
    </header>

    <section class="container-fluid content-word-2">
      <div class="container">
        <div class="row">
          <div class="col numb-group">
            <h4 class="numb media-num">01</h4>
            <p class="media-title">Choose a plan</p>
          </div>
        </div>
      </div>

      <div id="pricePlans" class="mt-5">
        <div id="plans" class="row">
          <div
            v-for="plan in statePlans"
            :key="plan"
            class="col-12 col-md-6 col-lg-3"
          >
            <SubscriptionPlan :plan="plan" />
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid content-word">
      <div class="container">
        <div class="row">
          <div class="col-md-12 numb-group">
            <h4 class="numb2 media-num">02</h4>
            <p class="media-title">Create an account</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div>
              <form action="#" id="form">
                <label
                  >Enter your email that you'd like to use for Swoshs
                  account</label
                >
                <div class="input-box">
                  <input
                    type="text"
                    name=""
                    id="email"
                    placeholder="Enter Email Address"
                    onkeydown="validation()"
                  />
                </div>
              </form>
              <p class="purchase-p">
                We will not use share your email address with third parties, and
                will only contact you when necessary to ensure the best
                services.<br />
                If you have already an account <a href="login.html">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid content-word">
      <div class="container">
        <div class="row numb-group">
          <h4 class="numb2 media-num">03</h4>
          <p class="payment-selection media-title">Customize devices</p>
        </div>
        <div class="row">
          <div class="container">
            <div class="accordion-wrapper">
              <!-- <div class="item media-item"> -->
              <div class="accordion" data-accordion="close">
                <div class="accordion-header">
                  <div
                    class="font-awesome mb-2"
                    @click="showDevices = !showDevices"
                  >
                    <div v-if="showDevices">
                      <i class="fas fa-chevron-circle-down"></i>
                    </div>

                    <div v-else>
                      <i class="fas fa-chevron-circle-up"></i>
                    </div>
                  </div>
                </div>
                <Height>
                  <div class="accordion-body" v-if="showDevices">
                    <!-- <div class="tab-content media-tab-content"> -->
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
                              Number of devices connect at same time
                            </h6>
                            <div class="input-group media-input-group">
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn btn-default btn-number custom-inc"
                                  @click="changeDevices('rem')"
                                >
                                  <i
                                    class="fa fa-minus media-fa-minus"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </span>
                              <span class="word-devices media-word-devices">
                                {{ devices }} Devices
                              </span>
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn btn-default btn-number custom-inc"
                                  @click="changeDevices('add')"
                                >
                                  <i
                                    class="fa fa-plus media-fa-plus"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </span>
                            </div>
                            <h1 class="text-center media-price mt-3">$10.50</h1>
                            <h6 class="mb-3">$5.25 / Month / Device</h6>
                            <!-- </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- </div> -->
                  </div>
                </Height>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <section class="container-fluid content-word">
      <div class="container">
        <div class="row">
          <div class="col">
            <hr />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 mt-4">
            <div>
              <a class="pay-btn" href="#">PAY $10.45</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 noti-payment">
            <p class="pb-5">
              * The price is valid for the first term of your subscription.
              After the first term, your subscription will be automatically
              renewed for an additional 1-year term annually and you will be
              charged at then-applicable renewal price. The price is subject to
              change, but we will always send you a notification email prior to
              charging. Learn more
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- /////////////// -->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { PlanCodes, Plan } from "@/types/Plans";
import { statePlans, usePlans } from "@/hooks/usePlans";
import { useLoading } from "@/hooks/useLoading";

import Height from "@/views/components/transitions/Height.vue";
import SubscriptionPlan from "@/views/components/checkout/SubscriptionPlan.vue";

type Operation = "add" | "rem";

export default defineComponent({
  components: {
    Height,
    SubscriptionPlan,
  },
  setup() {
    const selectedPlan = ref<PlanCodes>(PlanCodes.mon12);
    const changePlan = (plan: PlanCodes) => {
      selectedPlan.value = plan;
    };
    const devices = ref(1);
    const showDevices = ref(true);

    const changeDevices = (oprtn: Operation) => {
      if (oprtn === "add") {
        devices.value++;
      } else {
        if (devices.value > 2) devices.value--;
      }
    };

    const plans = usePlans();
    const packagePlans = ref<Plan[]>([]);
    const loading = useLoading();
    onMounted(async () => {
      loading.do.show();
      plans.do.init();
      const success = await plans.do.refreshStorage();
      loading.do.hide();
    });

    return {
      selectedPlan,
      changePlan,
      showDevices,
      devices,
      changeDevices,
      packagePlans,
      PlanCodes,
      statePlans,
    };
  },
});
</script>

<style lang="scss" scoped src="@/assets/website/styles/global.scss"></style>
<style lang="scss" scoped src="@/assets/website/styles/purchase.scss"></style>
<style lang="scss" scoped>
#checkout-page {
  background-color: #fff;
}

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

  .header-purchase {
    .purchase-title {
      font-size: 1.8rem;
    }

    .purchase-subtitle {
      font-size: 1rem;
      line-height: normal;
    }
  }
}
</style>
