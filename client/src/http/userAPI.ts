import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { userSlice } from "../store/userSlice";
import jwt_decode from "jwt-decode";
import { AxiosError } from "axios";
import { basketSlice } from "../store/basketSlice";
import { IBasketProduct } from "../models/IUsers";
import queryString from "query-string";

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
      dispatch(
        userSlice.actions.userRegistrationSuccess(
          jwt_decode(response.data.token)
        )
      );
    } catch (e) {
      if (e instanceof AxiosError)
        dispatch(userSlice.actions.userFetchingError(e.response?.data.message));
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
      if (e instanceof AxiosError)
        dispatch(userSlice.actions.userFetchingError(e.response?.data.message));
    }
  };

export const check = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const response = await $authHost.get("api/user/auth");
    localStorage.setItem("token", response.data.token);
    dispatch(
      userSlice.actions.userLoginSuccess(jwt_decode(response.data.token))
    );
  } catch (e) {
    if (e instanceof AxiosError)
      dispatch(userSlice.actions.userFetchingError(e.response?.data.message));
  }
};

export const createBasket =
  (count: number, userId: number, productId: number, sizeId: number) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.basketsFetching());
      const response = await $host.post("api/basket", {
        count,
        userId,
        productId,
        sizeId,
      });
      dispatch(basketSlice.actions.basketCreateSuccess(response.data));
      console.log(response.data);
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          basketSlice.actions.basketsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const fetchBaskets = (userId: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(basketSlice.actions.basketsFetching());
    const response = await $host.get<IBasketProduct[]>(
      `api/basket?${queryString.stringify({ userId: userId })}`
    );
    dispatch(basketSlice.actions.basketsFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        basketSlice.actions.basketsFetchingError(e.response?.data.message)
      );
    }
  }
};
export const updateBaskets =
  (id: number, count: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(basketSlice.actions.basketsFetching());
      await $host.post<IBasketProduct[]>(
        `api/basket/update?${queryString.stringify({
          id: id,
        })}&&${queryString.stringify({ count: count })}`
      );
      dispatch(basketSlice.actions.updateCountBasketProduct({ id, count }));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          basketSlice.actions.basketsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const removeBaskets = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(basketSlice.actions.basketsFetching());
    await $host.put<IBasketProduct[]>("api/basket/destroy", { id });
    dispatch(basketSlice.actions.removeBasketProduct({ id }));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        basketSlice.actions.basketsFetchingError(e.response?.data.message)
      );
    }
  }
};
