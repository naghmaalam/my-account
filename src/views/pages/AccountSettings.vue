<template>
  <Main>
    <AccountSettings />
  </Main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Main from "@/views/layouts/Main.vue";
import AccountSettings from "@/views/components/my-account/AccountSettings.vue";

export default defineComponent({
  components: {
    Main,
    AccountSettings,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped></style>
