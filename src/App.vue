<template>
  <Fade v-if="isLoading">
    <div class="page-loader d-flex justify-content-center align-items-center">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </Fade>
  <Fade
    v-else-if="
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
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
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
    const isLoading = ref(false);

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
        isLoading.value = true;
        await user.do.account.refreshStorage();
        isLoading.value = false;
      }
    });

    return {
      stateUser,
      logout,
      changeLang,
      isLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-loader {
  height: 100vh;
  width: 100vw;
  .spinner-grow.text-primary {
    color: var(--swoshs-color2) !important;
    width: 5rem;
    height: 5rem;
  }
}
</style>
