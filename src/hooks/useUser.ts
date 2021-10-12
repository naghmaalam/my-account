import { reactive, computed, ComputedRef, watch } from "vue";
import i18n from "@/locales/localization";

import { User, LoginDetails } from "@/types/User";
import { SupportedLanguages } from "@/types/Locale";

import { api, Method } from "@/modules/api";
import { newObj } from "@/modules/utils";

import { useToast } from "@/hooks/useToast";

const UserDefault: User = {
  authenticated: false,
  currentSubscription: null,
  accessToken: "",
  email: "",
  language: {
    selected: "en",
  },
  me: null,
  subscription: {
    plans: null,
  },
};

// Initialize user data
export const state = <{ user: User }>(
  reactive<{ user: User }>(newObj({ user: UserDefault }))
);

export function useUser(): {
  actions: {
    login: (a: LoginDetails) => Promise<void>;
    logout: () => void;
    isAuthenticated: ComputedRef<boolean>;
    init: () => void;
    state: { user: User };
    changeLanguage: (a: SupportedLanguages) => void;
  };
  getters: {
    data: ComputedRef<User>;
  };
} {
  // actions
  /////////////////////////////////////////////////////////////////////
  const login = async (loginDetails: LoginDetails) => {
    const toast = useToast();
    try {
      const response = <any>await api("login", Method.POST, loginDetails);
      console.log(response);
      toast.actions.show({ text: response.message });
      console.log("waits..");
      setTimeout(() => {
        resetUser();
        state.user.authenticated = true;
        state.user.me = response;
        state.user.email = response.email;
        state.user.language.selected = <SupportedLanguages>(
          response.preferred_language
        );

        // state.user.asd = "asd";
        console.log("state.user = ", state.user);
      }, 1000);
    } catch (error) {
      const err = error as Error;
      toast.actions.error({ text: err.message });
      // console.error("useUser() error", err.name);
    }
  };

  const logout = () => {
    resetUser();
  };

  const resetUser = () => {
    console.log("resetUser()");
    state.user = JSON.parse(JSON.stringify(UserDefault));
    sessionStorage.removeItem("user");
    sessionStorage.setItem("user", JSON.stringify(UserDefault));
  };

  const isAuthenticated = computed(() => {
    return state.user.authenticated;
  });

  const init = () => {
    // check if storage has user data if not then initialize
    const userSessionData = sessionStorage.getItem("user");
    if (userSessionData) {
      state.user = JSON.parse(userSessionData);
    } else {
      resetUser();
    }

    // add watcher to user to save updates to session storage
    watch(
      () => state.user,
      (val) => {
        console.log("user changed");
        sessionStorage.setItem("user", JSON.stringify(val));
      },
      { deep: true }
    );
  };

  const changeLanguage = (lang: SupportedLanguages) => {
    state.user.language.selected = lang;
    i18n.global.locale = lang;
  };
  /////////////////////////////////////////////////////////////////////
  // actions

  // getters
  /////////////////////////////////////////////////////////////////////
  const data = computed(() => {
    return state.user;
  });
  /////////////////////////////////////////////////////////////////////
  // getters

  return {
    actions: { state, login, logout, isAuthenticated, init, changeLanguage },
    getters: { data },
  };
}
