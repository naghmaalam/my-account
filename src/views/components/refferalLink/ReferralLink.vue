<template>
  <main class="container-fluid rl-bg p-0">
    <div
      class="
        referrel-noti-head
        d-flex
        flex-row
        justify-content-center
        align-items-center
      "
    >
      <img
        src="assets/images/account-settings-refer-friend/open-gift.png"
        class="rl-gift img-fluid"
        alt=""
      />
      <p class="pt-3 pl-3">
        Your friend rewarded you a 30-Day gift, Your buddy knows you value
        online privacy and security.
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="rl-box mt-5 col-md-6 col-sm-6">
          <div class="rl-ribbon ribbon-top-left"><span>ribbon</span></div>
          <div class="rl-title mt-5 pt-5 pl-5 ml-5 pr-5 mr-5">
            Hooray! you received a gift from you friend
          </div>
          <div class="rl-subtitle pl-5 ml-5 pr-5 mr-5 pt-3">
            Your friend has referred you. Complete sign up to claim your extra
            <b> 30 Days Free gift </b>
          </div>
          <form action="">
            <div class="d-flex mt-4 pl-5 pr-5 ml-5 mr-5">
              <input
                type="text"
                class="form-control pt-4 pb-4"
                placeholder="Enter your email address"
              />
            </div>

            <div class="d-flex flex-row mt-4 ml-5 mr-5">
              <input
                type="password"
                class="form-control login-pwd ml-5"
                placeholder="Enter your password"
                onkeydown="validation()"
              />
              <button class="visiblity-btn mr-5">
                <i class="flaticon-invisible pr-3 pl-3"></i>
              </button>
            </div>
          </form>
          <div class="pass-strength mt-3 pl-5 ml-5">Password Strength</div>
          <div class="indicator mt-3 pl-5 pr-5 ml-5 mr-5">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="rl-txt pl-5 ml-5 pr-5 mr-5 pt-4">
            A strong password has more than 8 character, containing uppercase
            and lowercase as well as symbols. Never reuse old password as this
            may compromise your account.
          </div>
          <div class="rl-submit-btn ml-5 mr-5 mt-4">
            <div class="rl-btn ml-5 mr-5 pt-2 pb-2 mb-5">
              Get your 30-Day free
            </div>
          </div>
        </div>
        <div class="referrel-image mt-5 pt-5 col-md-6 col-sm-6">
          <img
            src="@/assets/images/referrel-link/referrel-link.png"
            class="mt-5 img-fluid"
            alt=""
          />
        </div>
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
.referrel-noti-head {
  background-color: #22183d;
  text-align: center;
}

.rl-gift {
  width: 1.5rem;
  height: auto;
}

.referrel-noti-head p {
  font-family: Poppins;
  font-weight: 600;
  font-size: 13px;
  text-align: center;
  color: #fff;
  opacity: 0.84;
}

.rl-bg {
  background-color: #ecf2fb;
  width: 100%;
  height: 100%;
}

.rl-box {
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 19px 34px rgba(214, 225, 243, 0.82);
}

.rl-title {
  font-family: Poppins;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2rem;
  text-align: left;
  color: #383361;
}

.rl-subtitle {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 1.3rem;
  text-align: left;
  color: #635d8d;
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

.pwd {
  width: 448px;
  height: 57px;
  background: transparent;
  border: 1px solid;
  border-color: #1e156b transparent #1e156b #1e156b;
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

.rl-txt {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 1.2rem;
  text-align: left;
  color: #635d8d;
  border: 1px solid rgba(0, 0, 0, 0);
}

.rl-btn {
  border-radius: 10px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  text-align: center;
  color: #fff;
}

/* common */
.rl-ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
}
.rl-ribbon::before,
.rl-ribbon::after {
  position: absolute;
  z-index: -1;
  content: "";
  display: block;
  border: 5px solid #2980b9;
}
.rl-ribbon span {
  position: absolute;
  display: block;
  width: 225px;
  padding: 15px 0;
  background-color: #ff80ae;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  font: 700 18px/1 "Lato", sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  text-align: center;
}

/* top left*/
.ribbon-top-left {
  top: -1%;
  left: -1%;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
  border-top-color: transparent;
  border-left-color: transparent;
}
.ribbon-top-left::before {
  top: 0;
  right: 0;
}
.ribbon-top-left::after {
  bottom: 0;
  left: 0;
}
.ribbon-top-left span {
  right: -25px;
  top: 30px;
  transform: rotate(-45deg);
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
  border-top-color: transparent;
  border-right-color: transparent;
}
.ribbon-top-right::before {
  top: 0;
  left: 0;
}
.ribbon-top-right::after {
  bottom: 0;
  right: 0;
}
.ribbon-top-right span {
  left: -25px;
  top: 30px;
  transform: rotate(45deg);
}

/* bottom left*/
.ribbon-bottom-left {
  bottom: -10px;
  left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ribbon-bottom-left::before {
  bottom: 0;
  right: 0;
}
.ribbon-bottom-left::after {
  top: 0;
  left: 0;
}
.ribbon-bottom-left span {
  right: -25px;
  bottom: 30px;
  transform: rotate(225deg);
}

/* bottom right*/
.ribbon-bottom-right {
  bottom: -10px;
  right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
  border-bottom-color: transparent;
  border-right-color: transparent;
}
.ribbon-bottom-right::before {
  bottom: 0;
  left: 0;
}
.ribbon-bottom-right::after {
  top: 0;
  right: 0;
}
.ribbon-bottom-right span {
  left: -25px;
  bottom: 30px;
  transform: rotate(-225deg);
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
</style>
