<template>
  <div class="container-fluid m-0 p-0 hide-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="account-subscription pt-5">
              {{ $t("my_subscriptions") }}
            </div>
            <div class="d-flex flex-row">
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4" role="button">
                  {{ $t("my_subscription") }}
                </div>
                <div class="selected-borderline"></div>
              </div>
              <div
                class="inactive-subscription pr-4 pl-4"
                role="button"
                @click="redirect('orderhistory')"
              >
                {{ $t("order_history") }}
              </div>
            </div>
            <div class="subscription-borderline"></div>
          </div>
        </div>
      </div>
      <!-- Devices Table -->
      <div class="container mt-3">
        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitle.refNum }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitle.expires }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitle.subscription }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitle.status }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitle.payment }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ headingTitle.action }}</div>
          </div>
        </div>
      </div>

      <!-- content -->

      <div
        v-if="subscriptions.length <= 0"
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
              <img
                src="@/assets/images/subscription/empty.png"
                alt="order-history-empty"
                class="pb-3"
              />
              {{ $t("no_information") }}
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="container table-content mt-3 py-3"
        v-for="(sub, i) in subscriptions"
        :key="'d_' + i"
      >
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
            <div class="table-subtitle">
              {{ sub.refNum }}
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              {{ sub.expires }}
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold text-center">
              {{ sub.subscription }}
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div
                class="pt-1 pb-1 ml-5"
                :class="{
                  'subscription-active-btn': sub.status === 'active',
                  'inactive-btn': sub.status === 'inactive',
                }"
              >
                {{ sub.status }}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ sub.paymentProvider }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <button v-if="sub.action" class="my-account-btn">
                {{ sub.action }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile -->
  <!-- //////////////////////////////////////////////////////////////////////////////////////// -->

  <!-- mob design -->
  <div class="container-fluid account-bg m-0 p-0 hide-desktop show-mobile">
    <div class="container-fluid m-0">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="account-subscription text-center">
              {{ $t("my_subscriptions") }}
            </div>
            <div class="d-flex flex-row">
              <div class="d-flex flex-column">
                <div class="active-subscription pr-4 pl-4">
                  {{ $t("my_subscription") }}
                </div>
                <div class="selected-borderline"></div>
              </div>
              <div
                class="inactive-subscription pr-4 pl-4"
                @click="redirect('orderhistory')"
              >
                {{ $t("order_history") }}
              </div>
            </div>
            <div class="subscription-borderline"></div>
          </div>
        </div>
      </div>
      <div
        v-if="subscriptions.length <= 0"
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
              <img
                src="@/assets/images/subscription/empty.png"
                alt="order-history-empty"
                class="pb-3"
              />
              {{ $t("no_information") }}
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        class="container table-content my-3 p-3"
        v-for="(sub, i) in subscriptions"
        :key="'m_' + i"
      >
        <div class="row">
          <div class="col">
            <div class="table-title">
              <span class="mob-line-height">
                {{ headingTitle.refNum }}
              </span>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ sub.refNum }}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitle.expires }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle text-center">{{ sub.expires }}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitle.subscription }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              {{ sub.subscription }}
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitle.status }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="subscription-active-btn">{{ sub.status }}</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitle.payment }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ sub.paymentProvider }}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ headingTitle.action }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <button v-if="sub.action" class="my-account-btn">
                {{ sub.action }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //////////////////////////////////////////////////////////////////////////////////////// -->
  <!-- mobile -->
</template>

<script lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { stateUser } from "@/hooks/useUser";
import { isDateExpired } from "@/modules/utils";

export default {
  setup() {
    const router = useRouter();
    const redirect = (page: string) => {
      router.push({ name: page });
    };

    const headingTitle = {
      refNum: "Refence Number",
      expires: "Expires",
      subscription: "Subscription",
      status: "Status",
      payment: "Payment Provider",
      action: "Action",
    };

    const subscriptions = computed(() => {
      return stateUser.value.subscription.plans.map((vl) => {
        const expire = new Date(vl.end_date as unknown as string);
        const status = isDateExpired(vl.end_date as unknown as string)
          ? "inactive"
          : "active";
        let action = "";
        if (!stateUser.value.currentSubscription.isExpired) {
          if (stateUser.value.currentSubscription.title === "premium") {
            action = "";
          } else {
            action = "upgrade";
          }
        } else {
          if (stateUser.value.currentSubscription.title === "premium") {
            action = "renew";
          } else {
            action = "upgrade";
          }
        }

        return {
          refNum: vl.id,
          expires:
            expire.getMonth() +
            "/" +
            expire.getDate() +
            "/" +
            expire.getFullYear(),
          subscription: vl.title,
          status,
          paymentProvider: "-",
          action,
        };
      });
    });

    return {
      redirect,
      headingTitle,
      subscriptions,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-content {
  > div {
    justify-content: center;
    align-items: center;
  }
}

/////////////////////////////////////////////////

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

.my-account-btn {
  /* width: 161.68px;
  height: 43.47px; */
  border-radius: 10px;
  background: transparent;
  border: 1px solid #7b47fc;
  font-family: Poppins;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #724bfe;
}

.user-avatar {
  color: #c6cfde;
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

  // .row {
  //   flex-wrap: none !important;
  // }

  * {
    box-sizing: none !important;
  }

  .table-subtitle {
    font-size: 0.7rem;
    line-height: 3rem;
    text-align: left !important;
  }

  // .table-subtitle-bold {
  //   text-align: ;
  // }

  // .table-content {
  //   padding-top: 0rem !important;
  // }

  .account-subscription {
    font-size: 1rem;
  }

  .inactive-subscription,
  .active-subscription {
    font-size: 0.8rem;
    line-height: 1.3rem;
  }

  // .inactive-subscription {
  //   font-size: 1rem;
  //   line-height: 1.5rem;
  // }

  .table-subtitle {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }

  // .mob-res-center {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

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
