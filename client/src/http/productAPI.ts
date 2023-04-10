import { AxiosError } from "axios";
import queryString from "query-string";
import { IColor, IProduct, ISize, IType } from "../models/IProducts";
import { oneProductSlice } from "../store/oneProductSlice";
import { productSlice } from "../store/productsSlice";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { typesSlice } from "../store/typeSlice";
import { colorsSlice } from "../store/colorSlice";
import { sizeSlice } from "../store/sizeSlice";

interface IProductsResponse {
  count: number;
  rows: IProduct[];
}

export interface IQueryParams {
  typeId: string | (string | null)[] | null;
  isNew: string | (string | null)[] | null;
  sales: string | (string | null)[] | null;
}

export const fetchProducts =
  (queryParams: IQueryParams) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      const response = await $host.get<IProductsResponse>(
        `api/shop?${queryString.stringify(queryParams)}`
      );
      dispatch(
        productSlice.actions.productsFetchingSuccess(response.data.rows)
      );
    } catch (e) {
      if (e instanceof SyntaxError) {
        dispatch(productSlice.actions.productsFetchingError(e.message));
      }
    }
  };
export const fetchOneProduct =
  (colorId?: number, modelId?: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(oneProductSlice.actions.productOneFetching());
      const response = await $host.get<IProduct>(
        `api/product/${colorId}/${modelId}`
      );
      dispatch(
        oneProductSlice.actions.productOneFetchingSuccess(response.data)
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          oneProductSlice.actions.productOneFetchingError(
            e.response?.data.message
          )
        );
      }
    }
  };

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
    dispatch(sizeSlice.actions.colorCreateSuccess(response.data));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(sizeSlice.actions.sizesFetchingError(e.response?.data.message));
    }
  }
};
