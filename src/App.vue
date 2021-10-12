<template>
  <router-view v-if="user.authenticated" v-slot="{ Component }">
    <Fade>
      <component :is="Component" />
    </Fade>
  </router-view>

  <Fade v-else>
    <Login />
  </Fade>

  <!-- <router-view /> -->

  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Toast from "@/views/components/Toast.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import Login from "@/views/pages/Login.vue";

import { user, useUser } from "@/hooks/useUser";
export default defineComponent({
  components: {
    Toast,
    Login,
    Fade,
  },
  setup() {
    return {
      user,
    };
  },
});
</script>

<style lang="scss"></style>
