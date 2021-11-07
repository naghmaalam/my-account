import { api, Method } from "@/modules/api";
import { tryCatch, tryCatchBoolean } from "@/modules/error";
import { PaymentMethod } from "@/types/Payment";
// import { log } from "@/modules/debug";

export const usePayment = (): {
  do: {
    pay: (
      payment_method_id: number,
      plan_id: number,
      amount: number,
      additional_devices: number
    ) => Promise<Error | { orderId: number; paymentGatewayUrl: string }>;
    payAsGuest: (
      email: string,
      payment_method_id: number,
      plan_id: number,
      amount: number,
      additional_devices: number
    ) => Promise<Error | { orderId: number; paymentGatewayUrl: string }>;
  };
  get: {
    paymentMethods: () => Promise<PaymentMethod[] | Error>;
  };
} => {
  // do
  /////////////////////////////////////////////
  const pay = (
    payment_method_id: number,
    plan_id: number,
    amount: number,
    additional_devices: number
  ) => {
    return tryCatch(async () => {
      // Request
      // {
      //   "payment_method_id": 8,
      //   "plan_id": 15,
      //   "amount": 10,
      //   "additional_devices": 2,
      //   "client_code": "pc"
      // }

      // Response
      // {
      //   "message": "Order added successfully",
      //   "order_id": 965,
      //   "pay_url": "https://checkout.stripe.com/pay/cs_test_a1sjccR0uTKh02Eg4dCNittEEkir9B1dAj9wKiA3DxXSzKY7ktwp2wsmMx#fidkdWxOYHwnPyd1blpxYHZxWjA0T0pDXDVHdGBCXX9nd2NkUmJsS2B0UTxtXWlRQzNEc1Njf2xTf0JOb3AyPWlhU2h2MUBwNU80S3ZVRFNcSzY2b2c0V3J0YF1Af2tqMkBQbjZqaURNQl1BNTVsM210TmBKXCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
      // }
      console.log("pay");
      const rspns = await api("orders", Method.POST, {
        payment_method_id,
        plan_id,
        amount,
        additional_devices,
        client_code: "pc",
      });

      return {
        orderId: rspns.order_id as number,
        paymentGatewayUrl: rspns.pay_url as string,
      };
    }, false);
  };
  const payAsGuest = (
    email: string,
    payment_method_id: number,
    plan_id: number,
    amount: number,
    additional_devices: number
  ) => {
    return tryCatch(async () => {
      console.log("pay");
      const rspns = await api("orders/as/guest", Method.POST, {
        email,
        payment_method_id,
        plan_id,
        amount,
        additional_devices,
        client_code: "pc",
      });

      return {
        orderId: rspns.order_id as number,
        paymentGatewayUrl: rspns.pay_url as string,
      };
    }, false);
  };
  /////////////////////////////////////////////
  // do

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
      return pms as PaymentMethod[];
    });
  };
  /////////////////////////////////////////////
  // get
  return {
    do: {
      pay,
      payAsGuest,
    },
    get: {
      paymentMethods,
    },
  };
};
