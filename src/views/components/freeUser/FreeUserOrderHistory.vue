<template>
  <div class="container-fluid m-0 p-0">
    <div class="container-fluid m-0">
      <!-- Headings of the table -->
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription pt-5">My Subscription(s)</div>
            <div class="d-flex flex-row">
              <div class="inactive-subscription pr-4 pl-4">My Subscription</div>

              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">Order History</div>
                <div class="selected-borderline"></div>
              </div>
            </div>
          </div>
          <div class="subscription-borderline"></div>
        </div>
      </div>
      <!-- Devices Table -->
      <div class="container mt-3 mob-res-hide">
        <div class="row">
          <div class="col">
            <div class="table-title">Order Number</div>
          </div>
          <div class="col">
            <div class="table-title">Subscription</div>
          </div>
          <div class="col">
            <div class="table-title">Order Status</div>
          </div>
          <div class="col">
            <div class="table-title">Payment Provider</div>
          </div>
          <div class="col">
            <div class="table-title">Order Amount</div>
          </div>
          <div class="col">
            <div class="table-title">Date of Order</div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="
            container
            col-md-8
            order-history-empty
            text-center
            pt-5
            pb-5
            mt-2
          "
        >
          <img
            src="@/assets/images/subscription/empty.png"
            alt="order-history-empty"
            class="pt-5 pb5"
          />
          <div class="order-empty-title pt-3">
            No information is available for this page
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

.account-subscription {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  color: #383361;
}

.inactive-subscription {
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 3rem;
  text-align: center;
  color: #a29fbf;
}

.active-subscription {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 3rem;
  text-align: center;
  color: #383361;
}

.selected-borderline {
  width: auto;
  height: 0.4rem;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
}

.subscription-borderline {
  width: 100%;
  background: transparent;
  border: 1px solid #93a9d1;
}

@media screen and (max-width: 992px) {
  .table-title {
    font-family: Poppins;
    font-weight: bold;
    font-size: 0.7rem;
    line-height: 3rem;
    text-align: left;
    color: #463770;
  }

  .show-mobile {
    display: block;
  }

  .hide-mobile {
    display: none;
  }

  .row {
    flex-wrap: none !important;
  }

  * {
    box-sizing: none !important;
  }

  .table-subtitle {
    font-size: 0.5rem !important;
    line-height: 3rem;
    text-align: left !important;
  }

  .table-subtitle-bold {
    text-align: ;
  }

  .account-subscription {
    font-size: 1.2rem;
  }

  .active-subscription {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

  .inactive-subscription {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .table-subtitle {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  .mob-res-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .table-title span {
    line-height: 2px;
  }

  .inactive-btn {
    padding-bottom: 0rem !important;
    padding-top: 0rem !important;
    margin-left: 0rem !important;
    width: 4rem;
  }

  .subscription-active-btn {
    width: 4rem;
  }

  .refunded-btn {
    width: 4rem;
  }

  .mob-res-hide {
    display: none;
  }
}
</style>
