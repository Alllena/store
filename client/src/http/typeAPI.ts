import { AxiosError } from "axios";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { typesSlice } from "../store/typeSlice";
import { IType } from "../models/IProducts";

export const fetchTypes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(typesSlice.actions.typesFetching());
    const response = await $host.get<IType[]>("api/type");
    dispatch(typesSlice.actions.typesFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(typesSlice.actions.typesFetchingError(e.response?.data.message));
    }
  }
};
export const createType = (name: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(typesSlice.actions.typesFetching());
    const response = await $authHost.post("api/type", { name });
    dispatch(typesSlice.actions.typeCreateSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(typesSlice.actions.typesFetchingError(e.response?.data.message));
    }
  }
};

export const updateType =
  (id: number, name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(typesSlice.actions.typesFetching());
      console.log(id, name);
      await $authHost.put<IType[]>("api/color/update", { id, name });
      dispatch(typesSlice.actions.updateType({ id, name }));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          typesSlice.actions.typesFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const removeType = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(typesSlice.actions.typesFetching());
    await $authHost.put<IType[]>("api/color/destroy", { id });
    dispatch(typesSlice.actions.removeType({ id }));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(typesSlice.actions.typesFetchingError(e.response?.data.message));
    }
  }
};
