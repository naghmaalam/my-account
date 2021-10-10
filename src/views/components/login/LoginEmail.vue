<template>
  <main class="container-fluid pr-bg">
    <div class="container col col-md-4 login-box text-center pt-5">
      <div class="text-center mob-res-header mt-5">
        <img
          src="@/assets/images/password-recovery/logo-swoshs.png"
          class="img-fluid mob-res-logo"
          alt="swoshs-logo"
        />
        <div class="login-title text-center">Log In</div>
        <form action="">
          <div class="d-flex mt-4 pl-5 pr-5">
            <input
              type="text"
              class="form-control pt-4 pb-4"
              placeholder="Enter your email address"
            />
          </div>
        </form>
        <div class="login-continue-btn ml-5 mr-5 mt-3">
          <a href="login-password.html">
            <div class="login-btn pt-3 pb-3">Continue</div>
          </a>
        </div>
        <div class="ml-5 mr-5 mt-3">
          <a href="login-with-code.html">
            <div class="border-btn login-code-btn pt-3 pb-3">
              Log in with code
            </div>
          </a>
        </div>
        <a href="password-recovery.html">
          <div class="forget-your-password text-center mt-2">
            Forget your password?
          </div>
        </a>
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
