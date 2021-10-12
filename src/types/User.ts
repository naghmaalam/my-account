import { SupportedLanguages } from "@/types/Locale";

export interface Plan {
  billed: number;
  description: string;
  end_date: Date | null; // "2021-10-07T16:50:44.000Z"
  id: number;
  start_date: Date | null; //"2021-09-27T08:19:44.000Z"
  title: string; // "3 Days Trial"
}

export interface User {
  authenticated: boolean;
  currentSubscription: "trial" | "premium" | null;
  accessToken: string;
  email: string;
  me: unknown | null;
  language: {
    selected: SupportedLanguages;
  };
  subscription: {
    plans: Plan[] | null;
  };
}

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
