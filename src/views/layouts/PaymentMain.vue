<template>
  <div>
    <PaymentPage />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PaymentPage from "@/views/pages/PaymentPage.vue";

export default defineComponent({
  components: {
    PaymentPage,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
#app {
  background: #ecf2fb !important;
}
</style>
