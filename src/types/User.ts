import { SupportedLanguages } from "@/types/Locale";

export interface Plan {
  billed: number;
  description: string;
  end_date: Date | null; // "2021-10-07T16:50:44.000Z"
  id: number;
  start_date: Date | null; //"2021-09-27T08:19:44.000Z"
  title: string; // "3 Days Trial"
}

export interface Me {
  message: string;
  email: string;
  swoshs_website_referrer_link: string;
  swoshs_website_link: string;
  invite_code: string;
  preferred_language: string;
  accessToken: string;
  userPlans: Plan[];
  isPremiumUser: boolean;
  userTrialPremiumPackagesFlags: {
    premiumPackageEndDate: Date | null; // "2021-10-15 11:21:45"
    premiumPackageExipred: boolean;
    trialPackageEndDate: Date | null; // "2021-09-25 07:04:09"
    trialPackageExpired: boolean;
  };
}

export interface User {
  authenticated: boolean;
  currentSubscription: {
    title: "trial" | "premium" | null;
    isExpired: boolean | null;
    expiryDate: Date | null;
  };
  accessToken: string;
  email: string;
  me: Me | null;
  language: {
    selected: SupportedLanguages;
  };
  subscription: {
    plans: Plan[] | null;
  };
  referral_link: string;
  invite_code: string;
  website_url: string;
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
