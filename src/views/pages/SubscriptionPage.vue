<template>
  <div>
    <SubscriptionTable />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SubscriptionTable from "@/views/components/my-account/SubscriptionTable.vue";

export default defineComponent({
  components: {
    SubscriptionTable,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
