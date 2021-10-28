import { reactive, computed, ComputedRef, watch } from "vue";
import i18n from "@/locales/localization";

import { User, Rewards, LoginDetails, Me, VerifyDetails } from "@/types/User";
import { SupportedLanguages } from "@/types/Locale";
import { DeviceId, MeDevice } from "@/types/Devices";
import { Order } from "@/types/Orders";

import { api, Method } from "@/modules/api";
import { storage } from "@/modules/storage";
import { tryCatchBoolean, tryCatch } from "@/modules/error";
import { detectBrowser, getEncryptedPassword } from "@/modules/utils";

import { useToast } from "@/hooks/useToast";

class UserDefault implements User {
  authenticated = false;
  dateRegistered = null;
  currentSubscription = {
    title: null,
    isExpired: null,
    expiryDate: null,
    plan: {
      title: "",
    },
  };
  devices = {
    list: [],
    allowed: 0,
    connected: 0,
  };
  accessToken = "";
  email = "";
  language = {
    selected: "en" as SupportedLanguages,
  };
  me = null;
  subscription = {
    plans: [],
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
  // console.log(JSON.stringify(new UserDefault()));
  state.user = new UserDefault();
  storage.removeItem("user");
  storage.setItem("user", state.user);
}

// will set User store according to response
function setUser(response: Me) {
  state.user.authenticated = true;
  state.user.me = response;
  state.user.email = response.email;
  state.user.dateRegistered = new Date(response.createdAt as string);
  state.user.language.selected =
    response.preferred_language.toLowerCase() as SupportedLanguages;
  state.user.subscription.plans = response.userPlans;

  const title = getSubscription(response);
  let isExpired = null;
  let expiryDate = null;

  if (title == "premium") {
    isExpired = response.userTrialPremiumPackagesFlags.premiumPackageExipred;
    expiryDate = new Date(
      response.userTrialPremiumPackagesFlags.premiumPackageEndDate as string
    );
  }
  if (title == "trial") {
    isExpired = response.userTrialPremiumPackagesFlags.trialPackageExpired;
    expiryDate = new Date(
      response.userTrialPremiumPackagesFlags.trialPackageEndDate as string
    );
  }
  state.user.currentSubscription = {
    title,
    isExpired,
    expiryDate,
    plan: {
      title: response.userPlans[0].title,
    },
  };

  state.user.accessToken = response.accessToken;
  state.user.referral_link = response.swoshs_website_referrer_link;
  state.user.invite_code = response.invite_code;
  state.user.website_url = response.swoshs_website_link;

  state.user.devices.list = response.userDevicesArr.map((element: MeDevice) => {
    return {
      id: element.id,
      name: element.device_name,
      type: element.device_type as DeviceId,
      udid: element.device_udid,
    };
  });
  state.user.devices.allowed = +response.total_allowed_devices;
  state.user.devices.connected = +response.userDevicesArrTotal;
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

const toast = useToast();

// useUser()
///////////////////////////////////////////
export function useUser(): {
  do: {
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: ComputedRef<boolean>;
    init: () => void;
    changeLanguage: (a: SupportedLanguages) => void;
    referFriend: (email: string) => Promise<boolean>;
    register: {
      inviteCode: (
        email: string,
        password: string,
        inviteCode: string
      ) => Promise<boolean>;
      verifyCode: (email: string, code: string) => Promise<boolean>;
    };
    loginWithCode: {
      emailCode: (email: string) => Promise<boolean>;
      loginCode: (email: string, code: string) => Promise<boolean>;
    };
    passwordRecovery: {
      emailCode: (email: string) => Promise<boolean>;
      verifyCode: (email: string, code: string) => Promise<boolean>;
      resetPassword: (
        email: string,
        code: string,
        new_password: string
      ) => Promise<boolean>;
    };
    account: {
      updatePassword: (
        currentPassword: string,
        newPassword: string
      ) => Promise<boolean>;
      refreshStorage: () => Promise<boolean>;
    };
    device: {
      logout: (deviceId: number) => Promise<boolean>;
    };
  };
  get: {
    orders: () => Promise<Order[] | boolean>;
    rewards: () => Promise<Rewards | boolean>;
  };
} {
  // do
  /////////////////////////////////////////////////////////////////////
  const login = async (email: string, password: string) => {
    return tryCatchBoolean(async () => {
      const loginDetails: LoginDetails = {
        username: email,
        password: password,
        device_code: "code",
        device_name: detectBrowser(),
        device_type: detectBrowser(),
        myaccount: true,
        lang: state.user.language.selected,
        version: "version",
      };
      const response: Me = await api("login", Method.POST, loginDetails);
      toast.do.show(response.message);
      console.log("waits..");
      setTimeout(() => {
        resetUser();
        setUser(response);

        // state.user.asd = "asd";
        console.log("state.user = ", state.user);
      }, 1000);
    });
  };

  const logout = () => {
    resetUser();
  };

  const register = {
    inviteCode: async (email: string, password: string, inviteCode: string) => {
      return tryCatchBoolean(async () => {
        const response: Me = await api("register", Method.POST, {
          username: email,
          password: password,
          invite_code: inviteCode,
        });
        toast.do.show(response.message);
      });
    },
    verifyCode: async (email: string, code: string) => {
      return tryCatchBoolean(async () => {
        const verifyDetails: VerifyDetails = {
          email,
          verification_code: code,
          device_code: "code",
          device_name: detectBrowser(),
          device_type: detectBrowser(),
          lang: state.user.language.selected,
          version: "version",
        };
        const response: Me = await api(
          "verify/email/code",
          Method.POST,
          verifyDetails
        );
        toast.do.show(response.message);
        console.log("waits..");
        resetUser();
        setUser(response);
      });
    },
  };

  const loginWithCode = {
    emailCode: async (email: string) => {
      return tryCatchBoolean(async () => {
        await api("login/with/code", Method.POST, {
          username: email,
        });
      });
    },
    loginCode: async (email: string, code: string) => {
      return tryCatchBoolean(async () => {
        const response: Me = await api("login/with/code", Method.POST, {
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
      });
    },
  };

  const passwordRecovery = {
    emailCode: async (email: string) => {
      return tryCatchBoolean(async () => {
        await api("send/confirm/email/code", Method.POST, {
          email,
        });
      });
    },
    verifyCode: async (email: string, verification_code: string) => {
      return tryCatchBoolean(async () => {
        await api("verify/code", Method.POST, {
          email,
          verification_code,
        });
      });
    },
    resetPassword: async (
      email: string,
      verification_code: string,
      new_password: string
    ) => {
      return tryCatchBoolean(async () => {
        const response: Me = await api("reset/password", Method.POST, {
          email,
          verification_code,
          new_password,
        });
        toast.do.show(response.message);
      });
    },
  };

  const account = {
    updatePassword: async (currentPassword: string, newPassword: string) => {
      return tryCatchBoolean(async () => {
        const response: Me = await api("me/update", Method.POST, {
          update_key: "password",
          update_val: getEncryptedPassword(newPassword),
          current_password: getEncryptedPassword(currentPassword),
        });
        resetUser();
        setUser(response);
        console.log("updatePassword", response);
      });
    },

    refreshStorage: async () => {
      return tryCatchBoolean(async () => {
        const response: Me = await api("me", Method.GET);
        console.log("refreshStorage", response);
        resetUser();
        setUser(response);
      });
    },
  };

  const device = {
    logout: async (deviceId: number) => {
      return tryCatchBoolean(async () => {
        const response: Me = await api("remove/loggedin/device", Method.POST, {
          id: deviceId,
        });
        console.log("device.logout", response);
      });
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
    state.user.language.selected = lang.toLowerCase() as SupportedLanguages;
    i18n.global.locale = lang.toLowerCase();
  };

  const referFriend = async (email: string) => {
    return tryCatchBoolean(async () => {
      const response: Me = await api("refer/friend", Method.POST, {
        email,
      });
      toast.do.show(response.message);
    });
  };
  /////////////////////////////////////////////////////////////////////
  // do

  // get
  /////////////////////////////////////////////////////////////////////
  const orders = async () => {
    return tryCatch(async () => {
      const response: {
        message: string;
        data: Order[];
      } = await api("orders", Method.GET);
      return response.data as Order[];
    });
  };

  const rewards = async () => {
    return tryCatch(async () => {
      const response: {
        message: string;
        data: any;
      } = await api("rewards", Method.GET);

      return {
        friendsWhoBought: response.data.total_friends_referred,
        monthsAdded: response.data.free_months_added,
      } as Rewards;
    });
  };

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
      register,
      loginWithCode,
      passwordRecovery,
      account,
      device,
    },
    get: {
      orders,
      rewards,
    },
  };
}
