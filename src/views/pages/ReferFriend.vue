<template>
  <div>
    <ShareInvitation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ShareInvitation from "@/views/components/my-account/ShareInvitation.vue";

export default defineComponent({
  components: {
    ShareInvitation,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
