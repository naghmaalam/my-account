import { state as userState } from "@/hooks/useUser";
import { LoginDetails } from "@/types/User";

export const host = "https://swoshstest.com/api";

export enum Method {
  POST,
  GET,
  PATCH,
  DELETE,
}

export interface Response {
  accessToken: string;
  message: string;
  email: string;
  isPremiumUser: boolean;
  isSuccess: boolean;
}

export async function api(
  endpoint: string,
  method: Method,
  payload?: LoginDetails
): Promise<Response> {
  try {
    // if not logged in then add language to url query but not in /login page
    let query = "";
    if (!userState.user.authenticated && endpoint.indexOf("login") < 0) {
      const selectedLanguage = (
        userState.user.language.selected || "en"
      ).toLowerCase();
      query =
        endpoint.indexOf("?") < 0
          ? `?lang=${selectedLanguage}`
          : `&lang=${selectedLanguage}`;
    }

    const options = {
      method: Method[method].toString(),
      headers: {
        Authorization: userState.user.accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${host}/${endpoint}${query}`, options);
    const resData = await response.json();

    if (!response.ok) {
      // set error messages
      let errorMsg = (resData && resData.message) || response.status;
      if (resData.errors) {
        errorMsg = "";
        resData.errors.forEach((element: { msg: string }) => {
          errorMsg += element.msg + "<br>";
        });
      }
      const error = new Error();

      //401 == Unauthorized
      if (response.status == 401) {
        // logout user then throw error
        error.name = "Unauthorized";
      }

      //422 == validation failed
      if (response.status == 422) {
        error.name = "ValidationFailed";
      }

      //500 == Server Error
      if (response.status == 500) {
        error.name = "ServerError";
      }

      error.message = errorMsg;
      throw error;
    } else {
      // console.log("response", response);
      // console.log("resData", resData);
      return resData;
    }
  } catch (error) {
    console.error("API.api() error", error);
    throw error;
  }
}
