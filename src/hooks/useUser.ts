import { reactive, computed, ComputedRef, watch } from "vue";
import i18n from "@/locales/localization";

import { User, LoginDetails } from "@/types/User";
import { SupportedLanguages } from "@/types/Locale";
import { Response } from "@/types/Response";

import { api, Method } from "@/modules/api";
import { storage, newObj } from "@/modules/utils";

import { useToast } from "@/hooks/useToast";

class UserDefault implements User {
  // authenticated: false,
  // currentSubscription: null,
  // accessToken: "",
  // email: "",
  // language: {
  //   selected: "en",
  // },
  // me: null,
  // subscription: {
  //   plans: null,
  // },

  authenticated = false;
  currentSubscription = null;
  accessToken = "";
  email = "";
  language = {
    selected: "en" as SupportedLanguages,
  };
  me = null;
  subscription = {
    plans: null,
  };
}

// Initialize user data
const state = <{ user: User }>(
  // reactive<{ user: User }>(newObj({ user: UserDefault }))
  reactive<{ user: User }>({ user: new UserDefault() })
);

export const stateUser = computed(() => {
  return state.user;
});

export function useUser(): {
  do: {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: ComputedRef<boolean>;
    init: () => void;
    changeLanguage: (a: SupportedLanguages) => void;
    withCode: {
      emailCode: (email: string) => Promise<boolean>;
      loginCode: (email: string, code: string) => Promise<boolean>;
    };
    passwordRecovery: {
      emailCode: (email: string) => Promise<boolean>;
      verifyCode: (email: string, code: string) => Promise<boolean>;
      updatePassword: (
        email: string,
        code: string,
        new_password: string
      ) => Promise<boolean>;
    };
  };
} {
  const toast = useToast();
  // do
  /////////////////////////////////////////////////////////////////////
  const login = async (email: string, password: string) => {
    try {
      const loginDetails: LoginDetails = {
        username: email,
        password: password,
        device_code: "device_code_my_account",
        device_name: "device_name_my_account",
        device_type: "ios, android, windows, mac",
        myaccount: true,
        lang: "en",
        version: "version",
      };
      const response = (await api(
        "login",
        Method.POST,
        loginDetails
      )) as unknown as Response;
      toast.do.show(response.message);
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
      toast.do.error(err.message);
      // console.error("useUser() error", err.name);
    }
  };

  const logout = () => {
    resetUser();
  };

  const withCode = {
    emailCode: async (email: string) => {
      try {
        await api("login/with/code", Method.POST, {
          username: email,
        });
        return true;
      } catch (error) {
        const err = error as Error;
        toast.do.error(err.message);
        return false;
      }
    },
    loginCode: async (email: string, code: string) => {
      try {
        const response = (await api("login/with/code", Method.POST, {
          username: email,
          login_code: code,
        })) as unknown as Response;
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
        return true;
      } catch (error) {
        const err = error as Error;
        toast.do.error(err.message);
        return false;
      }
    },
  };

  const passwordRecovery = {
    emailCode: async (email: string) => {
      try {
        await api("send/confirm/email/code", Method.POST, {
          email,
        });
        return true;
      } catch (error) {
        const err = error as Error;
        toast.do.error(err.message);
        return false;
      }
    },
    verifyCode: async (email: string, verification_code: string) => {
      try {
        await api("verify/code", Method.POST, {
          email,
          verification_code,
        });
        return true;
      } catch (error) {
        const err = error as Error;
        toast.do.error(err.message);
        return false;
      }
    },
    updatePassword: async (
      email: string,
      verification_code: string,
      new_password: string
    ) => {
      try {
        const response = (await api("reset/password", Method.POST, {
          email,
          verification_code,
          new_password,
        })) as unknown as Response;
        toast.do.show(response.message);
        return true;
      } catch (error) {
        const err = error as Error;
        toast.do.error(err.message);
        return false;
      }
    },
  };

  const resetUser = () => {
    console.log("resetUser()");
    console.log(JSON.stringify(new UserDefault()));
    state.user = new UserDefault();
    storage.removeItem("user");
    storage.setItem("user", state.user);
  };

  const isAuthenticated = computed(() => {
    return state.user.authenticated;
  });

  const init = () => {
    // check if storage has user data if not then initialize
    const userSessionData = storage.getItem("user");
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
        storage.setItem("user", val);
      },
      { deep: true }
    );
  };

  const changeLanguage = (lang: SupportedLanguages) => {
    state.user.language.selected = lang;
    i18n.global.locale = lang;
  };
  /////////////////////////////////////////////////////////////////////
  // do

  // get
  /////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////
  // get

  return {
    do: {
      login,
      logout,
      isAuthenticated,
      init,
      changeLanguage,
      withCode,
      passwordRecovery,
    },
  };
}
