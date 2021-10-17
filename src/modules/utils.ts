import { sha256 } from "js-sha256";
// import {} from "vue-i18n";
import i18n from "@/locales/localization";
import { H5Interface } from "@/types/H5Interface";

declare global {
  interface Window {
    H5Interface: H5Interface;
  }
}

export function getDeviceName(): string | null {
  let retVal = null;
  if (typeof window.H5Interface !== "undefined") {
    retVal = window.H5Interface.getDeviceName();
  } else {
    const vS = { name: "getDeviceName", param: [] };
    retVal = window.prompt(JSON.stringify(vS));
  }

  // if getDeviceName not working then check the userAgent
  if (!retVal) {
    const device = appSource();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (device === "ios") retVal = i18n.global.t("iphone");
    else if (device === "android") retVal = i18n.global.t("android");
    else retVal = i18n.global.t("unknown_device");
  }

  return retVal;
}

export function getDeviceId(): string | null {
  if (typeof window.H5Interface !== "undefined") {
    return window.H5Interface.getDeviceId();
  } else {
    const vS = { name: "getDeviceId", param: [] };
    return window.prompt(JSON.stringify(vS));
  }

  // if(store.get['lang/langs'].unknown_device)
  // return store.get['lang/langs'].unknown_device
  // else
  // return 'Unknown Device';
}

export function appSource(): "ios" | "android" {
  const u = navigator.userAgent;
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isiOS) {
    return "ios";
  } else {
    return "android";
  }
}

export function getEncryptedPassword(password: string): string {
  return sha256(sha256(password + sha256(password + password)));
}

export function openURLInDefaultBrowser(strURL: string): string | null {
  if (window.H5Interface) {
    window.H5Interface.openURLInDefaultBrowser(strURL);
    return null;
  } else {
    // store.dispatch("snack/snack", {
    // 	text: `window.H5Interface = ${(typeof window?.H5Interface)} || window = ${(typeof window)} || `,
    // 	color: "bg-success",
    // });
    // window.location.href = strURL;

    const vS = { name: "openURLInDefaultBrowser", param: [strURL] };
    return window.prompt(JSON.stringify(vS));
  }
}

export function fmtCurr(currency: number): string {
  return currency.toFixed(2);
}

export function isDateExpired(date: string): boolean {
  const now = new Date();
  const end = new Date(date.replace(" ", "T") + "Z"); //add Z to indicate its Zulu timne
  const distance = end.getTime() - now.getTime();

  if (distance < 0) return true;
  else return false;
}

export const storage = {
  setItem: <T>(key: string, data: T): void => {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  removeItem: (key: string): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getItem: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

// type any is used here because obj and return type can be anything
// REMOVED BECAUSE WILL BE USING CLASSES
// export function newObj<T>(obj: T): T {
//   return JSON.parse(JSON.stringify(obj));
// }
