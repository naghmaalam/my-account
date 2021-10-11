<template>
  <main class="container-fluid pr-bg">
    <div class="container password-recovery-box col col-lg-4 text-center">
      <div class="text-center mob-res-header pt-5 mt-5">
        <img
          src="@/assets/images/password-recovery/logo-swoshs.png"
          class="img-fluid mob-res-logo"
          alt="swoshs-logo"
        />
        <div class="pr-title text-center">Password recovery</div>
        <div class="pr-subtitle text-center mr-5 ml-5 mt-4">
          Please enter your account email and we will send you a verification
          code for resetting password.
        </div>
        <form action="">
          <div class="d-flex mob-res-email mt-4 pl-5 pr-5">
            <input
              type="text"
              class="form-control pt-4 pb-4"
              placeholder="Enter your email address"
            />
          </div>
        </form>
        <div class="login-continue-btn ml-5 mr-5 mt-3">
          <a href="login-password.html">
            <div class="login-btn pt-3 pb-3">Submit</div>
          </a>
        </div>
        <a href="login.html"
          ><div class="pr-back-to-login text-center mt-4 pt-5 pb-5">
            Back to Log in
          </div></a
        >
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
