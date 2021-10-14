<template>
  <div>
    <SubscriptionTable />
    <!-- <OrderHistoryTable /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SubscriptionTable from "@/views/components/my-account/SubscriptionTable.vue";
// import OrderHistoryTable from "@/views/components/my-account/OrderHistoryTable.vue";

export default defineComponent({
  components: {
    SubscriptionTable,
    // OrderHistoryTable,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
