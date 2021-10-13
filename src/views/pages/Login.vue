<template>
  <main class="container-fluid pr-bg login-sections pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <!-- <div class="col"> -->
        <div
          class="login-box text-center pl-0 pr-0 pt-5 pb-5"
          style="max-width: 600px"
        >
          <div class="text-center mob-res-header mt-5">
            <img
              src="@/assets/images/password-recovery/logo-swoshs.png"
              class="img-fluid mob-res-logo"
              alt="swoshs-logo"
            />

            <EmailPassword v-if="section == 'EmailPassword'" />
            <LoginCodeEmail v-if="section == 'LoginCodeEmail'" />
          </div>
        </div>
        <!-- </div> -->
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
import { defineComponent, ref, provide } from "vue";
import EmailPassword from "@/views/components/login/EmailPassword.vue";
import LoginCodeEmail from "@/views/components/login/LoginCodeEmail.vue";
export default defineComponent({
  components: {
    EmailPassword,
    LoginCodeEmail,
  },
  setup() {
    type Section = "EmailPassword" | "LoginCodeEmail";
    const section = ref<Section>("EmailPassword");

    provide("section", section);

    return {
      section,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-sections ::v-deep() {
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
    margin-top: 1.5rem !important;
  }
}
</style>
