import { stateUser, useUser } from "@/hooks/useUser";

export const host = "https://swoshstest.com/api";

export enum Method {
  POST,
  GET,
  PATCH,
  DELETE,
}

const user = useUser();

export async function api(
  endpoint: string,
  method: Method,
  payload?: unknown
): Promise<any> {
  try {
    // if not logged in then add language to url query but not in /login page
    let query = "";
    if (!stateUser.value.authenticated && endpoint.indexOf("login") < 0) {
      const selectedLanguage = (
        stateUser.value.language.selected || "en"
      ).toLowerCase();
      query =
        endpoint.indexOf("?") < 0
          ? `?lang=${selectedLanguage}`
          : `&lang=${selectedLanguage}`;
    }

    const options = {
      method: Method[method].toString(),
      headers: {
        Authorization: stateUser.value.accessToken,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${host}/${endpoint}${query}`, options);
    // console.log("response from fetch = ", response);
    const resData = await response.json();
    // console.log("resData from fetch = ", resData);

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
        user.do.logout();
      }
      //422 == validation failed
      else if (response.status == 422) {
        error.name = "ValidationFailed";
      }
      //500 == Server Error
      else if (response.status == 500) {
        error.name = "ServerError";
      } else error.name = "Error";

      error.message = errorMsg;
      throw error;
    } else {
      // console.log("response", response);
      // console.log("resData", resData);
      return resData;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
