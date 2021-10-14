<template>
  <Fade2>
    <div class="fader" v-if="isEmailShown">
      <!-- email -->
      <!-- ///////////////////////////////////////////////////////////////// -->
      <div class="login-title text-center">{{ $t("login") }}</div>
      <form action="">
        <div class="d-flex mt-4 pl-5 pr-5">
          <input
            type="text"
            class="form-control pt-4 pb-4"
            placeholder="Enter your email address"
            v-model="loginDetails.email"
          />
        </div>
      </form>

      <div class="login-continue-btn ml-5 mr-5 mt-3">
        <!-- <a href="login-password.html"> -->
        <a href="#" @click="showPassword">
          <div class="login-btn pt-3 pb-3">{{ $t("continue") }}</div>
        </a>
      </div>

      <div class="ml-5 mr-5 mt-3">
        <a href="login-with-code.html">
          <div class="border-btn login-code-btn pt-3 pb-3">
            {{ $t("login_with_code") }}
          </div>
        </a>
      </div>
      <a href="password-recovery.html">
        <div class="forget-your-password text-center mt-2">
          {{ $t("forget_password") }}
        </div>
      </a>
      <!-- ///////////////////////////////////////////////////////////////// -->
      <!-- email -->
    </div>

    <div class="fader" v-else>
      <!-- password -->
      <!-- ///////////////////////////////////////////////////////////////// -->
      <div class="login-title text-center">{{ $t("hi_there") }}</div>
      <div
        class="verify-account-email mt-4"
        :data-letters="loginDetails.email.charAt(0)"
      >
        {{ loginDetails.email }}
      </div>
      <form action="#">
        <div class="d-flex flex-row mt-4 ml-4 mr-4">
          <input
            :type="isPasswordHidden ? 'password' : 'input'"
            class="form-control login-pwd"
            placeholder="Enter your password"
            v-model="loginDetails.password"
          />
          <button
            class="visiblity-btn"
            type="button"
            @click="isPasswordHidden = !isPasswordHidden"
          >
            <i class="flaticon-invisible pr-3 pl-3"></i>
          </button>
        </div>
      </form>

      <div class="login-continue-btn ml-5 mr-5 mt-3">
        <!-- <a href="login-password.html"> -->
        <a href="#" @click="login">
          <div class="login-btn pt-3 pb-3" :disabled="isLoggingIn">
            <span
              v-if="isLoggingIn"
              class="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            ></span>
            {{ $t("continue") }}
          </div>
        </a>
      </div>
      <div class="ml-5 mr-5 mt-3">
        <a href="login-with-code.html">
          <div class="border-btn login-code-btn pt-3 pb-3">
            {{ $t("login_with_code") }}
          </div>
        </a>
      </div>
      <a href="password-recovery.html">
        <div class="forget-your-password text-center mt-2">
          {{ $t("forget_password") }}
        </div>
      </a>

      <a href="#" @click="showEmail">
        <div class="forget-your-password text-center mt-2">
          {{ $t("wrong_email") }}
        </div>
      </a>
      <!-- ///////////////////////////////////////////////////////////////// -->
      <!-- password -->

      <div class="login-txt text-center mt-4 pt-5 pb-4">
        New to Swoshs VPN?
        <span class="pr-back-to-login"> Get SwoshsVPN </span>
      </div>
    </div>
  </Fade2>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useValidation } from "@/modules/validation";
import { useI18n } from "vue-i18n";

import Fade2 from "@/views/components/transitions/Fade2.vue";

import { useToast } from "@/hooks/useToast";
import { useUser } from "@/hooks/useUser";
export default defineComponent({
  components: {
    Fade2,
  },
  setup() {
    const { t, locale } = useI18n({ useScope: "global" });
    const vldt = useValidation();

    const user = useUser();
    const toast = useToast();

    const isEmailShown = ref(true);
    const isPasswordShown = ref(false);
    const isLoggingIn = ref(false);
    const isPasswordHidden = ref("password");

    const loginDetails = reactive({
      email: "rene.proudpanda@gmail.com",
      password: "asdf1234",
    });

    const showEmail = () => {
      isEmailShown.value = true;
      isPasswordShown.value = false;
    };

    const showPassword = () => {
      // validate email
      vldt.checkErrors({
        email: loginDetails.email,
      });
      if (vldt.hasErrors()) {
        toast.do.error({ text: t(vldt.getError()) });
      } else {
        isEmailShown.value = false;
        isPasswordShown.value = true;
      }
    };

    const login = async () => {
      // validate email
      vldt.checkErrors({
        password: loginDetails.password,
      });
      if (vldt.hasErrors()) {
        toast.do.error({ text: t(vldt.getError()) });
      } else {
        isLoggingIn.value = true;
        await user.do.login({
          username: loginDetails.email,
          password: loginDetails.password,
          device_code: "device_code_my_account",
          device_name: "device_name_my_account",
          device_type: "ios, android, windows, mac",
          myaccount: true,
          lang: "en",
          version: "version",
        });
        isLoggingIn.value = false;
      }
    };

    const changeLang = () => {
      locale.value = "cn"; // change
    };

    return {
      login,
      loginDetails,
      isEmailShown,
      isPasswordShown,
      isLoggingIn,
      showEmail,
      showPassword,
      isPasswordHidden,
    };
  },
});
</script>
