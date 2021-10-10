<template>
  <main class="container-fluid pr-bg">
    <div class="container col col-md-4 create-password-box text-center">
      <div class="text-center mob-res-header pt-5 mt-5">
        <img
          src="@/assets/images/password-recovery/logo-swoshs.png"
          class="img-fluid mob-res-logo pt-5"
          alt="swoshs-logo"
        />
        <div class="create-password-title text-center mr-5 pr-5 ml-5 pl-5">
          Hi there!
        </div>

        <div class="verify-account-email mt-4" data-letters="J">
          john@domainsample.com
        </div>
        <form action="">
          <div class="d-flex flex-row mt-4 ml-4 mr-4">
            <input
              type="password"
              class="form-control login-pwd"
              placeholder="Enter your password"
              onkeydown="validation()"
            />
            <button class="visiblity-btn">
              <i class="flaticon-invisible pr-3 pl-3"></i>
            </button>
          </div>
        </form>

        <div class="rl-submit-btn mt-3 ml-4 mr-4">
          <div class="rl-btn pt-3 pb-3">Continue</div>
        </div>

        <div class="rl-login-btn mt-3 ml-4 mr-4">
          <a href="login-with-code.html">
            <div class="border-btn rl-code-btn pt-3 pb-3">Log in with code</div>
          </a>
        </div>

        <div class="login-txt text-center mt-4 pt-5 pb-4">
          New to Swoshs VPN?
          <span class="pr-back-to-login"> Get SwoshsVPN </span>
        </div>
      </div>
    </div>

    <div class="container pr-footer pt-5 mt-5 text-center">
      <div class="row mob-res-footer pt-5 mt-5">
        <div class="col-md-4">support@swoshsvpn.com</div>
        <div class="col-md-4">Terms of Service</div>
        <div class="col-md-4">Privacy Policy</div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.pr-bg {
  width: 100vw;
  height: 100vh;
  background: #f3f7fe;
  padding-top: 5rem;
}

/* submit button */

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

.password-input {
  border-radius: 5px !important;
}

.login-pwd {
  background: transparent;
  border: 1px solid;
  border-color: #1e156b transparent #1e156b #1e156b;
}

.reset-email-main-input {
  width: 100%;
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

.email {
  width: 449px;
  height: 57px;
  background: transparent;
  border: 1px solid #1e156b;
}

.pwd {
  width: 448px;
  height: 57px;
  background: transparent;
  border: 1px solid;
  border-color: #1e156b transparent #1e156b #1e156b;
}

.rl-btn {
  border-radius: 10px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
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

.login-pwd {
  background: transparent;
  border: 1px solid;
  border-color: #1e156b transparent #1e156b #1e156b;
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

/* back to login */

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

.create-password-box {
  width: 100%;
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  /* position: absolute;
    top: 5%;
    left: 35%; */
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

.pr-bg {
  width: 100vw;
  /* height: 100vh; */
  background: #f3f7fe;
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
  /* width: 449px;
    height: 58px; */
  border-radius: 5px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
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

@media screen and (max-width: 992px) {
  .pr-bg {
    padding-top: 2rem;
  }

  .mob-res-logo {
    width: 10rem;
    margin-top: 0rem;
    padding-top: 0rem !important;
  }

  .login-txt {
    padding-top: 0rem !important;
    margin-top: 0rem !important;
  }

  .pr-footer {
    padding-top: 0rem !important;
    margin-top: 0rem !important;
  }

  .mob-res-footer {
    padding-top: 0rem !important;
    margin-top: 2rem !important;
  }

  .form-control::-webkit-input-placeholder {
    font-size: 0.8rem;
  }

  .form-control:focus {
    font-size: 0.8rem;
  }

  .mob-res-header {
    margin-top: 1.2rem !important;
  }

  .create-password-title {
    font-size: 1.4rem;
  }
}
</style>
