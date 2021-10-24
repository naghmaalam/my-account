<template>
  <div>
    <DashboardBody />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import DashboardBody from "@/views/components/my-account/DashboardBody.vue";

export default defineComponent({
  components: {
    DashboardBody,
  },
  setup() {
    return {};
  },
});
</script>
