<template>
  <div id="checkout-page">
    <!-- //////////////// -->

    <Navigation />

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

    <Subscription @update:selectedPlan="selectedPlan = $event" />

    <Devices @update:devices="devices = $event" :selected-plan="selectedPlan" />

    <CreateAccount @update:email="email = $event" />

    <Payment :email="email" :devices="devices" :selected-plan="selectedPlan" />

    <Footer />
    <!-- /////////////// -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

// import { log } from "@/modules/debug";

import { ComponentPlan } from "@/types/Plans";
import { ComponentDevice } from "@/types/Devices";

import Navigation from "@/views/components/checkout/Navigation.vue";
import CreateAccount from "@/views/components/checkout/CreateAccount.vue";
import Payment from "@/views/components/checkout/Payment.vue";
import Devices from "@/views/components/checkout/Devices.vue";
import Subscription from "@/views/components/checkout/Subscription.vue";

import Footer from "@/views/components/checkout/Footer.vue";

export default defineComponent({
  components: {
    Navigation,
    Subscription,
    Devices,
    CreateAccount,
    Payment,
    Footer,
  },
  setup() {
    const selectedPlan = ref<ComponentPlan>({
      id: 0,
      plan_time: 0,
      billed: 0,
      allowed_device_number: 0,
      total_month: 0,
      is_recommended: 0,
      title: "",
      description: "",
      pricesArr: [],
      selected: false,
    });
    const devices = ref<ComponentDevice>({
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

    const email = ref("");

    return {
      selectedPlan,
      devices,
      email,
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

@media screen and (max-width: 768px) {
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
