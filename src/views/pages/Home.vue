<template>
  <Main>
    <DashboardBody />
  </Main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import Main from "@/views/layouts/Main.vue";
import DashboardBody from "@/views/components/my-account/DashboardBody.vue";

export default defineComponent({
  components: {
    Main,
    DashboardBody,
  },
  setup() {
    const state = reactive({
      welcome: "welcome to the vue.js",
    });

    return {
      state,
    };
  },
});
</script>
