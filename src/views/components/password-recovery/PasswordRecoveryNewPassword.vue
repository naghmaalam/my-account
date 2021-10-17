<template>
  <main class="container-fluid pr-bg">
    <div class="container create-password-box text-center col col-lg-4">
      <div class="text-center mob-res-header pt-5">
        <img
          src="@/assets/images/password-recovery/logo-swoshs.png"
          class="img-fluid mob-res-logo pt-5"
          alt="swoshs-logo"
        />
        <div class="create-password-title text-center mr-5 ml-5">
          Create your new password
        </div>

        <div class="verify-account-email mt-4" data-letters="J">
          john@domainsample.com
        </div>
        <form
          action=""
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
              type="password"
              class="form-control"
              placeholder="Password"
              onkeydown="validation()"
            />
            <button class="visiblity-btn">
              <i class="flaticon-invisible pr-3 pl-3"></i>
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
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              onkeydown="validation()"
            />
            <button class="visiblity-btn">
              <i class="flaticon-invisible pr-3 pl-3"></i>
            </button>
          </div>
        </form>

        <div class="ml-5 mr-5">
          <div class="indicator text-center mt-4 ml-5 mr-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="ml-3 mr-3">
          <div class="create-password-info mt-3 ml-5 mr-5">
            A strong password has more than 8 character, containing uppercase
            and lowercas as well as symbols. Never reuse old password as this
            may compromise your account.
          </div>
        </div>

        <div class="rl-submit-btn ml-5 mr-5 mt-4">
          <div class="rl-btn ml-5 mr-5 pt-3 pb-3">Verify my email</div>
        </div>

        <a href="login.html"
          ><div class="pr-back-to-login text-center mt-4 pt-3 pb-5">
            Back to Log in
          </div></a
        >
      </div>
    </div>

    <div class="container pr-footer mob-footer-bg pt-3 mt-3 text-center">
      <div class="row pt-5">
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
