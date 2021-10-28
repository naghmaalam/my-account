<template>
  <Fade
    v-if="
      stateUser.authenticated ||
      $route.name === `referrallink` ||
      $route.name === `checkout`
    "
  >
    <component :is="$route.meta.layout" />
  </Fade>
  <Fade v-else>
    <Login />
  </Fade>
  <teleport to="body">
    <Toast />
    <Loading />
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import Toast from "@/views/components/Toast.vue";
import Loading from "@/views/components/Loading.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import Login from "@/views/pages/Login.vue";
import Main from "@/views/layouts/Main.vue";
// import ReferralLinkMain from "@/views/layouts/ReferralLinkMain.vue";

import { stateUser, useUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
import { stateLoading, useLoading } from "@/hooks/useLoading";
export default defineComponent({
  components: {
    Toast,
    Loading,
    Login,
    Main,
    // ReferralLinkMain,
    Fade,
  },
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const user = useUser();
    const settings = useSettings();
    const loading = useLoading();

    // Initialize
    //////////////////////////////////////
    user.do.init();
    settings.do.init();
    //////////////////////////////////////
    // Initialize

    // const loading = ref(true);

    // set language base on store
    console.log(
      "stateUser.value.language.selected ",
      stateUser.value.language.selected
    );
    if (stateUser.value.language.selected.toLowerCase() === "cn") {
      locale.value = "cn";
    }

    const logout = () => {
      user.do.logout();
    };

    const changeLang = () => {
      user.do.changeLanguage("cn");
    };

    onMounted(async () => {
      // refresh only when logged in
      if (stateUser.value.authenticated) {
        loading.do.show();
        await user.do.account.refreshStorage();
        loading.do.hide();
      }
    });

    return {
      stateUser,
      logout,
      changeLang,
      stateLoading,
    };
  },
});
</script>
