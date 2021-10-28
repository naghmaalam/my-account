<template>
  <div id="checkout-page">
    <!-- //////////////// -->

    <nav
      class="nav navbar navbar-expand-md navbar-dark nav inner-menu"
      id="nav"
    >
      <div class="container-fluid mobile-style">
        <a class="navbar-brand" href="../index.html">
          <img
            class="logo img-fluid"
            src="assets/images/logo.png"
            alt="SwoshsVPN"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ml-0">
            <li class="nav-item">
              <a class="nav-link" href="../what-is-vpn.html">What is VPN?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../benefits.html">Benefits</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../purchase.html">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Download
              </a>
              <div
                class="dropdown-menu animate slideIn"
                aria-labelledby="navbarDropdown2"
              >
                <a class="dropdown-item" href="./android.html"
                  ><i class="fa fa-android icon" aria-hidden="true"></i
                  >Android</a
                >
                <a class="dropdown-item" href="windows.html">
                  <i class="fa fa-windows icon" aria-hidden="true"></i
                  >Windows</a
                >
                <a class="dropdown-item" href="ios.html">
                  <i class="fa fa-apple icon" aria-hidden="true"></i>iOS</a
                >
                <a class="dropdown-item" href="linux.html"
                  ><i class="fa fa-linux icon" aria-hidden="true"></i>Linux</a
                >
                <a class="dropdown-item" href="app-download.html"
                  ><i class="fa fa-sitemap icon" aria-hidden="true"></i>All
                  Platform</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog/index.html">Blog</a>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="../my-account.html">My Account</a> -->
              <router-link :to="{ name: 'home' }" class="nav-link"
                >My Account</router-link
              >
            </li>
            <li class="nav-item cta-header">
              <a class="nav-link" href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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

      <div id="pricePlans" class="mt-5 pt-3">
        <div id="plans" class="row">
          <div
            v-for="plan in componentPlans"
            :key="plan"
            class="col-12 col-md-6 col-lg-3"
          >
            <SubscriptionPlan @select-plan="selectPlan(plan)" :plan="plan" />
          </div>
        </div>
      </div>
    </section>

    <CreateAccount />

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
                <Height>
                  <div class="accordion-body" v-if="devices.show">
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
                                Devices
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

    <FadeUp>
      <section
        v-if="showPaySection"
        class="position-fixed"
        style="width: 100%; bottom: 0; z-index: 5"
      >
        <div class="container-fluid" id="buy-btn">
          <div
            class="row justify-content-center align-items-center purchase-btn"
          >
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

    <Footer />
    <!-- /////////////// -->
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from "vue";

import { ComponentPlan, PlanCodes } from "@/types/Plans";

import { useLoading } from "@/hooks/useLoading";
import { statePlans, usePlans } from "@/hooks/usePlans";

import { fmtCurr, isElementInViewport } from "@/modules/utils";
import { log } from "@/modules/debug";

import { debounce } from "lodash";

import Height from "@/views/components/transitions/Height.vue";
import SubscriptionPlan from "@/views/components/checkout/SubscriptionPlan.vue";
import CreateAccount from "@/views/components/checkout/CreateAccount.vue";

import Footer from "@/views/components/checkout/Footer.vue";
import FadeUp from "@/views/components/transitions/FadeUp.vue";

type Operation = "add" | "rem";

export default defineComponent({
  components: {
    Height,
    SubscriptionPlan,
    CreateAccount,
    Footer,
    FadeUp,
  },
  setup() {
    const plans = usePlans();
    const loading = useLoading();
    const componentPlans = ref<ComponentPlan[]>([]);
    const devices = reactive({
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

    const addRemDevices = (oprtn: Operation) => {
      if (oprtn === "add") {
        devices.quantity++;
        devices.price = devices.pricePerAdditionalDevice * devices.quantity;
        devices.price = devices.origPrice + devices.price;
      } else {
        if (devices.quantity > 0) {
          devices.quantity--;
          devices.price = devices.pricePerAdditionalDevice * devices.quantity;
          devices.price = devices.origPrice + devices.price;
        }
      }
    };
    const selectedPlan = ref<ComponentPlan>();
    const selectPlan = (plan: ComponentPlan) => {
      selectedPlan.value = plan;
      componentPlans.value.forEach(function (row: ComponentPlan) {
        row.selected = false;
      });
      plan.selected = true;
      log("selectPlan", plan);
    };

    onMounted(async () => {
      loading.do.show();
      plans.do.init();
      await plans.do.refreshStorage();
      componentPlans.value = statePlans.value.map((val) => {
        return {
          ...val,
          selected: false,
        };
      });
      componentPlans.value.forEach(function (row: ComponentPlan) {
        if (row.is_recommended === 1) {
          row.selected = true;
          selectedPlan.value = row;
        }
      });
      loading.do.hide();

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

      log("setDevice()", plan);
    }

    watch(
      () => selectedPlan.value,
      (nVal) => {
        setDevice(nVal as ComponentPlan);
      }
    );

    return {
      fmtCurr,
      devices,
      addRemDevices,
      PlanCodes,
      componentPlans,
      selectPlan,
      selectedPlan,
      paySection,
      showPaySection,
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

#buy-btn {
  background-color: #fff;
  box-shadow: 0 0px 2.2px #bfcde275, 0 0px 5.3px #bfcde275, 0 0px 10px #bfcde275,
    0 0px 17.9px #bfcde275, 0 0px 33.4px #bfcde275, 0 0px 80px #bfcde275;
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
