import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { userSlice } from "../store/userSlice";

import jwt_decode from "jwt-decode";

export const registration =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetching());
      const response = await $host.post("api/user/registration", {
        email: email,
        password: password,
        role: "user",
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      dispatch(
        userSlice.actions.userRegistrationSuccess(
          jwt_decode(response.data.token)
        )
      );
    } catch (e) {
      if (e instanceof SyntaxError) {
        dispatch(userSlice.actions.userFetchingError(e.message));
      }
    }
  };
export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.userFetching());
      const response = await $host.post("api/user/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      dispatch(
        userSlice.actions.userLoginSuccess(jwt_decode(response.data.token))
      );
    } catch (e) {
      if (e instanceof SyntaxError) {
        dispatch(userSlice.actions.userFetchingError(e.message));
      }
    }
  };

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
