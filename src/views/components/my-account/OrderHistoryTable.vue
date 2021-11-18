<template>
  <div class="container-fluid account-bg m-0 p-0 hide-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="account-subscription pt-5">
              {{ $t("my_subscriptions") }}
            </div>
            <div class="d-flex flex-row">
              <div
                class="inactive-subscription pr-4 pl-4"
                role="button"
                @click="redirect('subscription')"
              >
                {{ $t("my_subscription") }}
              </div>
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4" role="button">
                  {{ $t("order_history") }}
                </div>
                <div class="selected-borderline"></div>
              </div>
            </div>
            <div class="subscription-borderline"></div>
          </div>
        </div>
      </div>

      <!-- table -->
      <div class="container mt-3">
        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitles.orderNum }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitles.subs }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitles.status }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitles.payment }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitles.amount }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitles.date }}</div>
          </div>
        </div>
      </div>

      <!-- table content -->
      <Fade>
        <div
          v-if="isLoading || orders.length <= 0"
          class="container table-content mt-3 py-3"
        >
          <div class="row d-dlex justify-content-center align-items-center">
            <div class="col">
              <div class="p-5 text-center">
                <Fade>
                  <template v-if="isLoading">
                    <div class="spinner-grow text-primary my-5" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </template>
                  <template v-else>
                    <div
                      class="
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                      "
                    >
                      <img
                        src="@/assets/images/subscription/empty.png"
                        alt="order-history-empty"
                        class="pb-3"
                      />
                      {{ $t("no_information") }}
                    </div>
                  </template>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div
            class="container table-content mt-3 pt-3 pb-3"
            v-for="(or, i) in orders"
            :key="'d_' + i"
          >
            <div class="row d-dlex justify-content-center align-items-center">
              <div class="col">
                <div class="table-subtitle">{{ or.orderNum }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle table-subtitle-bold text-center">
                  {{ or.subscription }}
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle text-center">
                  <div
                    class="status-btn py-1"
                    :class="{
                      'subscription-active-btn': or.orderStatus === 'paid',
                      'refunded-btn': or.orderStatus === 'refunded',
                      'inactive-btn': or.orderStatus === 'unpaid',
                    }"
                  >
                    {{ or.orderStatus }}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ or.paymentProvider }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ or.orderAmount }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ or.orderDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>

  <!-- mobile -->
  <!-- //////////////////////////////////////////////////////////////////////////////////////// -->
  <div class="container-fluid account-bg m-0 p-0 d-md-none show-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="account-subscription text-center">
              {{ $t("my_subscriptions") }}
            </div>
            <div class="d-flex flex-row">
              <div
                class="inactive-subscription px-2"
                @click="redirect('subscription')"
              >
                {{ $t("my_subscription") }}
              </div>
              <div class="d-flex flex-column">
                <div class="active-subscription px-2">
                  {{ $t("order_history") }}
                </div>
                <div class="selected-borderline"></div>
              </div>
            </div>
          </div>
          <div class="subscription-borderline"></div>
        </div>
      </div>
      <Fade>
        <div
          v-if="isLoading || orders.length <= 0"
          class="container table-content mt-3 py-3"
        >
          <div class="row d-dlex justify-content-center align-items-center">
            <div class="col">
              <div
                class="
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  p-5
                  text-center
                "
              >
                <template v-if="isLoading">
                  <div class="spinner-grow text-primary my-5" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </template>
                <template v-else>
                  <img
                    src="@/assets/images/subscription/empty.png"
                    alt="order-history-empty"
                    class="pb-3"
                  />
                  {{ $t("no_information") }}
                </template>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div
            class="container table-content my-3 p-3"
            v-for="(or, i) in orders"
            :key="'m_' + i"
          >
            <div class="row">
              <div class="col">
                <div class="table-title">
                  <span class="mob-line-height">
                    {{ headingTitles.orderNum }}
                  </span>
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ or.orderNum }}</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="table-title">{{ headingTitles.subs }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle table-subtitle-bold">
                  {{ or.subscription }}
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="table-title">{{ headingTitles.status }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle">
                  <div class="subscription-active-btn pt-1 pb-1">
                    {{ or.orderStatus }}
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="table-title">{{ headingTitles.payment }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ or.paymentProvider }}</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="table-title">{{ headingTitles.amount }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ or.orderAmount }}</div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="table-title">{{ headingTitles.date }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle text-center">
                  {{ or.orderDate }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>
  <!-- //////////////////////////////////////////////////////////////////////////////////////// -->
  <!-- mobile -->
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { useUser } from "@/hooks/useUser";
import { TableOrder } from "@/types/Orders";
import { fmtCurr } from "@/modules/utils";

import Fade from "@/views/components/transitions/Fade.vue";

export default {
  components: {
    Fade,
  },
  setup() {
    const router = useRouter();

    const redirect = (pg: string) => {
      router.push({ name: pg });
    };

    const isLoading = ref(true);

    const headingTitles = {
      orderNum: "Order Number",
      subs: "Subscription",
      status: " Order Status",
      payment: "Payment Provider",
      amount: "Order Amount",
      date: " Date Of Order",
    };

    const orders = ref<TableOrder[]>([]);
    const user = useUser();
    const initOrders = async () => {
      isLoading.value = true;
      const rspns = await user.get.orders();
      if (!(rspns instanceof Error)) {
        // if (Array.isArray(rspns)) {
        orders.value = rspns.map((vl) => {
          let orderDate = new Date(vl.created_at as unknown as string);
          return {
            orderNum: vl.order_number,
            subscription: vl.plan_name,
            orderStatus: "-",
            paymentProvider: vl.payment_method_name,
            orderAmount: vl.currency_symbol + "" + fmtCurr(vl.amount),
            orderDate: `${orderDate.getDate()}/${orderDate.getMonth()}/${orderDate.getFullYear()}`,
          };
        });
      }
      isLoading.value = false;
    };
    onMounted(() => {
      initOrders();
    });

    // {
    //   orderNum: 5432178943,
    //   subscription: "Premium-1 Months Subscription",
    //   orderStatus: "paid",
    //   paymentProvider: "Bitcoin",
    //   orderAmount: "$20",
    //   orderDate: "12/9/2021",
    // }

    return {
      redirect,
      headingTitles,
      orders,
      isLoading,
    };
  },
};
</script>
<style lang="scss" scoped>
.status-btn {
  margin: auto;
}
.table-content {
  > div {
    justify-content: center;
    align-items: center;
  }
}

.spinner-grow.text-primary {
  color: var(--swoshs-color2) !important;
}
///////////////////////////////////
.borderline {
  width: auto;
  height: 0px;
  background: transparent;
  border: 1px solid #fff;
  opacity: 0.19;
}

// .account-bg {
//   background: #f3f7fe;
//   width: 100%;
//   height: 100vh;
// }

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
    line-height: 2rem;
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

  // .table-subtitle-bold {
  //   text-align: ;
  // }

  .account-subscription {
    font-size: 1rem;
  }

  .inactive-subscription,
  .active-subscription {
    font-size: 0.8rem;
    line-height: 1.3rem;
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
