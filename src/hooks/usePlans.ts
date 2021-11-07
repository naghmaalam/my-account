import { reactive, computed, watch } from "vue";

import { api, Method } from "@/modules/api";
import { storage } from "@/modules/storage";
import { tryCatch, tryCatchBoolean } from "@/modules/error";

import { Plan } from "@/types/Plans";

// plans data
const state = reactive<{ plans: Plan[] }>({ plans: [] });
export const statePlans = computed(() => {
  return state.plans;
});

function resetPlans() {
  console.log("resetPlans()");
  state.plans = [];
  storage.removeItem("plans");
  storage.setItem("plans", state.plans);
}

function setPlans(data: Plan[]) {
  state.plans = data;
}

// usePlans()
///////////////////////////
export const usePlans = (): {
  do: {
    init: () => void;
    refreshStorage: () => Promise<true | Error>;
  };
  get: {
    plans: () => Promise<Plan[] | Error>;
  };
} => {
  // do
  /////////////////////////////////////////////////////////////////////
  const init = () => {
    // check if storage has user data if not then initialize/reset
    const plansSessionData = storage.getItem("plans");
    if (plansSessionData) {
      state.plans = JSON.parse(plansSessionData);
    } else {
      resetPlans();
    }

    // add watcher to plans to save updates to session storage
    watch(
      () => state.plans,
      (val) => {
        console.log("plans changed");
        storage.setItem("plans", val);
      },
      { deep: true }
    );
  };

  const refreshStorage = () => {
    return tryCatchBoolean(async () => {
      const response: {
        message: string;
        data: Plan[];
      } = await api("systemplans", Method.GET);
      resetPlans();
      setPlans(response.data);
    });
  };
  /////////////////////////////////////////////////////////////////////
  // do
  // get
  /////////////////////////////////////////////////////////////////////
  const plans = () => {
    return tryCatch(async () => {
      const response: {
        message: string;
        data: Plan[];
      } = await api("systemplans", Method.GET);
      return response.data as Plan[];
    });
  };
  /////////////////////////////////////////////////////////////////////
  // get

  return {
    do: {
      init,
      refreshStorage,
    },
    get: {
      plans,
    },
  };
};
