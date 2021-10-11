import { reactive } from "vue";

import { User } from "@/types/User";

import { api, Method } from "@/utils/api";

import { useToast } from "@/hooks/useToast";

export interface LoginDetails {
  username: string;
  password: string;
  device_code: string;
  device_name: string;
  device_type: string;
  myaccount: boolean;
  lang: string;
  version: string;
}

const UserDefault: User = {
  authenticated: false,
  currentSubscription: null,
  accessToken: "",
  language: {
    selected: "en",
  },
  me: null,
  subscription: {
    plans: [],
  },
};

export const user: User = reactive(Object.create(UserDefault));

export function useUser(): {
  actions: {
    login: (param: LoginDetails) => Promise<void>;
    logout: () => void;
  };
} {
  const login = async (loginDetails: LoginDetails) => {
    const toast = useToast();
    try {
      const response = await api("login", Method.POST, loginDetails);
      console.log(response);
      toast.actions.show({ text: response.message });
      resetUser();
      storeUser();
    } catch (error) {
      const err = error as Error;
      toast.actions.error({ text: err.message });
      // console.error("useUser() error", err.name);
    }
  };

  const logout = () => {
    resetUser();
  };

  const storeUser = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const resetUser = () => {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(UserDefault));
  };

  return {
    actions: { login, logout },
  };
}
