<template>
  <section class="container-fluid content-word-2">
    <template v-if="!isLoading">
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
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { statePlans, usePlans } from "@/hooks/usePlans";

// import { log } from "@/modules/debug";

import { ComponentPlan } from "@/types/Plans";

import SubscriptionPlan from "@/views/components/checkout/SubscriptionPlan.vue";

export default defineComponent({
  emits: ["update:selectedPlan"],
  components: {
    SubscriptionPlan,
  },
  setup(_, context) {
    const isLoading = ref(false);
    const componentPlans = ref<ComponentPlan[]>([]);
    const plans = usePlans();

    onMounted(async () => {
      // loading.do.show();
      isLoading.value = true;
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
          // selectedPlan.value = row;
          context.emit("update:selectedPlan", row);
        }
      });
      // loading.do.hide();
      isLoading.value = false;
    });

    const selectPlan = (plan: ComponentPlan) => {
      // selectedPlan.value = plan;
      context.emit("update:selectedPlan", plan);

      componentPlans.value.forEach(function (row: ComponentPlan) {
        row.selected = false;
      });
      plan.selected = true;
      // log("selectPlan", plan);
    };
    return {
      isLoading,
      selectPlan,
      componentPlans,
    };
  },
});
</script>
<style lang="scss" scoped></style>
