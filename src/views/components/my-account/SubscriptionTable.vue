<template>
  <div class="container-fluid m-0 p-0 hide-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription pt-5">My Subscription(s)</div>
            <div class="d-flex flex-row">
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">My Subscription</div>
                <div class="selected-borderline"></div>
              </div>
              <a href="order-history.html">
                <div class="inactive-subscription pr-4 pl-4">Order History</div>
              </a>
            </div>
            <div class="subscription-borderline"></div>
          </div>
        </div>
      </div>
      <!-- Devices Table -->
      <div class="container mt-3">
        <div class="row">
          <div class="col">
            <div class="table-title">Refence Number</div>
          </div>
          <div class="col">
            <div class="table-title">Expires</div>
          </div>
          <div class="col">
            <div class="table-title">Subscription</div>
          </div>
          <div class="col">
            <div class="table-title">Status</div>
          </div>
          <div class="col">
            <div class="table-title">Payment Provider</div>
          </div>
          <div class="col">
            <div class="table-title">Renewal Fee</div>
          </div>
          <div class="col">
            <div class="table-title">Action</div>
          </div>
        </div>
      </div>
      <div class="container table-content mt-3 pt-3 pb-3">
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-1 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="subscription-active-btn pt-1 pb-1 ml-5">Active</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <button class="my-account-btn">Recharge</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container table-content mt-3 pt-3 pb-3">
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">5432178943</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              Premium-6 Months Subscription
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="inactive-btn pt-1 pb-1 ml-5">Inactive</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">Bitcoin</div>
          </div>
          <div class="col">
            <div class="table-subtitle">$20.00</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <button class="my-account-btn">Renew</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mob design -->
  <div class="container-fluid account-bg m-0 p-0 hide-desktop show-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription pt-3">My Subscription(s)</div>
            <div class="d-flex flex-row">
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">My Subscription</div>
                <div class="selected-borderline"></div>
              </div>
              <a href="order-history.html">
                <div class="inactive-subscription pr-4 pl-4">Order History</div>
              </a>
            </div>
            <div class="subscription-borderline"></div>
          </div>
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
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Expires</div>
          </div>
          <div class="col">
            <div class="table-subtitle text-center">12/19/2021</div>
          </div>
          <div class="col">
            <div class="table-subtitle">12/19/2021</div>
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
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Status</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="subscription-active-btn">Active</div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="inactive-btn pt-1 pb-1 ml-5">Inactive</div>
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
        </div>

        <div class="row mob-res-center table-content mb-2">
          <div class="col">
            <div class="table-title">Renewal Fee</div>
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
            <div class="table-title">Action</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <button class="my-account-btn">Recharge</button>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <button class="my-account-btn">Renew</button>
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
.account-subscription {
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 4rem;
  text-align: left;
  color: #383361;
}

.hide-desktop {
  display: none;
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

.active-button {
  background: linear-gradient(#a215ff 0%, #5f29ff 100%);
}

.borderline {
  width: auto;
  height: 0px;
  background: transparent;
  border: 1px solid #fff;
  opacity: 0.19;
}

/* .account-bg {
  background: #f3f7fe;
  width: 100%;
  height: 100vh;
} */

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

.user-avatar {
  color: #c6cfde;
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
    font-size: 0.7rem;
    line-height: 3rem;
    text-align: left !important;
  }

  .table-subtitle-bold {
    text-align: ;
  }
  /* 
  .table-content {
    padding-top: 0rem !important;
  } */

  .account-subscription {
    font-size: 1rem;
    padding-top: 2rem !important;
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

  .my-account-btn {
    /* width: 161.68px;
    height: 43.47px; */
    border-radius: 10px;
    background: transparent;
    border: 1px solid #7b47fc;
    font-family: Poppins;
    font-weight: bold;
    font-size: 0.5rem;
    line-height: 24px;
    text-align: center;
    color: #724bfe;
  }

  .inactive-btn {
    padding-bottom: 0rem !important;
    padding-top: 0rem !important;
    margin-left: 0rem !important;
  }
}
</style>
