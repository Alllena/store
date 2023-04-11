import { AxiosError } from "axios";
import { IModel } from "../models/IProducts";
import { modelsSlice } from "../store/modelSlise";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";

export const fetchModel = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(modelsSlice.actions.modelsFetching());
    const response = await $host.get<IModel[]>("api/model");
    dispatch(modelsSlice.actions.modelsFetchingSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        modelsSlice.actions.modelsFetchingError(e.response?.data.message)
      );
    }
  }
};
export const createModel =
  (name: string, colors: []) => async (dispatch: AppDispatch) => {
    try {
      dispatch(modelsSlice.actions.modelsFetching());
      const response = await $authHost.post("api/model", { name, colors });
      dispatch(modelsSlice.actions.modelCreateSuccess(response.data));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          modelsSlice.actions.modelsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const updateModel =
  (id: number, name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(modelsSlice.actions.modelsFetching());
      await $authHost.put<IModel[]>("api/model/update", { id, name });
      dispatch(modelsSlice.actions.updateModel({ id, name }));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          modelsSlice.actions.modelsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const removeModel = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(modelsSlice.actions.modelsFetching());
    await $authHost.put<IModel[]>("api/model/destroy", { id });
    dispatch(modelsSlice.actions.removeModel({ id }));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        modelsSlice.actions.modelsFetchingError(e.response?.data.message)
      );
    }
  }
};
