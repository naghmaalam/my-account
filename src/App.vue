<template>
  <router-view v-if="authenticated" />
  <Login v-else />
  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Toast from "@/views/components/Toast.vue";
import Login from "@/views/pages/Login.vue";
import { user } from "@/hooks/useUser";
export default defineComponent({
  components: {
    Toast,
    Login,
  },
  setup() {
    return {
      authenticated: user.authenticated,
    };
  },
});
</script>

<style lang="scss"></style>
