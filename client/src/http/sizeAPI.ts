import { AxiosError } from "axios";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { sizeSlice } from "../store/sizeSlice";
import { ISize } from "../models/IProducts";

export const fetchSize = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(sizeSlice.actions.sizesFetching());
    const response = await $host.get<ISize[]>("api/size");
    dispatch(sizeSlice.actions.sizesFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(sizeSlice.actions.sizesFetchingError(e.response?.data.message));
    }
  }
};
export const createSize = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(sizeSlice.actions.sizesFetching());
    const response = await $authHost.post("api/size", { name });
    dispatch(sizeSlice.actions.sizeCreateSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(sizeSlice.actions.sizesFetchingError(e.response?.data.message));
    }
  }
};

export const updateSize =
  (id: number, name: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(sizeSlice.actions.sizesFetching());
      console.log(id, name);
      await $authHost.put<ISize[]>("api/size/update", { id, name });
      dispatch(sizeSlice.actions.updateSize({ id, name }));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          sizeSlice.actions.sizesFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const removeSize = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(sizeSlice.actions.sizesFetching());
    await $authHost.put<ISize[]>("api/size/destroy", { id });
    dispatch(sizeSlice.actions.removeSize({ id }));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(sizeSlice.actions.sizesFetchingError(e.response?.data.message));
    }
  }
};
