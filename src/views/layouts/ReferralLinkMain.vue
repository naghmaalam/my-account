<template>
  <div>
    <ReferralLinkPage />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ReferralLinkPage from "@/views/pages/ReferralLinkPage.vue";

export default defineComponent({
  components: {
    ReferralLinkPage,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
// #app {
//   background: #ecf2fb !important;
// }
</style>
