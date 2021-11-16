import { sha256 } from "js-sha256";
// import {} from "vue-i18n";
import i18n from "@/locales/localization";
import { H5Interface } from "@/types/H5Interface";
import { DeviceId } from "@/types/Devices";

declare global {
  interface Window {
    H5Interface: H5Interface;
  }
  interface Document {
    documentMode?: any;
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
  const endDate =
    date.indexOf("Z") < 0 && date.indexOf("z") < 0
      ? date.replace(" ", "T") + "Z"
      : date;
  const end = new Date(endDate); //add Z to indicate its Zulu timne
  const distance = end.getTime() - now.getTime();

  if (distance < 0) return true;
  else return false;
}

// type any is used here because obj and return type can be anything
// REMOVED BECAUSE WILL BE USING CLASSES
// export function newObj<T>(obj: T): T {
//   return JSON.parse(JSON.stringify(obj));
// }

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function detectBrowser() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return "Opera";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    return "IE"; //crap
  } else {
    return "Unknown";
  }
}

export function getIcon(type: DeviceId) {
  let retVal = "";
  switch (type) {
    case "windows":
      retVal = `fab fa-windows`;
      // retVal = `far fa-window-maximize`;
      break;
    case "apple":
      retVal = `fab fa-apple`;
      break;
    case "ios":
      retVal = `fab fa-apple`;
      break;
    case "macos":
      retVal = `fab fa-apple`;
      break;
    case "linux":
      retVal = `fab fa-linux`;
      break;
    case "android":
      retVal = `fab fa-android`;
      break;
  }
  return retVal;
}

export function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();

  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight ||
  //       document.documentElement.clientHeight) /* or $(window).height() */ &&
  //   rect.right <=
  //     (window.innerWidth ||
  //       document.documentElement.clientWidth) /* or $(window).width() */
  // );

  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

export async function getIPLocation(): Promise<
  { loc: string; ip: string } | false
> {
  try {
    const rspns = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    if (rspns.ok) {
      const text = await rspns.text();
      const data = text
        .split(/\r?\n/)
        .map((val) => {
          const splitted = val.split("=");
          const retVal: any = {};
          retVal[splitted[0]?.trim()] = splitted[1]?.trim();
          return retVal;
        })
        .reduce((prevVal, currVal) => {
          return { ...prevVal, ...currVal };
        });
      return { loc: data.loc, ip: data.ip };
    } else throw new Error("getting IP & Location failed!");
  } catch (error) {
    console.error(error);
    return false;
  }
}
