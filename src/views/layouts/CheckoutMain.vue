<template>
  <div>
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
  </div>
  <!-- /////////////////////////// -->
  <!-- ///// -->
  <div class="container-fluid content-word-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 numb-group">
          <h4 class="numb media-num">01</h4>
          <p class="media-title">Choose a plan</p>
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-12">
          <!-- Pricing Table -->

          <section id="pricePlans">
            <ul id="plans">
              <!--Pricing 2-->
              <li class="plan active">
                <div class="recommended">
                  <h5>Best Deal</h5>
                </div>
                <ul class="planContainer">
                  <li class="title">
                    <div class="ribbon2-wrapper">
                      <h3 class="ribbon2">
                        <span class="ribbon2-inner">12 Month</span>
                      </h3>
                    </div>
                  </li>

                  <li class="price">
                    <p><sup class="currency-symbol">$</sup>5.25</p>
                    <h6 class="payment-duration">Per Month</h6>
                  </li>
                  <li class="info-plan">
                    <p>
                      Billed $300 every months. Additional taxes may apply
                      depending on your jurisdiction.
                    </p>
                  </li>
                </ul>
                <div class="benefit-info">
                  <div class="row">
                    <div class="col-md-3 text-center">
                      <img
                        class="img-fluid"
                        src="assets/images/point.svg"
                        alt=""
                      />
                    </div>
                    <div class="col-md-9 text-left">
                      <p>
                        This plans includes the biggest savings and is fully
                        refundable for 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <!--Pricing 3-->
              <li class="plan">
                <ul class="planContainer">
                  <li class="title">
                    <div class="ribbon2-wrapper">
                      <h3 class="ribbon2">
                        <span class="ribbon2-inner">6 Month</span>
                      </h3>
                    </div>
                  </li>

                  <li class="price">
                    <p><sup class="currency-symbol">$</sup>5.25</p>
                    <h6 class="payment-duration">Per Month</h6>
                  </li>
                  <li class="info-plan">
                    <p>
                      Billed $300 every months. Additional taxes may apply
                      depending on your jurisdiction.
                    </p>
                  </li>
                </ul>
              </li>

              <!--Pricing 1-->
              <li class="plan">
                <ul class="planContainer">
                  <li class="title">
                    <div class="ribbon2-wrapper">
                      <h3 class="ribbon2">
                        <span class="ribbon2-inner">1 Month</span>
                      </h3>
                    </div>
                  </li>

                  <li class="price">
                    <p><sup class="currency-symbol">$</sup>5.25</p>
                    <h6 class="payment-duration">Per Month</h6>
                  </li>
                  <li class="info-plan">
                    <p>
                      Billed $300 every months. Additional taxes may apply
                      depending on your jurisdiction.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- End ul#plans -->
          </section>

          <!-- Pricing Table  -->
        </div>
      </div>
    </div>
  </div>

  <!-- /////////////// -->
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped src="@/assets/website/styles/global.scss"></style>
