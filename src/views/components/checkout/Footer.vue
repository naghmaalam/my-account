<template>
  <footer id="as-footer" class="footer__inner">
    <div class="container-fluid map-image">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="as-footer-box">
              <h3 class="mt-3">{{ $t("vpn_name") }}</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="https://swoshsvpn.com/about-swoshs">{{
                    $t("about_us")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/benefits">
                    {{ $t("benefits") }}
                  </a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/free-trial">{{
                    $t("free_trial_trial")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/tutorials">{{
                    $t("vpn_tutorial")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/review">{{ $t("reviews") }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col">
            <div class="as-footer-box">
              <h3 class="mt-3">{{ $t("product") }}</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="https://swoshsvpn.com/download-vpn-for-android">{{
                    $t("vpn_for_android")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/download-vpn-for-ios">{{
                    $t("vpn_for_ios")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/download-vpn-for-windows">{{
                    $t("vpn_for_windows")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/download-vpn-for-mac">{{
                    $t("vpn_for_mac")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/download-vpn-for-linux">{{
                    $t("vpn_for_linux")
                  }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col">
            <div class="as-footer-box">
              <h3 class="mt-3">{{ $t("programs") }}</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="https://swoshsvpn.com/refer-a-friend">{{
                    $t("refer_a_friend")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/coming-soon">{{
                    $t("affiliates")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/coming-soon">{{
                    $t("influencer")
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="as-footer-box">
              <h3 class="mt-3">{{ $t("information") }}</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="https://swoshsvpn.com/my-account/#/purchase">{{
                    $t("pricing")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/blog">{{ $t("blog") }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/privacy-policy">{{
                    $t("privacy_policy")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/terms-and-conditions">{{
                    $t("terms_and_conditiond")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/contact-us">{{
                    $t("contact")
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-2">
            <div class="as-footer-box">
              <h3 class="mt-3">{{ $t("help") }}</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="https://swoshsvpn.com/faq">{{ $t("faqs") }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/support">{{
                    $t("support_center")
                  }}</a>
                </li>
                <li>
                  <a href="https://swoshsvpn.com/money-back-guarantee">{{
                    $t("money_back_guarantee")
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="conatiner-fluid row as_copy copyright">
    <div class="col">
      <div class="text-center mt-4">
        <p class="swoshs-link">
          &copy; <a href="https://swoshsvpn.com">{{ $t("vpn_name") }}</a>
          {{ new Date().getFullYear() }}
          | {{ $t("all_right_reserved") }}
        </p>
      </div>
    </div>

    <div class="col">
      <div class="mt-4">
        <div class="row social_icons text-right">
          <p class="swoshs-link mr-3">{{ $t("connect_with_us") }}</p>
          <div class="icons">
            <a href="https://twitter.com/SwoshsV" target="new"
              ><i class="fab fa-twitter"></i
            ></a>
          </div>
          <div class="icons">
            <a href="https://www.facebook.com/swoshsvpn/">
              <i class="fab fa-facebook"></i
            ></a>
          </div>
          <div class="icons text-center">
            <a href="https://www.instagram.com/swoshsvpn/" target="new"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <div class="icons">
            <a href="https://twitter.com/SwoshsV" target="new"
              ><i class="fab fa-pinterest"></i
            ></a>
          </div>
          <div class="icons">
            <a
              href="https://www.youtube.com/channel/UCTUyqPGnAdBaZFO3lMG5FHw"
              target="new"
              ><i class="fab fa-youtube"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social_icons * + * {
  margin-right: 1rem;
}

.icons {
  background-color: #22183d !important;
  width: 30px;
  height: 30px;
  text-align: center;
  padding-top: 4px;
  border-radius: 100px;
}

.copyright {
  background-color: #110a23;
  display: flex;
  justify-content: space-around;
}

.map-image {
  background-image: url("~@/assets/images/payment/map.png");
  background-repeat: no-repeat;
  // background-position: center center;
  background-position: center top;
  padding-top: 7rem;
  padding-bottom: 7rem;
}

.icons a {
  text-decoration: none !important;
  color: #ffffff !important;
}

.swoshs-link {
  color: #b2b9c1 !important;
  font-size: 15px;
  font-weight: 600;
}

.swoshs-link a {
  text-decoration: none !important;
  color: #b2b9c1 !important;
  font-size: 15px;
  font-weight: 600;
}

.swoshs-link a:hover {
  color: #ffffff !important;
}
</style>
