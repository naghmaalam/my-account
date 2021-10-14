<template>
  <div>
    <AccountSettings />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import AccountSettings from "@/views/components/my-account/AccountSettings.vue";

export default defineComponent({
  components: {
    AccountSettings,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
