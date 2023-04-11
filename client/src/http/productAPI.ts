import { AxiosError } from "axios";
import queryString from "query-string";
import { oneProductSlice } from "../store/oneProductSlice";
import { productSlice } from "../store/productsSlice";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { IProduct } from "../models/IProducts";

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
