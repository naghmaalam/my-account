<template>
  <div class="container account-headline p-4 d-none d-lg-block">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-2 ml-3 pt-2 pb-2">
          <img
            src="@/assets/images/my-account/gift.png"
            alt=""
            class="img-fluid mob-res-img"
          />
        </div>
        <div class="col-md-4 pt-3">
          <div class="promos">
            <div class="headline-title">{{ $t("promo_headline") }}</div>
            <div class="headline-subtitle">
              {{ $t("promo_info") }}
            </div>
            <div class="headline-txt">
              {{ $t("learn_more_about_swoshs") }} >
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="pt-4">
            <div class="price">$9.99</div>
            <div class="new-price">$9.99</div>
          </div>
        </div>
        <a href="payment">
          <div class="col-md-2 pt-4">
            <button class="upgrade-btn pt-2 pb-2 pr-4 pl-4">
              {{ $t("upgrade") }}
            </button>
          </div>
        </a>
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
.account-headline {
  width: 100%;
  background: #fff;
  border-radius: 5px;
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
  border: none;
}

@media screen and (max-width: 992px) {
  .price {
    text-align: left;
  }

  .new-price {
    text-align: left;
  }

  .mob-res-img {
    padding-top: 1.5rem !important;
  }

  .upgrade-btn {
    margin-bottom: 1.5rem !important;
  }
}
</style>
