<template>
  <div v-if="isEmailShown">
    <!-- email -->
    <!-- ///////////////////////////////////////////////////////////////// -->
    <div class="login-title text-center">{{ $t("login") }}</div>
    <form action="#" @submit.prevent="showPassword">
      <div class="d-flex mt-4 pl-5 pr-5">
        <input
          ref="emailEl"
          id="email"
          type="text"
          class="form-control pt-4 pb-4"
          :placeholder="$t('enter_email')"
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
      <a href="#" @click.prevent="updateSection('EmailCode')">
        <div class="border-btn login-code-btn pt-3 pb-3">
          {{ $t("login_with_code") }}
        </div>
      </a>
    </div>
    <a href="#" @click.prevent="updateSection('PasswordRecovery')">
      <div class="forget-your-password text-center mt-4">
        {{ $t("forget_password") }}
      </div>
    </a>

    <div class="new-to-swoshs mt-2">
      New to Swoshs VPN?
      <a href="#" @click.prevent="redirect('checkout')"> Get SwoshsVPN </a>
    </div>

    <!-- ///////////////////////////////////////////////////////////////// -->
    <!-- email -->
  </div>

  <div v-else>
    <!-- password -->
    <!-- ///////////////////////////////////////////////////////////////// -->
    <div class="login-title text-center">{{ $t("hi_there") }}</div>

    <div class="mr-5 ml-5">
      <div
        class="verify-account-email mt-4"
        style="max-width: 250px; overflow-wrap: anywhere"
        :data-letters="loginDetails.email.charAt(0)"
      >
        {{ loginDetails.email }}
      </div>
    </div>

    <form action="#" @submit.prevent="login" class="ml-5 mr-5 mt-3">
      <div class="d-flex flex-row with-visiblity-btn">
        <input
          :type="isPasswordHidden ? 'password' : 'text'"
          id="password"
          ref="passwordEl"
          class="form-control login-pwd"
          :placeholder="$t('enter_password')"
          v-model="loginDetails.password"
        />
        <button
          class="visiblity-btn"
          type="button"
          @click="isPasswordHidden = !isPasswordHidden"
        >
          <i v-if="isPasswordHidden" class="flaticon-invisible pr-3 pl-3"></i>
          <i v-else class="flaticon-view pr-3 pl-3"></i>
        </button>
      </div>
    </form>

    <div class="login-continue-btn ml-5 mr-5 mt-3">
      <a href="#" @click="login" :class="{ disabled: isLoggingIn }">
        <div class="login-btn pt-3 pb-3">
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
      <a href="#" @click.prevent="updateSection('EmailCode')">
        <div class="border-btn login-code-btn pt-3 pb-3">
          {{ $t("login_with_code") }}
        </div>
      </a>
    </div>
    <a href="#" @click.prevent="updateSection('PasswordRecovery')">
      <div class="forget-your-password text-center mt-4">
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

    <div class="new-to-swoshs mt-2">
      New to Swoshs VPN?
      <a href="#" @click.prevent="redirect('checkout')"> Get SwoshsVPN </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, inject, onMounted } from "vue";
import { useValidation } from "@/hooks/useValidation";
// import { useI18n } from "vue-i18n";
import { UpdateSection, Section } from "@/types/Section";

import { useToast } from "@/hooks/useToast";
import { useUser } from "@/hooks/useUser";
import { log } from "@/modules/debug";
import { useRouter } from "vue-router";
export default defineComponent({
  props: {
    email: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // const { t } = useI18n({ useScope: "global" });
    const vldt = useValidation();
    const user = useUser();
    const toast = useToast();
    const router = useRouter();

    const isEmailShown = ref(true);
    const isPasswordShown = ref(false);
    const isLoggingIn = ref(false);
    const isPasswordHidden = ref(true);

    const redirect = (page: any) => {
      router.push({ name: page });
    };

    const loginDetails = reactive({
      email: "",
      password: "",
    });

    const emailEl = ref<HTMLInputElement>();
    const passwordEl = ref<HTMLInputElement>();

    onMounted(() => {
      loginDetails.email = props.email;
      emailEl.value?.focus();
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
        toast.do.errorTranslated(vldt.getError());
      } else {
        isEmailShown.value = false;
        isPasswordShown.value = true;
        setTimeout(() => {
          passwordEl.value?.focus();
        }, 700);
      }
    };

    const login = async () => {
      // validate email
      vldt.checkErrors({
        password: loginDetails.password,
      });
      if (vldt.hasErrors()) {
        toast.do.errorTranslated(vldt.getError());
      } else {
        isLoggingIn.value = true;
        const success = await user.do.login(
          loginDetails.email,
          loginDetails.password
        );
        if (success === true) isLoggingIn.value = true;
        else isLoggingIn.value = false;
      }
    };

    // const updateSection = inject("updateSection") as UpdateSection;
    const sS = inject("updateSection") as UpdateSection<Section>;
    const updateSection = (section: Section) => {
      sS(section);
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
      updateSection,
      emailEl,
      passwordEl,
      redirect,
    };
  },
});
</script>

<style scoped>
.new-to-swoshs {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  text-align: center;
}

.new-to-swoshs a {
  color: #6727ff;
}

input::-ms-reveal,
input::-ms-clear {
  display: none;
}

.register-account-main-email {
  font-family: Poppins;
  font-weight: normal;
  font-size: 3vw;
  color: var(--home-node-lists-title-txt-color);
  text-align: center;
  background: #7683f71f;
  border-radius: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: max-content;

  overflow: hidden;
  display: flex;
  justify-content: center;

  justify-content: flex-start;
  align-items: center;
  padding: 0 0.7rem 0 0;
}
.register-account-main-email > span {
  /* max-width: 60vw;
  display: flex;
  justify-content: center;
  flex-direction: column;   */

  max-width: 60vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  white-space: pre-wrap;
  align-items: center;
  word-break: break-word;
  text-align: left;
  padding: 3px 5px;
  color: var(--text-color);
}

[data-letters]:before {
  content: attr(data-letters);
  font-family: Poppins;
  font-weight: bold;
  display: inline-block;
  font-size: 1em;
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
  text-align: center;
  border-radius: 50%;
  background: var(--login-alphabet-highlight-bg-color);
  vertical-align: middle;
  margin-right: 1em;
  color: #fff;
}
</style>
