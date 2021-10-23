<template>
  <Fade v-if="stateUser.authenticated || $route.name === `referrallink`">
    <component :is="$route.meta.layout" />
  </Fade>
  <Fade v-else>
    <Login />
  </Fade>
  <teleport to="body">
    <Toast />
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import Toast from "@/views/components/Toast.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import Login from "@/views/pages/Login.vue";
import Main from "@/views/layouts/Main.vue";
// import ReferralLinkMain from "@/views/layouts/ReferralLinkMain.vue";

import { stateUser, useUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
export default defineComponent({
  components: {
    Toast,
    Login,
    Main,
    // ReferralLinkMain,
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
