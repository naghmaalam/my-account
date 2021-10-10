import { reactive } from "vue";

import User from "@/types/User";

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

export const user: User = reactive({
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
});

export function useUser(): {
  actions: { login: (param: LoginDetails) => Promise<void> };
} {
  const login = async (loginDetails: LoginDetails) => {
    const toast = useToast();
    try {
      const response = await api("login", Method.POST, loginDetails);
      console.log(response);
      toast.actions.show({ text: response.message });
      storeUser();
    } catch (error) {
      const err = error as Error;
      toast.actions.error({ text: err.message });
      // console.error("useUser() error", err.name);
    }
  };

  const storeUser = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  // getUser()

  return {
    actions: { login },
  };
}
