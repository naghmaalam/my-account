<template>
  <main class="container-fluid pr-bg">
    <div class="container col col-md-4 password-recovery-box text-center">
      <div class="text-center mob-res-header pt-5 mt-5">
        <img
          src="@/assets/images/password-recovery/logo-swoshs.png"
          class="img-fluid mob-res-logo pt-5"
          alt="swoshs-logo"
        />
        <div class="pr-title text-center">Enter Log in code</div>
        <div class="pr-subtitle text-center mt-2 mr-5 ml-5">
          Check your inbox for our mail, We've sent it.
        </div>

        <div class="verify-account-email mt-4" data-letters="J">
          john@domainsample.com
        </div>

        <a href="login.html"
          ><div class="pr-back-to-login text-center pt-2">
            Use another account
          </div></a
        >

        <form name="verify" class="mr-5">
          <div class="container inputs mt-4 d-flex text-center">
            <input type="text" name="n1" maxlength="1" />
            <input type="text" name="n2" maxlength="1" />
            <input type="text" name="n3" maxlength="1" />
            <input type="text" name="n4" maxlength="1" />
            <input type="text" name="n5" maxlength="1" />
            <input type="text" name="n6" maxlength="1" />
          </div>
        </form>

        <div class="login-txt text-center mt-2">
          Didn't get the code?
          <span class="pr-back-to-login"> Send again </span>
        </div>
        <a href="login.html"
          ><div class="pr-back-to-login text-center pt-5 pb-5">
            Log in with password
          </div></a
        >
      </div>
    </div>

    <div class="container login-footer pt-5 text-center">
      <div class="row mob-res-footer pt-5 mt-5">
        <div class="col-md-4">support@swoshsvpn.com</div>
        <div class="col-md-4">Terms of Service</div>
        <div class="col-md-4">Privacy Policy</div>
      </div>
    </div>
  </main>
</template>
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

.inputs {
  align-items: center;
  margin-bottom: 15px;
  width: 15rem;
}

.inputs > * + * {
  margin-left: 0.5rem;
}

.inputs > * {
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

.inputs input:focus {
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
