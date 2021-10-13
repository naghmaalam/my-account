<template>
  <!-- <button type="button" class="btn btn-primary" @click="logout">Logout</button> -->
  <!-- <button type="button" class="btn btn-primary" @click="changeLang">
    Change lang
  </button> -->
  <template v-if="userState.authenticated">
    <router-view v-slot="{ Component }">
      <Fade>
        <component :is="Component" />
      </Fade>
    </router-view>
  </template>

  <Fade v-else>
    <Login />
  </Fade>

  <!-- <router-view /> -->

  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import Toast from "@/views/components/Toast.vue";
import Fade from "@/views/components/transitions/Fade.vue";

import Login from "@/views/pages/Login.vue";

import { userState, useUser } from "@/hooks/useUser";
import { useSettings } from "@/hooks/useSettings";
export default defineComponent({
  components: {
    Toast,
    Login,
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
    if (userState.value.language.selected === "cn") {
      locale.value = "cn";
    }

    const logout = () => {
      user.do.logout();
    };

    const changeLang = () => {
      user.do.changeLanguage("cn");
    };

    return {
      userState,
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
