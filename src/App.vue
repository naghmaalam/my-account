<template>
  <router-view v-if="authenticated" v-slot="{ Component }">
    <Fade>
      <component :is="Component" />
    </Fade>
  </router-view>

  <!-- <Fade>
    <Login />
  </Fade> -->

  <router-view />

  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Toast from "@/views/components/Toast.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import Login from "@/views/pages/Login.vue";

import { user } from "@/hooks/useUser";
export default defineComponent({
  components: {
    Toast,
    Login,
    Fade,
  },
  setup() {
    return {
      authenticated: user.authenticated,
    };
  },
});
</script>

<style lang="scss"></style>
