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
            <div class="table-title">{{ $t(headingTitle.reference) }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.expires) }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.subscription) }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.status) }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.billed) }}</div>
          </div>
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.action) }}</div>
          </div>
        </div>
      </div>

      <!-- content -->
      <Fade>
        <div
          v-if="isLoading || subscriptions.length <= 0"
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
                  </template>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <div
            class="container table-content mt-3 py-3"
            v-for="(sub, i) in subscriptions"
            :key="'d_' + i"
          >
            <div class="row d-dlex justify-content-center align-items-center">
              <div class="col">
                <div class="table-subtitle">
                  {{ sub.reference }}
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle">
                  {{ sub.expiryDate }}
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle table-subtitle-bold text-center">
                  {{ sub.subscription }}
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle text-center">
                  <div
                    class="pt-1 pb-1 margin-auto"
                    :class="{
                      'subscription-active-btn': sub.status === 'active',
                      'inactive-btn': sub.status === 'inactive',
                    }"
                  >
                    {{ $t(sub.status) }}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="table-subtitle">{{ $t(sub.billed) }}</div>
              </div>
              <div class="col">
                <div class="table-subtitle">
                  <button
                    v-if="sub.action"
                    class="my-account-btn"
                    @click="$router.push({ name: 'checkout' })"
                  >
                    {{ sub.action }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center p-3">
            <Pagination
              :total="totalRecords"
              :current-page="currentPage"
              @goto-page="gotoPage($event)"
            />
          </div>
        </div>
      </Fade>
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
        v-if="isLoading || subscriptions.length <= 0"
        class="container table-content mt-3 py-3"
      >
        <div class="row d-dlex justify-content-center align-items-center">
          <div class="col">
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
              </template>
            </Fade>
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
                {{ $t(headingTitle.reference) }}
              </span>
            </div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ sub.reference }}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.expires) }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle text-center">{{ sub.expiryDate }}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.subscription) }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle table-subtitle-bold">
              {{ sub.subscription }}
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.status) }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">
              <div class="subscription-active-btn">{{ sub.status }}</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.billed) }}</div>
          </div>
          <div class="col">
            <div class="table-subtitle">{{ $t(sub.billed) }}</div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="table-title">{{ $t(headingTitle.action) }}</div>
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
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { stateUser, useUser } from "@/hooks/useUser";
import { TableSubscription } from "@/types/Orders";

import { isDateExpired } from "@/modules/utils";

import { log } from "@/modules/debug";
import { fmtCurr } from "@/modules/utils";

import Fade from "@/views/components/transitions/Fade.vue";
import Pagination from "@/views/components/Pagination.vue";

export default {
  components: {
    Fade,
    Pagination,
  },
  setup() {
    const router = useRouter();
    const redirect = (page: string) => {
      router.push({ name: page });
    };

    const isLoading = ref(true);

    const headingTitle = {
      reference: "reference_number",
      expires: "expires",
      subscription: "subscription",
      status: "status",
      billed: "billed",
      action: "action",
    };

    const totalRecords = ref(0);
    const subscriptions = ref<TableSubscription[]>([]);
    const user = useUser();
    const initSubscriptions = async (page = 1) => {
      isLoading.value = true;
      const rspns = await user.get.subscriptions(page);
      if (!(rspns instanceof Error)) {
        totalRecords.value = rspns.totalRecords;
        subscriptions.value = rspns.subscriptions.map((vl) => {
          let expiryDate = new Date(vl.end_date as unknown as string);
          let action = "";
          if (!stateUser.value.currentSubscription.isExpired) {
            if (stateUser.value.currentSubscription.title === "premium") {
              action = "Recharge";
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
          let billed = "";
          switch (vl.billed) {
            case 1:
              billed = "monthly";
              break;
            case 2:
              billed = "yearly";
              break;
            case 3:
              billed = "manually";
              break;
            case 4:
              billed = "trial";
              break;
            case 5:
              billed = "rewards";
              break;
            default:
              billed = "default";
              break;
          }

          return {
            reference: vl.id,
            subscription: vl.title,
            status: vl.is_deleted === 0 ? "active" : "inactive",
            billed: billed,
            expiryDate: `${expiryDate.toLocaleString("default", {
              month: "short",
            })} ${expiryDate.getDate()}, ${expiryDate.getFullYear()}`,
            action,
          };
        });
      }
      isLoading.value = false;
    };

    onMounted(() => {
      initSubscriptions();
    });

    const currentPage = ref(1);
    const gotoPage = (page: number) => {
      console.log("page = ", page);
      currentPage.value = page;
      initSubscriptions(page);
    };

    return {
      redirect,
      headingTitle,
      subscriptions,
      isLoading,
      totalRecords,
      gotoPage,
      currentPage,
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

.spinner-grow.text-primary {
  color: var(--swoshs-color2) !important;
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

  font-size: 0.7rem;
  line-height: 1.5rem;
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
