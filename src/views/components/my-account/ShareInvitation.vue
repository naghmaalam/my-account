<template>
  <div class="container-fluid m-0 p-0">
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
              <div class="toggle-btn-title pt-2" @click="redirect('rewards')">
                Rewards
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- refer friend -->
      <div class="container refer-friend-container mt-5 pb-5">
        <div class="row">
          <div class="col text-center pt-5">
            <img
              src="@/assets/images/account-settings-refer-friend/refer-a-friend.png"
              class="rf-gift img-fluid"
              alt=""
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 send-invitation-email">
            <div class="rf-title">Send Invitaion Email</div>
            <div
              class="
                input-btn
                d-flex
                flex-row
                justify-content-between
                pt-1
                pb-1
              "
            >
              <input
                class="as-input-email"
                type="text"
                name="email"
                id="email"
                placeholder="Your Friend email address"
              />
              <div class="active-toggle-btn text-center mr-1">Send</div>
            </div>
          </div>
          <div class="col-md-6 share pl-5">
            <div class="rf-title">Share It</div>
            <div
              class="
                input-btn
                d-flex
                flex-row
                justify-content-between
                align-items-center
              "
            >
              <i class="flaticon-link pl-3"></i>
              <div class="rf-link">https://swoshsvpn.com/yo/9i4j6v2r</div>
              <div class="link-btn pl-2 pr-2 mr-1">Copy</div>
            </div>
          </div>
        </div>
        <div class="rf-title text-center pt-5">
          Or Share it directly in social media
        </div>
        <div
          class="
            social-icons
            d-flex
            flex-row
            justify-content-center
            align-items-center
            pt-2
          "
        >
          <i class="flaticon-facebook"></i>
          <i class="flaticon-twitter-sign"></i>
          <i class="flaticon-instagram"></i>
          <i class="flaticon-youtube-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const redirect = (page) => {
      router.push({ name: page });
    };
    return {
      redirect,
    };
  },
};
</script>
<style scoped>
.refunded-btn {
  width: 84px;
  height: 25px;
  border-radius: 12.5px;
  background: #e9f7f9;
  font-family: Poppins;
  font-weight: 600;
  font-size: 9px;
  text-align: center;
  color: #00ace2;
  border: 1px solid rgba(0, 0, 0, 0);
}

.order-history-empty {
  width: 100%;
  background: #fff;
}

.order-empty-title {
  font-family: Poppins;
  font-weight: normal;
  font-size: 0.7rem;
  text-align: center;
  color: #383361;
  opacity: 0.94;
}

.social-icons * + * {
  margin-left: 0.5rem;
}

.social-icons {
  color: #94a4c1;
}

.sidebar {
  width: auto;
  background: #463770;
  margin-left: 0px !important;
}

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
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
  line-height: 2.5rem;
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
  border-radius: 10px;
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

@media screen and (max-width: 992px) {
  .share {
    padding-left: 1rem !important;
  }

  .rf-title {
    font-size: 1rem;
  }

  .flaticon-link {
    padding-left: 0rem !important;
  }

  .rf-link {
    font-size: 0.6rem;
  }

  .as-input-email {
    font-size: 0.8rem;
  }

  .link-btn {
    font-size: 0.8rem;
    padding-left: 0.25rem !important;
    padding-right: 00.25rem !important;
  }
}
</style>
