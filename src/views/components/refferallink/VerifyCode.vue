<template>
  <div class="rl-box mt-5 col-md-6 col-sm-6 p-3">
    <div
      class="
        d-flex
        justify-content-center
        align-items-center
        px-3
        pt-4
        pb-4
        mx-2
        my-2
        mb-1
      "
    >
      <img
        src="@/assets/images/password-recovery/logo-swoshs.png"
        class="img-fluid mob-res-logo"
        style="min-height: 65px"
        alt="swoshs-logo"
      />
    </div>
    <div class="pr-title text-center">
      {{ $t("enter_verification_code") }}
    </div>
    <!-- <div class="pr-subtitle text-center mt-2 mr-5 ml-5">
      {{ $t("check_inbox") }}
    </div> -->

    <div class="verify-account-email mt-4" :data-letters="email.charAt(0)">
      {{ email }}
    </div>

    <a href="#" @click.prevent="updateSection('EmailPassword')">
      <!-- <div class="pr-back-to-login text-center pt-2">Use another account</div> -->
      <div class="pr-back-to-login text-center pt-2 pb-2 mt-4">
        {{ $t("wrong_email") }}
      </div>
    </a>

    <form name="verify" class="mr-5">
      <div
        class="container input_code mt-4 d-flex text-center"
        style="position: relative"
      >
        <input
          v-model="code[0]"
          :ref="(el) => (inputs[0] = el)"
          @keyup="handleInput($event, 0)"
          @paste="handlePaste"
          type="text"
          name="n0"
          maxlength="1"
        />

        <input
          v-for="i in 5"
          :key="i"
          v-model="code[i]"
          :ref="(el) => (inputs[i] = el)"
          @keyup="handleInput($event, i)"
          type="text"
          :name="`n${i}`"
          maxlength="1"
        />

        <div
          style="position: absolute; right: -100px; border: 0; top: 10px"
          v-if="isLoading"
        >
          <span
            class="spinner-border spinner-border-sm ml-2"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </form>

    <div class="login-txt text-center mt-2">
      {{ $t("dont_get_the_code") }}
      <a href="#" @click.prevent="sendEmailAgain" :disabled="isLoadingResend">
        <span class="pr-back-to-login"> {{ $t("send_again") }} </span>
        <span
          v-if="isLoadingResend"
          class="spinner-border spinner-border-sm ml-2"
          role="status"
          aria-hidden="true"
        ></span>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  ref,
  inject,
  watch,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUser } from "@/hooks/useUser";
import { useToast } from "@/hooks/useToast";

import { UpdateSection, SectionReferralLink } from "@/types/Section";

export default defineComponent({
  props: {
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const user = useUser();

    const toast = useToast();
    const code = ref(["", "", "", "", "", ""]);
    const inputs = ref<HTMLInputElement[]>([]);
    const isLoadingResend = ref(false);
    const isLoading = ref(false);

    const inviteCode: ComputedRef<string> = computed(() => {
      return route.params.inviteCode as string;
    });

    // const updateSection = inject("updateSection") as UpdateSection;
    const sS = inject("updateSection") as UpdateSection<SectionReferralLink>;
    const updateSection = (section: SectionReferralLink) => {
      sS(section);
    };

    const handlePaste = (event: ClipboardEvent) => {
      const paste = (event.clipboardData?.getData("text") as string) || "";
      for (let x = 0; x <= 5; x++) code.value[x] = paste.charAt(x);
    };
    const handleInput = (event: KeyboardEvent, i: number) => {
      let foc: number;
      console.log("input " + event.key);

      // if backspace is pressed
      if (event.key === "Backspace") {
        foc = i - 1;
        if (foc >= 0) inputs.value[foc]?.focus();
        console.log("backspace / delete");
      } else if (event.key === "ArrowLeft") {
        foc = i - 1;
        if (foc >= 0) inputs.value[foc].focus();
      } else {
        foc = i + 1;
        if (foc < inputs.value.length) inputs.value[foc]?.focus();
        console.log("input " + event.key);
        console.log(`${foc} < ${inputs.value.length}`);
      }
    };

    const submit = async () => {
      console.log("SUCCESS NEW ACCOUNT");
      isLoading.value = true;
      const success = await user.do.register.verifyCode(
        props.email,
        code.value.join("")
      );
      if (success === true) {
        setTimeout(() => {
          console.log("redirect to home");
          router.push({ name: "home" });
        }, 1000);
      }
      isLoading.value = false;
    };

    const sendEmailAgain = async () => {
      isLoadingResend.value = true;
      const success = await user.do.register.inviteCode(
        props.email,
        props.password,
        inviteCode.value
      );
      // if (success === true) {
      //   toast.do.showTranslated("check_inbox");
      // }
      isLoadingResend.value = false;
    };

    watch(
      () => code.value,
      (val) => {
        if (val.every((v) => v !== "")) {
          console.log("SUBMIT");
          inputs.value[5]?.focus();
          submit();
        }
      },
      { deep: true }
    );

    return {
      inviteCode,
      isLoading,
      submit,

      handlePaste,
      updateSection,
      handleInput,
      code,
      inputs,
      isLoadingResend,
      sendEmailAgain,
    };
  },
});
</script>

<style scoped>
.pr-bg {
  width: 100vw;
  height: 100vh;
  background: #f3f7fe;
  padding-top: 5rem;
}

.password-recovery-box {
  width: 100%;
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 1rem;
}

.pr-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-align: left;
  color: #312b54;
}

.pr-subtitle {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  color: #707070;
}

.login-footer {
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #454a63;
  border: 1px solid rgba(0, 0, 0, 0);
}

/* back to login */

.pr-back-to-login {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  color: #6727ff;
}

/* verify account email  */

.verify-account-email {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.8rem;
  color: #616161;
  text-align: center;
  background: #7683f71f;
  border-radius: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: max-content;
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
  background: #fd276f;
  vertical-align: middle;
  margin-right: 1em;
  color: #fff;
}

/* verification code input cells */

.input_code {
  align-items: center;
  margin-bottom: 15px;
  width: 15rem;
}

.input_code > * + * {
  margin-left: 0.5rem;
}

.input_code > * {
  border: 1px solid #707070;
  width: 39px;
  height: 50px;
  border-radius: 10px;
  background: #fff;

  text-align: center;
  font-size: 1rem;
  font-family: Poppins;
  font-weight: bold;
}

.input_code input:focus {
  border: 1px solid #7c21ff;
  border-radius: 10px;
}

@media screen and (max-width: 992px) {
  .pr-bg {
    padding-top: 2rem;
  }

  .mob-res-logo {
    width: 10rem;
    margin-top: 2.2rem;
    padding-top: 0rem !important;
  }

  .login-box {
    padding-top: 0rem !important;
  }

  .pr-title {
    font-size: 1.5rem;
    line-height: 1rem;
  }

  .pr-subtitle {
    font-size: 0.8rem;
    line-height: 1rem;
  }

  .login-txt {
    padding-top: 0rem !important;
  }

  .login-footer {
    padding-top: 0rem !important;
    margin-top: 0rem !important;
  }

  .mob-res-footer {
    padding-top: 0rem !important;
  }

  .form-control::-webkit-input-placeholder {
    font-size: 0.8rem;
  }

  .form-control:focus {
    font-size: 0.8rem;
  }

  .mob-res-header {
    margin-top: 1.2rem !important;
    padding-top: 0rem !important;
  }

  .pr-back-to-login {
    padding-top: 1rem !important;
  }
}
</style>
