<template>
  <!-- headlines for promo -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-2 ml-3 pt-2 pb-2 pl-5">
        <img
          src="@/assets/images/account-settings-refer-friend/open-gift.png"
          class="open-gift mob-res-gift img-fluid"
          alt=""
        />
      </div>
      <div class="col-md-6 pt-3">
        <div class="pt-2">
          <div class="headline-title">Refer friends and both get gifts!</div>
          <div class="headline-subtitle mr-5">
            Gift xx days to weach you invite, and collect more than a year of
            free Swoshs subscription for yourself!
          </div>
          <div class="headline-txt pt-2">
            Check our <a href="#"> Reward Rules </a>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-2 pt-4"></div>
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

.headline-txt {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: left;
  color: #5c7bf7;
}

@media screen and (max-width: 992px) {
  .headline-title {
    font-size: 1.2rem !important;
    line-height: 1.5rem !important;
  }

  .headline-subtitle {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  .mob-res-gift {
    width: 5rem !important;
  }
}
</style>
