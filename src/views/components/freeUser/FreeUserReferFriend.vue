<template>
  <div class="conatainer">
    <div class="fu-rf-bg"></div>
  </div>
  <!-- <div class="container-fluid m-0 p-0">
    <div class="container-fluid m-0">
      <div class="account-header d-flex justify-content-center">
        <div class="container pt-5 mt-5 pl-5 ml-5">
          <div class="row ml-5 pl-5">
            <div class="col">
              <div class="container">
                <img
                  src="@/assets/images/account-settings-refer-friend/free-user-rf.png"
                  class="free-user-rf img-fluid"
                  alt=""
                />
                <div class="fu-rf-title text-center pt-4">
                  To get a reward please upgrade your account
                </div>
                <div class="fu-rf-subtitle pt-5">
                  Your current package is not supported on this feature
                </div>
                <div class="fu-rf-btn pt-5">
                  <div class="upgrade-btn">Upgrade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.free-user-rf {
  width: 100%;
}

.fu-rf-bg {
  width: 50%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 14px rgba(214, 225, 243, 0.64);
}

.fu-rf-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2rem;
  text-align: center;
  color: #383361;
  position: absolute;
  top: 50%;
  left: 50%;
  /* width: 35rem; */
  transform: translate(-50%, -50%);
}

.fu-rf-subtitle {
  font-family: Poppins;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.2rem;
  text-align: center;
  color: #383361;
  border: 1px solid rgba(0, 0, 0, 0);
  position: absolute;
  top: 60%;
  left: 50%;
  /* width: 20rem; */
  transform: translate(-50%, -50%);
}

.fu-rf-btn {
  position: absolute;
  top: 70%;
  left: 50%;
  /* width: 35rem; */
  transform: translate(-50%, -50%);
}

.upgrade-btn {
  /* width: 161px;
    height: 53px; */
  width: 6rem;
  border-radius: 10px;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  color: #fff;
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
}
</style>
