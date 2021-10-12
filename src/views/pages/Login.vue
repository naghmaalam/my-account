<template>
  <main class="container-fluid pr-bg">
    <div class="container col col-md-4 login-box text-center pt-5">
      <div class="text-center mob-res-header mt-5">
        <img
          src="@/assets/images/password-recovery/logo-swoshs.png"
          class="img-fluid mob-res-logo"
          alt="swoshs-logo"
        />

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
          </div>
        </Fade2>

        <div class="login-txt text-center mt-4 pt-5 pb-4">
          New to Swoshs VPN?
          <span class="pr-back-to-login"> Get SwoshsVPN </span>
        </div>
      </div>
    </div>
    <div class="container login-footer pt-5 mt-5 text-center">
      <div class="row mob-res-footer pt-5 mt-5">
        <div class="col-md-4">support@swoshsvpn.com</div>
        <div class="col-md-4">Terms of Service</div>
        <div class="col-md-4">Privacy Policy</div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

import { useToast } from "@/hooks/useToast";
import { useUser } from "@/hooks/useUser";
import Fade2 from "@/views/components/transitions/Fade2.vue";

import { useValidation } from "@/modules/validation";
export default defineComponent({
  components: {
    Fade2,
  },
  setup() {
    const { t } = useI18n({ useScope: "global" });

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
        toast.actions.error({ text: t(vldt.getError()) });
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
        toast.actions.error({ text: t(vldt.getError()) });
      } else {
        isLoggingIn.value = true;
        await user.actions.login({
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

<style scoped>
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

/* Email box */

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

.login-footer {
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 2rem;
  color: #454a63;
  border: 1px solid rgba(0, 0, 0, 0);
}

.fader {
  transition: all 0.3s;
}

/* Password section  */
/* //////////////////////////////////////////////// */
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

.password-input {
  border-radius: 5px !important;
}

.visiblity-btn {
  border: 1px solid;
  border-color: #1e156b #1e156b #1e156b transparent;
}
.login-pwd {
  background: transparent;
  border: 1px solid;
  border-color: #1e156b transparent #1e156b #1e156b;
  height: 50px;
  border-radius: 0;
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

.rl-submit-btn {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
}

/* submit button */
.rl-submit-btn {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
}

.rl-btn {
  /* width: 449px;
    height: 58px; */
  border-radius: 5px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
}
/* //////////////////////////////////////////////// */
/* Password section  */

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
    margin-top: 1.5rem !important;
  }
}
</style>
