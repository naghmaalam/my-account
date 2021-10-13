<template>
  <Main>
    <SubscriptionTable />
    <!-- <OrderHistoryTable /> -->
  </Main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Main from "@/views/layouts/Main.vue";
import SubscriptionTable from "@/views/components/my-account/SubscriptionTable.vue";
// import OrderHistoryTable from "@/views/components/my-account/OrderHistoryTable.vue";

export default defineComponent({
  components: {
    Main,
    SubscriptionTable,
    // OrderHistoryTable,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
