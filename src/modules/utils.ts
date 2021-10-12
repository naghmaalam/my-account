import { sha256 } from "js-sha256";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });

declare global {
  interface Window {
    H5Interface: any;
  }
}

export function getDeviceName() {
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
    if (device === "ios") retVal = t("iphone");
    else if (device === "android") retVal = t("android");
    else retVal = t("unknown_device");
  }

  return retVal;
}

export function getDeviceId() {
  if (window.H5Interface) {
    return window.H5Interface.getDeviceId();
  } else {
    const vS = { name: "getDeviceId", param: [] };
    return window.prompt(JSON.stringify(vS));
  }

  // if(store.getters['lang/langs'].unknown_device)
  // return store.getters['lang/langs'].unknown_device
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
    return window.H5Interface.openURLInDefaultBrowser(strURL);
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
