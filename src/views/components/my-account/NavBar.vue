<template>
  <div class="container-fluid account-bg m-0 p-0">
    <div class="container-fluid m-0">
      <div class="row">
        <div
          class="
            account-navbar
            col
            d-flex
            flex-row
            justify-content-end
            align-items-end
          "
        >
          <div class="d-flex flex-column justify-content-end align-items-end">
            <p class="loggedin pt-3">Logged in as</p>
            <p class="username pb-1">username@swoshsvpn.com</p>
          </div>
          <div class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">
              <i
                class="
                  flaticon-round-account-button-with-user-inside
                  user-avatar
                  mb-3
                  pl-3
                  pr-4
                "
              ></i>
            </a>
            <div class="dropdown-content">
              <a href="account-settings.html">
                <div class="d-flex flex-row justify-content-around">
                  <img
                    src="@/assets/images/account-settings/cogwheel.png"
                    class="img-fluid swoshs-logo"
                    alt=""
                  />
                  <div>Account Settings</div>
                  <i class="flaticon-arrow-angle-pointing-to-right"></i>
                </div>
              </a>
              <a href="#">
                <div class="d-flex flex-row justify-content-around">
                  <img
                    src="@/assets/images/account-settings/lifesaver.png"
                    class="img-fluid swoshs-logo"
                    alt=""
                  />
                  <div>Support</div>
                  <div class="d-flex justify-content-end">
                    <i class="flaticon-arrow-angle-pointing-to-right"></i>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="d-flex flex-row justify-content-around">
                  <img
                    src="@/assets/images/account-settings/faq.png"
                    class="img-fluid swoshs-logo"
                    alt=""
                  />
                  <div>Privacy</div>
                  <i class="flaticon-arrow-angle-pointing-to-right"></i>
                </div>
              </a>
              <a href="#">
                <div class="d-flex flex-row justify-content-around">
                  <img
                    src="@/assets/images/account-settings/logout.png"
                    class="img-fluid swoshs-logo"
                    alt=""
                  />
                  <div>Logout</div>
                  <i class="flaticon-arrow-angle-pointing-to-right"></i>
                </div>
              </a>
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

.user-avatar {
  color: #c6cfde;
  /* font-size: 3rem; */
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
  .username {
    font-size: 10px;
    line-height: 5px;
  }

  .loggedin {
    font-size: 7px;
    line-height: 5px;
  }

  .user-avatar {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}
</style>
