<template>
  <div
    class="plan"
    :class="{ active: selected, 'best-plan': plan.id === PlanCodes.mon12 }"
    @click="changePlan(plan)"
  >
    <!-- best plan -->
    <!-- /////////////////////////////// -->
    <div class="recommended" v-if="plan.id === PlanCodes.mon12">
      <h5>Best Deal</h5>
    </div>
    <!-- /////////////////////////////// -->
    <!-- best plan -->

    <div class="planContainer">
      <div class="title" style="padding-top: 1px">
        <div class="ribbon2-wrapper">
          <h3 class="ribbon2">
            <span class="ribbon2-inner">{{ plan.title }}</span>
          </h3>
        </div>
      </div>

      <div class="price">
        <!-- <p><sup class="currency-symbol">$</sup>5.25</p> -->
        <p>{{ price }}</p>
        <h6 class="payment-duration">Per Month</h6>
      </div>
      <div class="info-plan">
        <p>
          Billed $300 every months. Additional taxes may apply depending on your
          jurisdiction.
        </p>
      </div>
    </div>

    <!-- best plan -->
    <!-- /////////////////////////////// -->
    <div class="benefit-info" v-if="plan.id === PlanCodes.mon12">
      <div class="row">
        <div class="col-3 text-center">
          <img
            class="img-fluid mt-2"
            src="@/assets/website/images/point.svg"
            alt=""
          />
        </div>
        <div class="col-9 text-left">
          <p>
            This plans includes the biggest savings and is fully refundable for
            30 days.
          </p>
        </div>
      </div>
    </div>
    <!-- /////////////////////////////// -->
    <!-- best plan -->
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { fmtCurr } from "@/modules/utils";
import { Plan, PlanCodes } from "@/types/Plans";

export default defineComponent({
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    plan: {
      type: Object as PropType<Plan>,
    },
  },
  setup(prop) {
    const price = prop.plan?.pricesArr[1]
      ? prop.plan?.pricesArr[1].symbol + fmtCurr(prop.plan?.pricesArr[1].price)
      : "-";
    return {
      price,
      PlanCodes,
    };
  },
});
</script>

<style lang="scss" scoped>
.plan {
  width: 100%;
  margin: 0;
  margin-bottom: 20px;
  cursor: pointer;
}
.best-plan {
  .info-plan {
    border-radius: 0px;
  }
}
</style>
