<template>
  <div class="container account-headline mt-5">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-2 ml-3 pt-2 pb-2">
          <img
            src="@/assets/images/my-account/gift.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-4 pt-3">
          <div class="promos">
            <div class="headline-title">Sample headline for promos</div>
            <div class="headline-subtitle">
              Stay 1 step ahead of cybercrime threats like phishing and online
              tracking with Prime
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
}

@media screen and (max-width: 992px) {
  .price {
    text-align: left;
  }

  .new-price {
    text-align: left;
  }
}
</style>
