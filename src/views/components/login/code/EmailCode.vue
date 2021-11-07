<template>
  <div>
    <div class="login-title text-center">
      {{ $t("login_with_6_digit_code") }}
    </div>
    <form action="#" @submit.prevent="submit">
      <div class="reset-email-main-input mt-4 pl-5 pr-5">
        <input
          type="text"
          class="form-control email pt-4 pb-4"
          :placeholder="$t('email_address')"
          v-model="email"
        />
      </div>
    </form>
    <div class="login-continue-btn mt-3" @click="submit">
      <a href="#">
        <div class="login-btn ml-5 mr-5 pt-3 pb-3">
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm mr-2"
            role="status"
            aria-hidden="true"
          ></span>
          {{ $t("get_code") }}
        </div>
      </a>
    </div>
    <a href="#" @click.prevent="updateSection('EmailPassword')">
      <div class="pr-back-to-login text-center mt-5 pt-3">
        {{ $t("login_with_password") }}
      </div>
    </a>

    <div class="new-to-swoshs mt-2">
      New to Swoshs VPN? <a href="purchase.html"> Get SwoshsVPN </a>
    </div>
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
  setup(_, context) {
    const { t } = useI18n({ useScope: "global" });
    const user = useUser();
    const toast = useToast();
    const vldt = useValidation();
    const email = ref("");
    const isLoading = ref(false);

    // const updateSection = inject("updateSection") as UpdateSection;
    const sS = inject("updateSection") as UpdateSection<Section>;
    const updateSection = (section: Section) => {
      sS(section);
    };

    const submit = async () => {
      // validate email
      vldt.checkErrors({
        email: email.value,
      });
      if (vldt.hasErrors()) {
        toast.do.error(t(vldt.getError()));
      } else {
        isLoading.value = true;
        const success = await user.do.loginWithCode.emailCode(email.value);
        isLoading.value = false;
        if (success === true) {
          context.emit("update:email", email.value);
          updateSection("EnterCode");
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
/* Login Page */
.pr-bg {
  width: 100vw;
  height: 100vh;
  background: #f3f7fe;
  padding-top: 5rem;
}

.login-box {
  width: 100%;
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 1rem;
}

.login-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 2.3rem;
  line-height: 3rem;
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

/* submit button */

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

.login-code-btn {
  border-radius: 5px !important;
}

.new-to-swoshs {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  text-align: center;
}

.new-to-swoshs a {
  color: #6727ff;
}

/* back to login */

.forget-your-password {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  color: #6727ff;
}

.login-txt {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8em;
  text-align: center;
}

.pr-back-to-login {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  color: #6727ff;
}

.login-footer {
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #454a63;
  border: 1px solid rgba(0, 0, 0, 0);
}

@media screen and (max-width: 992px) {
  .pr-bg {
    padding-top: 2rem;
  }

  .mob-res-logo {
    width: 10rem;
    margin-top: 2.2rem;
  }

  .login-box {
    padding-top: 0rem !important;
  }

  .login-title {
    font-size: 1.5rem;
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
    margin-top: 1rem !important;
  }
}
</style>
