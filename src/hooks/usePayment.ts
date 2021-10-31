import { api, Method } from "@/modules/api";
import { tryCatch } from "@/modules/error";
import { PaymentMethod } from "@/types/Payment";
import { log } from "@/modules/debug";

export const usePayment = (): {
  get: {
    paymentMethods: () => Promise<PaymentMethod[] | false>;
  };
} => {
  // get
  /////////////////////////////////////////////
  const paymentMethods = () => {
    return tryCatch(async () => {
      const response: {
        message: string;
        data: any;
      } = await api("paymentmethods", Method.GET);
      const pms = response.data.map((val: any) => {
        const pm = {
          ...val,
        };
        if (pm.data) {
          const dd = JSON.parse(pm.data);
          pm.data = {
            secret_key: dd.secret_key || "",
            url: dd.url || "",
          };
        }
        return pm;
      });
      log("pms = ", pms);
      return pms as PaymentMethod[];
    });
  };
  /////////////////////////////////////////////
  // get
  return {
    get: {
      paymentMethods,
    },
  };
};
