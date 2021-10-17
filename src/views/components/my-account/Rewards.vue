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
                <div
                  class="toggle-btn-title-color text-center"
                  @click="redirect('referfriend')"
                >
                  Share
                </div>
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

.container {
  margin-left: 0px !important;
  margin-right: 0px !important;
  max-width: 1700px !important;
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
