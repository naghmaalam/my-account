<template>
  <!-- <button type="button" class="btn btn-primary" @click="logout">Logout</button> -->
  <!-- <button type="button" class="btn btn-primary" @click="changeLang">Change lang </button> -->
  <Fade v-if="stateUser.authenticated">
    <component :is="$route.meta.layout" />
  </Fade>

  <Fade v-else>
    <Login />
  </Fade>

  <!-- <router-view /> -->

  <Toast />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

import Toast from "@/views/components/Toast.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import Login from "@/views/pages/Login.vue";
import Main from "@/views/layouts/Main.vue";

import { stateUser, useUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
export default defineComponent({
  components: {
    Toast,
    Login,
    Main,
    Fade,
  },
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const user = useUser();
    const settings = useSettings();

    // Initialize
    //////////////////////////////////////
    user.do.init();
    settings.do.init();
    //////////////////////////////////////
    // Initialize

    // const loading = ref(true);

    // set language base on store
    if (stateUser.value.language.selected === "cn") {
      locale.value = "cn";
    }

    const logout = () => {
      user.do.logout();
    };

    const changeLang = () => {
      user.do.changeLanguage("cn");
    };

    return {
      stateUser,
      logout,
      changeLang,
    };
  },
});
</script>

<style lang="scss">
#app {
  background: #f3f7fe !important;
  min-height: 100vh;
}
</style>
