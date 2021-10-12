<template>
  <div class="container-fluid account-bg m-0 p-0">
    <div class="container m-0">
      <!-- toggle button -->
      <div class="container pt-5">
        <div class="button-container">
          <div class="row">
            <div class="col">
              <div
                class="
                  toggle-btn-title
                  switch-toggle-btn
                  pl-4
                  pr-2
                  pt-2
                  pb-2
                  mt-1
                  mb-1
                  ml-2
                "
              >
                <div class="toggle-btn-title-color text-center">Share</div>
              </div>
            </div>
            <div class="col">
              <div class="toggle-btn-title pt-2">Rewards</div>
            </div>
          </div>
        </div>
      </div>

      <!-- rewards -->
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                container
                refer-friend-container
                pl-5
                mt-5
                pt-4
                pb-5
                text-center
              "
            >
              <img
                src="@/assets/images/account-settings-refer-friend/trophy.png"
                class="reward-trophy img-fluid"
                alt=""
              />
              <div class="reward-title text-center pt-4">
                <div>Want to earn your first free month?</div>
                <div>Invite a friend!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                container
                refer-points-container
                pl-5
                ml-4
                pt-5
                pb-5
                mb-5
                mr-5
                dark-bg
              "
            >
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col">
                  <div class="rewards-num">10</div>
                </div>
                <div class="col">
                  <div class="rewards-num">30</div>
                </div>
              </div>
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col">
                  <div class="rewards-txt">Friend(s) who bought</div>
                </div>
                <div class="col">
                  <div class="rewards-txt">FREE months added</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.reward-trophy {
  width: 5rem;
  height: auto;
}

.reward-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  color: #383361;
}

.dark-bg {
  border-radius: 0px 0px 12px 12px;
  background: #463770;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.rewards-num {
  font-family: Poppins;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #fff;
}

.rewards-txt {
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;
  color: #a897d8;
}

.dark-bg {
  background: #463770 !important;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.icon-color {
  color: #fff;
  opacity: 0.5;
}

.promo {
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 500;
  font-size: 9px;
  text-align: right;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  background: #ff0080;
  position: relative;
  bottom: 20px;
  right: 25px;
}

.account-navbar {
  height: auto;
  background: #fff;
  box-shadow: 0px 0px 20px #d6e1f3;
}

.container {
  margin-left: 0px !important;
  margin-right: 0px !important;
  max-width: 1700px !important;
}

.loggedin {
  font-family: Poppins;
  font-weight: normal;
  font-size: 11px;
  text-align: right;
  line-height: 5px;
  color: #5b5970;
}

.username {
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  line-height: 5px;
  text-align: right;
  color: #383361;
}

.account-bg {
  background: #f3f7fe;
  width: 100%;
  height: 100vh;
}

.account-loggedin {
  background: #fff;
}

.my-devices {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.subscription {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.your-account {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.support {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.vertical-line {
  width: 0px;
  height: 149.19px;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.my-account-btn {
  width: 161.68px;
  height: 43.47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #724bfe;
}

.headline-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 2rem;
  line-height: 3.5rem;
  text-align: left;
  color: #383361;
}

.headline-subtitle {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.9rem;
  text-align: left;
  color: #383361;
  opacity: 0.94;
}

/* .headline-txt{
    font-family: Poppins;
    font-weight: normal;
    font-size: 0.9rem;
    text-align: left;
    color: #383361;
    opacity: 0.94; 
} */

.account-info-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 50px;
  text-align: left;
  color: #383361;
}

.account-info-member {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: right;
  color: #3833619c;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-info-date {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  color: #383361;
}

.account-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.row-line {
  width: 555px;
  height: 0px;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.account-subtitle {
  width: 272px;
  height: 23px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-info {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.info-width {
  width: 25rem;
}

.desktop {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 20px;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
  opacity: 0.5;
}

.active-btn {
  width: 101px;
  height: 30px;
  border-radius: 15px;
  background: #e9f9ee;
  font-family: Poppins;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #15c50a;
  border: 1px solid rgba(0, 0, 0, 0);
}

.user-avatar {
  color: #c6cfde;
}

.button-container {
  width: 15rem;
  height: 2.7rem;
  border-radius: 28.5px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.active-toggle-btn {
  width: 6rem;
  border-radius: 0.2rem;
  background: linear-gradient(#a215ff 0%, #7124ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  color: #fff;
}

.switch-toggle-btn {
  width: 6rem;
  border-radius: 1rem;
  background: linear-gradient(#a215ff 0%, #7124ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  color: #fff;
}

.toggle-btn-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.7rem;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.toggle-btn-title-color {
  color: #fff;
}

.refer-friend-container {
  width: 100%;
  /* border-radius: 10px; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.refer-points-container {
  width: 100%;
  /* border-radius: 10px; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.rf-gift {
  width: 10rem;
  height: auto;
}

.rf-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 3rem;
  text-align: left;
  color: #383361;
}

.input-btn {
  width: 100%;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #707070;
  opacity: 0.66;
}

.social-icons * + * {
  margin-left: 0.5rem;
}

.social-icons {
  color: #94a4c1;
}

.rf-link {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.7rem;
  line-height: 2rem;
  text-align: left;
  /* color: #383361; */
  color: #000000;
}

.as-input-email {
  width: 100%;
  border: 1px solid transparent;
}

.link-btn {
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  color: #7b47fc;
}

.reward-rules {
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.9rem;
  text-align: left;
  color: #a163f5;
  border: 1px solid rgba(0, 0, 0, 0);
}

/* modal */

:root {
  --modal-duration: 1s;
  --modal-color: #494f53;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background: rgba(48, 55, 66, 0.9);
  opacity: 0.88;
}

.modal-content {
  margin: 10% auto;
  width: 40%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  animation-name: modalopen;
  animation-duration: var(--modal-duration);
}

.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.download-modal-header {
  padding: 1.5rem;
  background: #f3f7fe;
  border-radius: 10px;
}

.modal-body {
  background: #f3f7fe;
  z-index: 2;
}

.download-modal-footer {
  background: #f3f7fe;
  color: #fff;
  text-align: center;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border-top: 1px solid #dee2e6;
}

.close {
  color: #ccc;
  float: right;
  font-size: 30px;
  color: #fff;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-steps {
  width: 100%;
  background-color: #fff;
}

.circle-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 11px;
  text-align: left;
  color: #383361;
}

.circle-line {
  width: 92.36px;
  height: 0px;
  background: transparent;
  border: 1px solid #bccfec;
}

.circle-check {
  width: 29px;
  height: 28px;
  background: #4ad395;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  color: #fff;
}

.circle-2 {
  width: 28.55px;
  height: 28.55px;
  background: #087bcd;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.circle-3 {
  width: 28.55px;
  height: 28.55px;
  background: #b9cbdb;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.circle-4 {
  width: 28.55px;
  height: 28.55px;
  border-radius: 50%;
  text-align: center;
  background: #bccedf;
  color: #fff;
}

.circles * + * {
  margin-left: 0.7rem;
}

.windows-modal-download {
  width: 12rem;
  height: 113px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 13px 19px rgba(214, 225, 243, 0.64);
}

.windows-modal-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 16px;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.windows-modal-subtitle {
  font-family: Poppins;
  font-weight: 300;
  font-size: 11px;
  line-height: 17px;
  text-align: left;
  color: #383361;
}

.windows-download-btn {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
}

.windows-sendemail-btn {
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  color: #a115ff;
  font-size: 1rem;
}

.close {
  position: absolute;
  right: -2rem;
  width: 4rem;
  top: -2.5rem;
}

.checked-icon {
  text-align: center;
  color: #fff;
  background-color: green;
}

.scan-container {
  width: 15rem;
  height: 8rem;
  background: #fff;
  border-radius: 5px;
}

.modal-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.modal-subtitle {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: left;
  color: #383361;
}

.modal-text {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.modal-points {
  font-family: Poppins;
  font-weight: normal;
  font-size: 11px;
  line-height: 19px;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.icon-color {
  color: #fff;
  opacity: 0.5;
}

.promo {
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 500;
  font-size: 9px;
  text-align: right;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10px;
  background: #ff0080;
  position: relative;
  bottom: 20px;
  right: 25px;
}

.loggedin {
  font-family: Poppins;
  font-weight: normal;
  font-size: 11px;
  text-align: right;
  line-height: 5px;
  color: #5b5970;
}

.username {
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  line-height: 5px;
  text-align: right;
  color: #383361;
}

.account-bg {
  background: #f3f7fe;
  width: 100%;
  height: 100vh;
}

.account-navbar {
  width: 100%;
  background: #fff;
}

.account-headline {
  width: 100%;
  background: #fff;
  border-radius: 5px;
}

.my-devices {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.subscription {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.your-account {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.support {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
  border-radius: 10px;
}

.vertical-line {
  width: 0px;
  height: 149.19px;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.my-account-btn {
  width: 161.68px;
  height: 43.47px;
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #724bfe;
}

.headline-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  color: #f75caa;
}

.headline-subtitle {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.8rem;
  text-align: left;
  color: #383361;
  opacity: 0.94;
}

.headline-txt {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: left;
  color: #5c7bf7;
}

.price {
  font-family: Poppins;
  font-weight: 500;
  font-size: 25px;
  text-align: right;
  line-height: 0.7rem;
  color: #7c859b;
}

.new-price {
  font-family: Poppins;
  font-weight: 600;
  font-size: 44px;
  text-align: right;
  color: #f75caa;
}

.upgrade-btn {
  border-radius: 10px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  color: #fff;
  font-family: Poppins;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
}

.account-info-title {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 50px;
  text-align: left;
  color: #383361;
}

.account-info-member {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: right;
  color: #3833619c;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-info-date {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  text-align: left;
  color: #383361;
}

.account-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 34px;
  text-align: left;
  color: #383361;
}

.row-line {
  width: 100%;
  background: transparent;
  border: 1px solid #d4e3fc;
}

.account-subtitle {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
}

.account-info {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 1rem;
  text-align: left;
  color: #383361;
}

.desktop {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 20px;
  text-align: left;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
  opacity: 0.5;
}

.active-btn {
  width: 101px;
  height: 30px;
  border-radius: 15px;
  background: #e9f9ee;
  font-family: Poppins;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #15c50a;
  border: 1px solid rgba(0, 0, 0, 0);
}

.user-avatar {
  color: #c6cfde;
}

/* dropdown */

.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a:hover,
.dropdown:hover .dropbtn {
  /* background-color: red; */
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 307px;
  height: 226px;
  border-radius: 0px 0px 30px 30px;
  background: #fff;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 992px) {
  .rewards-txt {
    font-size: 0.6rem;
  }

  .rewards-num {
    font-size: 2rem;
  }

  .reward-title {
    font-size: 1.2rem;
  }
}
</style>
