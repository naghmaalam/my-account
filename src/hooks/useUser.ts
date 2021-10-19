import { reactive, computed, ComputedRef, watch } from "vue";
import i18n from "@/locales/localization";

import { User, LoginDetails, Me } from "@/types/User";
import { SupportedLanguages } from "@/types/Locale";

import { api, Method } from "@/modules/api";
import { storage } from "@/modules/storage";
import { isDateExpired } from "@/modules/utils";

import { useToast } from "@/hooks/useToast";

class UserDefault implements User {
  authenticated = false;
  currentSubscription = {
    title: null,
    isExpired: null,
    expiryDate: null,
  };
  accessToken = "";
  email = "";
  language = {
    selected: "en" as SupportedLanguages,
  };
  me = null;
  subscription = {
    plans: null,
  };
  referral_link = "";
  invite_code = "";
  website_url = "";
}

// user data
const state = reactive<{ user: User }>({ user: new UserDefault() });
export const stateUser = computed(() => {
  return state.user;
});

function resetUser() {
  console.log("resetUser()");
  console.log(JSON.stringify(new UserDefault()));
  state.user = new UserDefault();
  storage.removeItem("user");
  storage.setItem("user", state.user);
}

// will set User store according to response
function setUser(response: Me) {
  state.user.authenticated = true;
  state.user.me = response;
  state.user.email = response.email;
  state.user.language.selected = <SupportedLanguages>(
    response.preferred_language
  );
  state.user.subscription.plans = response.userPlans;

  const title = getSubscription(response);
  let isExpired = null;
  let expiryDate = null;

  if (title == "premium") {
    isExpired = response.userTrialPremiumPackagesFlags.premiumPackageExipred;
    expiryDate = response.userTrialPremiumPackagesFlags.premiumPackageEndDate;
  }
  if (title == "trial") {
    isExpired = response.userTrialPremiumPackagesFlags.trialPackageExpired;
    expiryDate = response.userTrialPremiumPackagesFlags.trialPackageEndDate;
  }
  state.user.currentSubscription = {
    title,
    isExpired,
    expiryDate,
  };

  state.user.accessToken = response.accessToken;
  state.user.referral_link = response.swoshs_website_referrer_link;
  state.user.invite_code = response.invite_code;
  state.user.website_url = response.swoshs_website_link;
}

function getSubscription(response: Me) {
  if (
    response?.isPremiumUser === false &&
    response?.userTrialPremiumPackagesFlags.premiumPackageExipred === false
  )
    return "trial";
  else if (
    response?.userTrialPremiumPackagesFlags.trialPackageExpired === true &&
    response?.userTrialPremiumPackagesFlags.premiumPackageEndDate
  )
    return "premium";
  else return null;
}

export function useUser(): {
  do: {
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: ComputedRef<boolean>;
    init: () => void;
    changeLanguage: (a: SupportedLanguages) => void;
    referFriend: (email: string) => Promise<boolean>;
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
      const response = await api("login", Method.POST, loginDetails);
      toast.do.show(response.message);
      console.log("waits..");
      setTimeout(() => {
        resetUser();
        setUser(response);

        // state.user.asd = "asd";
        console.log("state.user = ", state.user);
      }, 1000);
      return true;
    } catch (error) {
      const err = error as Error;
      toast.do.error(err.message);
      return false;
      console.error("useUser() error", err.name);
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
        const response = await api("login/with/code", Method.POST, {
          username: email,
          login_code: code,
        });
        console.log("waits..");
        setTimeout(() => {
          resetUser();
          setUser(response);

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
        const response = await api("reset/password", Method.POST, {
          email,
          verification_code,
          new_password,
        });
        toast.do.show(response.message);
        return true;
      } catch (error) {
        const err = error as Error;
        toast.do.error(err.message);
        return false;
      }
    },
  };

  const isAuthenticated = computed(() => {
    return state.user.authenticated;
  });

  const init = () => {
    // check if storage has user data if not then initialize/reset
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

  const referFriend = async (email: string) => {
    try {
      const response = await api("refer/friend", Method.POST, {
        email,
      });
      toast.do.show(response.message);
      return true;
    } catch (error) {
      const err = error as Error;
      // console.error(err);
      toast.do.error(err.message);
      return false;
    }
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
      referFriend,
      init,
      changeLanguage,
      withCode,
      passwordRecovery,
    },
  };
}
