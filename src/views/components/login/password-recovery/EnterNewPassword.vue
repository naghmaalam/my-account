<template>
  <div class="text-center mob-res-header pt-5">
    <div class="create-password-title text-center mr-5 ml-5">
      {{ $t("create_new_password") }}
    </div>

    <div class="verify-account-email mt-4" :data-letters="email.charAt(0)">
      {{ email }}
    </div>

    <form
      action="#"
      class="
        d-flex
        flex-column
        justify-content-center
        align-items-center
        mob-res-form
      "
    >
      <div
        class="
          create-new-password-input
          mt-4
          d-flex
          flex-row
          with-visiblity-btn
        "
      >
        <input
          :type="isPasswordHidden ? 'password' : 'text'"
          class="form-control"
          v-model="password"
          @input="atKeyUp"
          :placeholder="$t('password')"
        />
        <button
          type="button"
          class="visiblity-btn"
          @click="isPasswordHidden = !isPasswordHidden"
        >
          <i v-if="isPasswordHidden" class="flaticon-invisible pr-3 pl-3"></i>
          <i v-else class="flaticon-view pr-3 pl-3"></i>
        </button>
      </div>
      <div
        class="
          create-new-password-input
          mt-4
          d-flex
          flex-row
          with-visiblity-btn
        "
      >
        <input
          class="form-control"
          :type="isPasswordConfirmHidden ? 'password' : 'text'"
          v-model="password_confirm"
          :placeholder="$t('confirm_password')"
        />
        <button
          type="button"
          class="visiblity-btn"
          @click="isPasswordConfirmHidden = !isPasswordConfirmHidden"
        >
          <i
            v-if="isPasswordConfirmHidden"
            class="flaticon-invisible pr-3 pl-3"
          ></i>
          <i v-else class="flaticon-view pr-3 pl-3"></i>
        </button>
      </div>
    </form>

    <div class="ml-5 mr-5">
      <div class="indicator text-center mt-4 ml-5 mr-5">
        <span :class="{ marked: passwordStrength >= 1 }"></span>
        <span :class="{ marked: passwordStrength >= 2 }"></span>
        <span :class="{ marked: passwordStrength >= 3 }"></span>
        <span :class="{ marked: passwordStrength >= 4 }"></span>
        <span :class="{ marked: passwordStrength >= 5 }"></span>
      </div>
    </div>

    <div class="ml-3 mr-3">
      <div class="create-password-info mt-3 ml-5 mr-5">
        {{ $t("password_info_never_reuse") }}
      </div>
    </div>

    <div class="rl-submit-btn ml-5 mr-5 mt-4">
      <a href="#" @click.prevent="submit">
        <div class="rl-btn ml-5 mr-5 pt-3 pb-3" :disabled="isLoading">
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm mr-2"
            role="status"
            aria-hidden="true"
          ></span>
          {{ $t("reset_password") }}
        </div>
      </a>
    </div>

    <a href="#" @click.prevent="updateSection('EmailPassword')">
      <div class="pr-back-to-login text-center mt-4 pt-3 pb-5">
        {{ $t("back_to_login") }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { useI18n } from "vue-i18n";
import { UpdateSection, Section } from "@/types/Section";
import { useValidation } from "@/hooks/useValidation";

import { useUser } from "@/hooks/useUser";
import { useToast } from "@/hooks/useToast";

export default defineComponent({
  props: {
    email: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const { t } = useI18n({ useScope: "global" });
    const user = useUser();
    const toast = useToast();
    const vldt = useValidation();
    const isLoading = ref(false);
    const password = ref("");
    const password_confirm = ref("");
    const isPasswordHidden = ref(true);
    const isPasswordConfirmHidden = ref(true);
    const passwordStrength = ref(0);

    // const updateSection = inject("updateSection") as UpdateSection;
    const sS = inject("updateSection") as UpdateSection<Section>;
    const updateSection = (section: Section) => {
      sS(section);
    };

    const atKeyUp = () => {
      passwordStrength.value = vldt.getPasswordStrength(password.value);
    };

    const submit = async () => {
      // validate password
      vldt.checkErrors({
        password_email: {
          email: props.email,
          password: password.value,
        },
        confirm_password: {
          confirm: password_confirm.value,
          password: password.value,
        },
        password: password.value,
      });
      if (vldt.hasErrors()) {
        toast.do.error(t(vldt.getError()));
      } else {
        console.log("SUCCESS NEW PASSWORD");
        isLoading.value = true;
        const success = await user.do.passwordRecovery.updatePassword(
          props.email,
          props.code,
          password.value
        );
        if (success) {
          context.emit("update:email", props.email);
          updateSection("EmailPassword");
        }
        isLoading.value = false;
      }
    };
    return {
      updateSection,
      isLoading,
      atKeyUp,
      submit,
      password,
      password_confirm,
      isPasswordHidden,
      isPasswordConfirmHidden,
      passwordStrength,
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

.create-password-box {
  width: 100%;
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 1rem;
}

.create-password-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2rem;
  text-align: center;
  color: #312b54;
  border: 1px solid rgba(0, 0, 0, 0);
}

.create-password-info {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  color: #707070;
  border: 1px solid rgba(0, 0, 0, 0);
}

.create-new-password-input {
  width: 70%;
}

.rl-submit-btn {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
}

.rl-btn {
  border-radius: 5px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
}

.form-control {
  background: transparent;
  /* border: blue; */
  border-radius: 5px;
  /* height: 50px; */
  color: black;
}

.form-control::-webkit-input-placeholder {
  font-family: Poppins;
  font-weight: normal;
  font-size: 1rem;
  color: black;
  opacity: 0.33;
}

.form-control:focus {
  font-family: Poppins;
  font-weight: normal;
  font-size: 1rem;
  background: transparent;
  border: 1px solid #7c21ff;
  color: black;
  box-shadow: none;
}

.pr-back-to-login {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  color: #6727ff;
}

.pr-footer div {
  /* margin-top: 500px; */
  /* position: relative;
      top: 93%; */
}

.pr-footer {
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #454a63;
  border: 1px solid rgba(0, 0, 0, 0);
}

.form-control {
  background: transparent;
  border-radius: 0;
  height: 50px;
  color: black;
}

.form-control::-webkit-input-placeholder {
  font-family: Poppins;
  font-weight: normal;
  font-size: 1rem;
  color: black;
  opacity: 0.33;
}

.form-control:focus {
  font-family: Poppins;
  font-weight: normal;
  font-size: 1rem;
  background: transparent;
  border: 1px solid #7c21ff;
  color: black;
  box-shadow: none;
}

.password-input {
  width: 92%;
}

.indicator {
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.indicator > * + * {
  margin-left: 0.5rem;
}

.indicator span {
  width: 100%;
  height: 100%;
  background: #0c3285;
  position: relative;
  opacity: 0.21;
  transition: opacity 0.4s;
}

.indicator span.marked {
  opacity: 1;
}

.indicator span:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.email {
  width: 449px;
  height: 57px;
  background: transparent;
  border: 1px solid #1e156b;
}

.pass-strength {
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #383361;
  opacity: 0.9;
}

/* flaticon eyecolor */
.flaticon-invisible {
  color: #383361;
  opacity: 0.43;
}

.visiblity-btn {
  border: 1px solid;
  border-color: #1e156b #1e156b #1e156b transparent;
}

.rl-submit-btn {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
}

@media screen and (max-width: 992px) {
  .pr-bg {
    padding-top: 2rem;
  }

  .mob-footer-bg {
    width: 100%;
    height: auto;
    background: #f3f7fe;
  }

  .mob-res-logo {
    width: 10rem;
    margin-top: 2.2rem;
    padding-top: 0rem !important;
  }

  .login-box {
    padding-top: 0rem !important;
  }

  .create-password-title {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .create-password-info {
    font-size: 0.7rem;
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .rl-submit-btn {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .indicator {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .form-control::-webkit-input-placeholder {
    font-size: 0.8rem;
  }

  .form-control:focus {
    font-size: 0.8rem;
  }

  .mob-res-header {
    padding-top: 0rem !important;
  }

  .pr-back-to-login {
    margin-top: 0rem !important;
    padding-bottom: 1rem !important;
  }
}
</style>
