<template>
  <div
    class="plan"
    :class="{
      active: plan.selected,
      'best-plan': plan.is_recommended === 1,
    }"
    @click="selectPlan"
  >
    <!-- best plan -->
    <!-- /////////////////////////////// -->
    <div class="recommended" v-if="plan.is_recommended === 1">
      <h5>{{ $t("best_deal") }}</h5>
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
        <template v-if="hasDiscount">
          <p class="orig-price">{{ price }}</p>
          <p>{{ discountPrice }}</p>
        </template>
        <template v-else>
          <p class="orig-price"></p>
          <p>{{ price }}</p>
        </template>
        <h6 class="payment-duration">for {{ plan.title }}</h6>
      </div>
      <div class="info-plan">
        <p class="mb-0">{{ $t("money_back") }}</p>
      </div>
    </div>

    <!-- best plan -->
    <!-- /////////////////////////////// -->
    <div class="benefit-info" v-if="plan.is_recommended === 1">
      <div class="row">
        <div class="col-3 text-center">
          <img
            class="img-fluid"
            src="@/assets/website/images/point.svg"
            alt=""
          />
        </div>
        <div class="col-9 text-left">
          <p>{{ $t("highly_recommended_plan") }}</p>
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
import { ComponentPlan, Plan, PlanCodes } from "@/types/Plans";

export default defineComponent({
  emits: ["select-plan"],
  props: {
    plan: {
      type: Object as PropType<ComponentPlan>,
      required: true,
    },
  },
  setup(prop, context) {
    const price = prop.plan.pricesArr[1]
      ? prop.plan.pricesArr[1].symbol + fmtCurr(prop.plan.pricesArr[1].price)
      : "-";

    const discountPrice = prop.plan.pricesArr[1]
      ? prop.plan.pricesArr[1].symbol +
        fmtCurr(
          prop.plan.pricesArr[1].price - prop.plan.pricesArr[1].discount_price
        )
      : "-";

    const hasDiscount =
      prop.plan.pricesArr[1] && prop.plan.pricesArr[1].discount_price > 0
        ? true
        : false;

    const selectPlan = () => {
      context.emit("select-plan");
    };

    return {
      price,
      discountPrice,
      hasDiscount,
      PlanCodes,
      selectPlan,
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
  background: #fff;
  // float: left;
  width: 100%;
  text-align: center;
  border-radius: 20px;
  // margin: 1rem;
  box-shadow: 0 4.5px 3.6px #b2c1db5c, 0 12.5px 10px #b2c1db5c,
    0 30.1px 24.1px #b2c1db5c, 0 100px 80px #b2c1db5c;
  border: 0;
}

.plan.active {
  box-shadow: 0px 0px 0px 7px var(--swoshs-color2);
  border: 0px solid var(--swoshs-color2);

  // box-shadow: none;
  // border: 3px solid var(--swoshs-color2);
  transition: all 0.25s;
  div.benefit-info {
    border-radius: 0 0 10px 10px;
  }
}

.best-plan {
  .info-plan {
    border-radius: 0px;
  }
}

div.benefit-info {
  background-image: none;
  background-color: var(--swoshs-color2);
  border-radius: 0 0 20px 20px;
}

.plan .planContainer {
  .ribbon2 {
    margin: auto;
    margin-bottom: 0rem;
  }
  .price {
    p {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 4rem;
      line-height: 4rem;
    }
    p.orig-price {
      font-size: 2rem;
      line-height: 2rem;
      height: 2rem;
      text-decoration: line-through;
      color: #f6266c !important;
    }
    .payment-duration {
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: normal;
    }
  }
}
</style>
