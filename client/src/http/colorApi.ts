import { AxiosError } from "axios";
import { IColor } from "../models/IProducts";
import { colorsSlice } from "../store/colorSlice";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";

export const fetchColor = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(colorsSlice.actions.colorsFetching());
    const response = await $host.get<IColor[]>("api/color");
    dispatch(colorsSlice.actions.colorsFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        colorsSlice.actions.colorsFetchingError(e.response?.data.message)
      );
    }
  }
};
export const createColor = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(colorsSlice.actions.colorsFetching());
    const response = await $authHost.post("api/color", { name });
    dispatch(colorsSlice.actions.colorCreateSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        colorsSlice.actions.colorsFetchingError(e.response?.data.message)
      );
    }
  }
};

export const updateColor =
  (id: number, name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(colorsSlice.actions.colorsFetching());
      console.log(id, name);
      await $authHost.put<IColor[]>("api/color/update", { id, name });
      dispatch(colorsSlice.actions.updateColor({ id, name }));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          colorsSlice.actions.colorsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const removeColor = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(colorsSlice.actions.colorsFetching());
    await $authHost.put<IColor[]>("api/color/destroy", { id });
    dispatch(colorsSlice.actions.removeColor({ id }));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        colorsSlice.actions.colorsFetchingError(e.response?.data.message)
      );
    }
  }
};
