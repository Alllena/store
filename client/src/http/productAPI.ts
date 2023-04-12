import { AxiosError } from "axios";
import queryString from "query-string";
import { oneProductSlice } from "../store/oneProductSlice";
import { productSlice } from "../store/productsSlice";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { IProduct, IProductForm } from "../models/IProducts";

interface IProductsResponse {
  count: number;
  rows: IProduct[];
}

export interface IQueryParams {
  typeId?: string | (string | null)[] | null;
  isNew?: string | (string | null)[] | null;
  sales?: string | (string | null)[] | null;
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

export const createProduct =
  (data: IProductForm) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      const response = await $host.post("api/product", { data });
      // const response = await $authHost.post("api/product", { data });
      dispatch(productSlice.actions.productCreateSuccess(response.data));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          productSlice.actions.productsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const updateProduct =
  (id: number, model: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      console.log(id, model);
      await $authHost.put<IProduct[]>("api/product/update", { id, model });
      dispatch(productSlice.actions.updateProduct({ id, model }));
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(
          productSlice.actions.productsFetchingError(e.response?.data.message)
        );
      }
    }
  };

export const removeProduct = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    await $authHost.put<IProduct[]>("api/product/destroy", { id });
    dispatch(productSlice.actions.removeProduct({ id }));
  } catch (e) {
    if (e instanceof AxiosError) {
      dispatch(
        productSlice.actions.productsFetchingError(e.response?.data.message)
      );
    }
  }
};
