<template>
  <div class="container-fluid account-bg m-0 p-0 hide-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription pt-5">My Subscription(s)</div>
            <div class="d-flex flex-row">
              <a href="subscription.html">
                <div class="inactive-subscription pr-4 pl-4">
                  My Subscription
                </div>
              </a>
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">Order History</div>
                <div class="selected-borderline"></div>
              </div>
            </div>
          </div>
          <div class="subscription-borderline"></div>
        </div>
      </div>

      <!-- table -->
      <div class="container mt-3">
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

      <div class="container table-content mt-3 pt-3 pb-3">
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-1 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="subscription-active-btn pt-1 pb-1 ml-5">Paid</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
          </div>
        </div>
      </div>

      <div class="container table-content mt-3 pt-3 pb-3">
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-6 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="refunded-btn pt-1 pb-1 ml-5">Refunded</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
          </div>
        </div>
      </div>

      <div class="container table-content mt-3 pt-3 pb-3">
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-6 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="inactive-btn pt-1 pb-1 ml-5">Unpaid</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mob responsive design -->
  <div class="container-fluid account-bg m-0 p-0 hide-desktop show-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription pt-5">My Subscription(s)</div>
            <div class="d-flex flex-row">
              <a href="subscription.html">
                <div class="inactive-subscription pr-4 pl-4">
                  My Subscription
                </div>
              </a>
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">Order History</div>
                <div class="selected-borderline"></div>
              </div>
            </div>
          </div>
          <div class="subscription-borderline"></div>
        </div>
      </div>

      <div class="conatiner">
        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">
              <span class="mob-line-height"> Refence Number </span>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Subscription</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-1 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-6 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-6 Months Subscription
            </div>
          </div>
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Order Status</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="subscription-active-btn pt-1 pb-1">Paid</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="refunded-btn pt-1 pb-1">Refunded</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="inactive-btn pt-1 pb-1">Unpaid</div>
            </div>
          </div>
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Payment Provider</div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Order Amount</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Date of Order</div>
          </div>
          <div class="col">
            <div class="table-subtitle text-center">12/19/2021</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
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
.borderline {
  width: auto;
  height: 0px;
  background: transparent;
  border: 1px solid #fff;
  opacity: 0.19;
}

.account-bg {
  background: #f3f7fe;
  width: 100%;
  height: 100vh;
}

.subscription {
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

.account-subscription {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  color: #383361;
}

.active-subscription {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 3rem;
  text-align: center;
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

.subscription-borderline {
  width: 100%;
  background: transparent;
  border: 1px solid #93a9d1;
}

.selected-borderline {
  width: auto;
  height: 0.4rem;
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
  border: 1px solid rgba(0, 0, 0, 0);
}

.table-title {
  font-family: Poppins;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  color: #463770;
}

.table-subtitle {
  font-family: Poppins;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: center;
  color: #383361;
  opacity: 0.94;
}

.table-subtitle-bold {
  font-family: Poppins;
  font-weight: 800;
  font-size: 0.8rem;
  text-align: left;
  color: #383361;
}

.table-content {
  background: #fff;
  filter: drop-shadow(0px 8px 14px rgba(214, 225, 243, 0.64));
}

.inactive-btn {
  width: 5rem;
  height: auto;
  border-radius: 10px;
  background: #f9e9e9;
  font-family: Poppins;
  font-weight: 600;
  font-size: 9px;
  text-align: center;
  color: #c50a0a;
  border: 1px solid rgba(0, 0, 0, 0);
}

.subscription-active-btn {
  width: 5rem;
  height: auto;
  border-radius: 10px;
  background: #e9f9ee;
  font-family: Poppins;
  font-weight: 600;
  font-size: 9px;
  text-align: center;
  color: #15c50a;
  border: 1px solid rgba(0, 0, 0, 0);
}

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
}
</style>
