<template>
  <div>
    <div class="pr-title text-center">{{ $t("enter_login_code") }}</div>
    <div class="pr-subtitle text-center mt-2 mr-5 ml-5">
      {{ $t("check_inbox") }}
    </div>

    <div class="verify-account-email mt-4" :data-letters="email.charAt(0)">
      {{ email }}
    </div>

    <a href="#" @click.prevent="updateSection('EmailCode')">
      <!-- <div class="pr-back-to-login text-center pt-2">Use another account</div> -->
      <div class="pr-back-to-login text-center pt-2 pb-2 mt-4">
        {{ $t("use_another_account") }}
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
      Didn't get the code?
      <a href="#" @click.prevent="sendEmailAgain" :disabled="isLoadingResend">
        <span class="pr-back-to-login"> Send again </span>
        <span
          v-if="isLoadingResend"
          class="spinner-border spinner-border-sm ml-2"
          role="status"
          aria-hidden="true"
        ></span>
      </a>
    </div>
    <a href="#" @click.prevent="updateSection('EmailPassword')">
      <div class="pr-back-to-login text-center pt-5 pb-5">
        {{ $t("login_with_password") }}
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, ref, watch } from "vue";
import { UpdateSection, Section } from "@/types/Section";
import { useToast } from "@/hooks/useToast";
import { useUser } from "@/hooks/useUser";
export default defineComponent({
  props: {
    email: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const user = useUser();
    const toast = useToast();
    const code = ref(["", "", "", "", "", ""]);
    const inputs = ref<HTMLInputElement[]>([]);
    const isLoading = ref(false);
    const isLoadingResend = ref(false);

    // const updateSection = inject("updateSection") as UpdateSection;
    const sS = inject("updateSection") as UpdateSection<Section>;
    const updateSection = (section: Section) => {
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

    const loginCode = async () => {
      isLoading.value = true;
      const success = await user.do.withCode.loginCode(
        props.email,
        code.value.join("")
      );
      isLoading.value = false;
      if (success) {
        console.log("SUCCESS");
        updateSection("EnterCode");
      }
    };

    const sendEmailAgain = async () => {
      isLoadingResend.value = true;
      const success = await user.do.withCode.emailCode(props.email);
      isLoadingResend.value = false;
      if (success) {
        toast.do.showTranslated("check_inbox");
      }
    };

    watch(
      () => code.value,
      (val) => {
        if (val.every((v) => v !== "")) {
          console.log("SUBMIT");
          inputs.value[5]?.focus();
          loginCode();
        }
      },
      { deep: true }
    );

    const refHandler = (el: HTMLInputElement, i: number) => {
      console.log(el);
      if (el) inputs.value[i] = el;
    };

    return {
      handlePaste,
      updateSection,
      handleInput,
      code,
      inputs,
      isLoading,
      isLoadingResend,
      refHandler,
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
  font-size: 2.3rem;
  line-height: 2.5rem;
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
