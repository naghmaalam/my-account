<template>
  <Main>
    <div class="container-fluid account-bg m-0 p-0">
      <div class="container-fluid m-0">
        <!-- headlines for promo -->
        <div class="container account-headline mt-5">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-2 ml-3 pt-2 pb-2">
                <img
                  src="assets/images/my-account/gift.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="col-md-4 pt-3">
                <div class="promos">
                  <div class="headline-title">Sample headline for promos</div>
                  <div class="headline-subtitle">
                    Stay 1 step ahead of cybercrime threats like phishing and
                    online tracking with Prime
                  </div>
                  <div class="headline-txt">Learn more about Swoshs ></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="pt-4">
                  <div class="price">$9.99</div>
                  <div class="new-price">$9.99</div>
                </div>
              </div>
              <div class="col-md-2 pt-4">
                <button class="upgrade-btn pt-2 pb-2 pr-4 pl-4">Upgrade</button>
              </div>
            </div>
          </div>
        </div>

        <!-- member since -->
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-6">
              <div class="account-info-title">Howdy!</div>
            </div>
            <div class="col-md-6">
              <div class="account-info-member">
                Member since:
                <span class="account-info-date"> 04/07/2021 </span>
              </div>
            </div>
          </div>
        </div>

        <!-- my devices, subscription, your account, support -->
        <div class="container account-content gap-3">
          <div class="row">
            <!-- my devices -->
            <div class="my-devices col-md-6 my-2">
              <div class="account-title pt-3 px-3">My Devices</div>
              <div class="row-line mt-2"></div>
              <div
                class="
                  d-flex
                  flex-row
                  justify-content-around
                  align-items-center
                  mb-4
                "
              >
                <div class="recently-connected d-flex flex-column">
                  <div class="account-subtitle">Recently Connected (6)</div>
                  <div
                    class="
                      desktop-connected
                      d-flex
                      flex-row
                      justify-content-around
                      pt-4
                    "
                  >
                    <img
                      src="assets/images/my-account/windows.png"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="d-flex flex-column">
                      <div class="desktop pl-3">Desktop-MKEUF6J</div>
                      <div class="account-info pl-3">
                        Last Signin: 06/26/2021
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vertical-line mt-3"></div>
                <button class="my-account-btn">View More</button>
              </div>
            </div>

            <!-- Subscription -->
            <div class="subscription col-md-6 my-2">
              <div class="account-title pt-3 px-3">Subscription</div>
              <div class="row-line mt-2"></div>
              <div
                class="
                  d-flex
                  flex-row
                  justify-content-around
                  align-items-center
                  mb-4
                "
              >
                <img
                  src="assets/images/my-account/shield.png"
                  class="img-fluid pt-4"
                  alt=""
                />
                <div class="recently-connected d-flex flex-column">
                  <div
                    class="
                      desktop-connected
                      d-flex
                      flex-row
                      justify-content-around
                      pt-4
                    "
                  >
                    <div class="d-flex flex-column">
                      <div class="account-subtitle pb-4">Premium Package</div>
                      <div class="desktop pb-3">1 Month Subscription</div>
                      <button class="my-account-btn">View Details</button>
                    </div>
                  </div>
                </div>
                <div class="active-btn">Active</div>
              </div>
            </div>
          </div>

          <!-- your account -->
          <div class="row gap-3">
            <div class="your-account col-md-6 my-2">
              <div class="account-title pt-3 px-3">Your Account</div>
              <div class="row-line mt-2"></div>
              <div
                class="
                  d-flex
                  flex-row
                  justify-content-around
                  align-items-center
                "
              >
                <img
                  src="assets/images/my-account/personal-computer.png"
                  class="img-fluid mb-5"
                  alt=""
                />
                <div class="recently-connected d-flex flex-column">
                  <div
                    class="
                      desktop-connected
                      d-flex
                      flex-row
                      justify-content-around
                      pt-4
                      pb-3
                    "
                  >
                    <div class="d-flex flex-column">
                      <div class="account-subtitle pl-3">Account Section</div>
                      <div class="account-info pb-4 mt-3 pl-3">
                        Manage your info, edit change your email or password and
                        check settings to keep you account secure
                      </div>
                      <button class="my-account-btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- support -->
            <div class="support col-md-6 my-2">
              <div class="account-title pt-3 px-3">Support</div>
              <div class="row-line mt-2"></div>
              <div
                class="
                  d-flex
                  flex-row
                  justify-content-around
                  align-items-center
                "
              >
                <img
                  src="assets/images/my-account/life-saver.png"
                  class="img-fluid pb-4"
                  alt=""
                />
                <div class="recently-connected d-flex flex-column">
                  <div
                    class="
                      desktop-connected
                      d-flex
                      flex-row
                      justify-content-around
                      pt-4
                    "
                  >
                    <div class="d-flex flex-column">
                      <div class="account-subtitle pl-3">Need Help?</div>
                      <div class="account-info pb-4 mt-3 pl-3">
                        If you have any Swoshs VPN-related inquiries, get in
                        touch with our knowledgeable colleagues from Technical
                        Support
                      </div>
                      <button class="my-account-btn">Contact Support</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Main>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import Main from "@/views/layouts/Main.vue";

export default defineComponent({
  components: {
    Main,
  },
  setup() {
    const state = reactive({
      welcome: "welcome to the vue.js",
    });

    return {
      state,
    };
  },
});
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

.sidebar {
  width: auto;
  height: 100vh;
  background: #463770;
  margin-left: 0px !important;
}

.dashboard h5 {
  font-family: Poppins;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: left;
  color: #fff;
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.dashboard p {
  width: 200px;
  height: auto;
  font-family: Poppins;
  font-weight: 300;
  font-size: 0.7rem;
  line-height: 17px;
  text-align: left;
  color: rgba(255, 255, 255, 0.88);
}

.borderline {
  width: auto;
  height: 0px;
  background: transparent;
  border: 1px solid #fff;
  opacity: 0.19;
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
</style>
