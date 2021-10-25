<template>
  <div class="container-fluid account-bg m-0 p-0 hide-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription pt-5">
              {{ $t("my_subscriptions") }}
            </div>
            <div class="d-flex flex-row">
              <div
                class="inactive-subscription pr-4 pl-4"
                @click="redirect('subscription')"
              >
                {{ $t("my_subscription") }}
              </div>
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">
                  {{ $t("order_history") }}
                </div>
                <div class="selected-borderline"></div>
              </div>
            </div>
          </div>
          <div class="subscription-borderline"></div>
        </div>
      </div>

      <!-- table -->
      <div
        class="container mt-3"
        v-for="headings in headingTitles"
        :key="headings"
      >
        <div class="row">
          <div class="col">
            <div class="table-title">{{ headings.titleOrderNum }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headings.titleSubs }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headings.titleStatus }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headings.titlePayment }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headings.titleAmount }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headings.titleDate }}</div>
          </div>
        </div>
      </div>

      <!-- table content -->

      <div
        class="container table-content mt-3 pt-3 pb-3"
        v-for="items in tableItems"
        :key="items"
      >
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">{{ items.orderNum }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              {{ items.subscription }}
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div
                class="subscription-active-btn pt-1 pb-1 ml-5"
                :class="{
                  'subscription-active-btn': items.orderStatus === 'paid',
                  'refunded-btn': items.orderStatus === 'Refunded',
                  'inactive-btn': items.orderStatus === 'unpaid',
                }"
              >
                {{ items.orderStatus }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ items.paymentProvider }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ items.orderAmount }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ items.orderDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mob responsive design -->
  <div class="container-fluid account-bg m-0 p-0 d-md-none show-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription">
              {{ $t("my_subscriptions") }}
            </div>
            <div class="d-flex flex-row">
              <div
                class="inactive-subscription pr-4 pl-4"
                @click="redirect('subscription')"
              >
                {{ $t("my_subscription") }}
              </div>
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">
                  {{ $t("order_history") }}
                </div>
                <div class="selected-borderline"></div>
              </div>
            </div>
          </div>
          <div class="subscription-borderline"></div>
        </div>
      </div>

      <!-- order table  -->

      <div
        class="conatiner table-content pl-3"
        v-for="items in tableItems"
        :key="items"
      >
        <div v-for="headings in headingTitles" :key="headings">
          <div class="row mob-res-center mb-2">
            <div class="col">
              <div class="table-title">
                <span class="mob-line-height">
                  {{ headings.titleOrderNum }}
                </span>
              </div>
            </div>
            <div class="col">
              <div class="table-subtitle">{{ items.orderNum }}</div>
            </div>
          </div>

          <div class="row mob-res-center mb-2">
            <div class="col">
              <div class="table-title">{{ headings.titleSubs }}</div>
            </div>
            <div class="col">
              <div class="table-subtitle table-subtitle-bold">
                {{ items.subscription }}
              </div>
            </div>
          </div>

          <div class="row mob-res-center mb-2">
            <div class="col">
              <div class="table-title">{{ headings.titleStatus }}</div>
            </div>
            <div class="col">
              <div class="table-subtitle">
                <div class="subscription-active-btn pt-1 pb-1">
                  {{ items.orderStatus }}
                </div>
              </div>
            </div>
          </div>

          <div class="row mob-res-center mb-2">
            <div class="col">
              <div class="table-title">{{ headings.titlePayment }}</div>
            </div>
            <div class="col">
              <div class="table-subtitle">{{ items.paymentProvider }}</div>
            </div>
          </div>

          <div class="row mob-res-center mb-2">
            <div class="col">
              <div class="table-title">{{ headings.titleAmount }}</div>
            </div>
            <div class="col">
              <div class="table-subtitle">{{ items.orderAmount }}</div>
            </div>
          </div>

          <div class="row mob-res-center mb-2">
            <div class="col">
              <div class="table-title">{{ headings.titleDate }}</div>
            </div>
            <div class="col">
              <div class="table-subtitle text-center">
                {{ items.orderDate }}
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
      headingTitles: [
        {
          titleOrderNum: "Order Number",
          titleSubs: "Subscription",
          titleStatus: " Order Status",
          titlePayment: "Payment Provider",
          titleAmount: "Order Amount",
          titleDate: " Date Of Order",
        },
      ],
      tableItems: [
        {
          orderNum: 5432178943,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "paid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "Refunded",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
        {
          orderNum: 5432178944,
          subscription: "Premium-1 Months Subscription",
          orderStatus: "unpaid",
          paymentProvider: "Bitcoin",
          orderAmount: "$20",
          orderDate: "12/9/2021",
        },
      ],
    };
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

.hide-desktop {
  display: none;
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

  .hide-desktop {
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
