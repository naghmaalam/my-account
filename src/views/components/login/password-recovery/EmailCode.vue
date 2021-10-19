<template>
  <div class="">
    <div class="pr-title text-center">
      {{ $t("password_recovery") }}
    </div>
    <div class="pr-subtitle text-center mr-5 ml-5 mt-4">
      {{ $t("password_reset_link") }}
    </div>
    <form action="">
      <div class="d-flex mob-res-email mt-4 pl-5 pr-5">
        <input
          type="text"
          v-model="email"
          class="form-control pt-4 pb-4"
          :placeholder="$t('email_address')"
        />
      </div>
    </form>
    <div class="login-continue-btn ml-5 mr-5 mt-3">
      <a href="#" @click.prevent="submit">
        <div class="login-btn pt-3 pb-3">
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm mr-2"
            role="status"
            aria-hidden="true"
          ></span>
          {{ $t("submit") }}
        </div>
      </a>
    </div>
    <a href="#" @click.prevent="updateSection('EmailPassword')">
      <div class="pr-back-to-login text-center mt-4 pt-5">
        {{ $t("back_to_login") }}
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { useI18n } from "vue-i18n";
import { UpdateSection } from "@/types/Section";
import { useValidation } from "@/hooks/useValidation";

import { useUser } from "@/hooks/useUser";
import { useToast } from "@/hooks/useToast";
export default defineComponent({
  setup(props, context) {
    const { t } = useI18n({ useScope: "global" });
    const user = useUser();
    const toast = useToast();
    const vldt = useValidation();
    const updateSection = inject("updateSection") as UpdateSection;
    const email = ref("");
    const isLoading = ref(false);

    const submit = async () => {
      // validate email
      vldt.checkErrors({
        email: email.value,
      });
      if (vldt.hasErrors()) {
        toast.do.error(t(vldt.getError()));
      } else {
        isLoading.value = true;
        const success = await user.do.passwordRecovery.emailCode(email.value);
        isLoading.value = false;
        if (success) {
          context.emit("update:email", email.value);
          updateSection("PasswordRecoveryEnterCode");
        }
      }
    };

    return {
      updateSection,
      email,
      isLoading,
      submit,
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

.reset-email-main-input {
  position: relative;
  display: flex;
}

.form-control {
  background: transparent;
  border-radius: 5px;
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

.pr-back-to-login {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  color: #6727ff;
}

.pr-footer {
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #454a63;
  border: 1px solid rgba(0, 0, 0, 0);
}

.login-continue-btn {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
}

.login-btn {
  border-radius: 5px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
}

@media screen and (max-width: 992px) {
  .pr-bg {
    padding-top: 2rem;
  }

  .mob-res-logo {
    width: 10rem;
    margin-top: 2.2rem;
  }

  .pr-title {
    font-size: 1.5rem;
    line-height: 1rem;
  }

  .pr-subtitle {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }

  .pr-footer {
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
    margin-top: 1.5rem !important;
    padding-top: 0rem !important;
  }

  .mob-res-email {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .login-continue-btn {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }
}
</style>
