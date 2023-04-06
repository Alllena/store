import { AxiosError } from "axios";
import queryString from "query-string";
import { IProduct, IType } from "../models/IProducts";
import { oneProductSlice } from "../store/oneProductSlice";
import { productSlice } from "../store/productsSlice";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";
import { typesSlice } from "../store/typeSlice";

interface IProductsResponse {
  count: number;
  rows: IProduct[];
}

export interface IQueryParams {
  idType: string;
}

export const fetchProducts =
  (queryParams: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(productSlice.actions.productsFetching());
      const response = await $host.get<IProductsResponse>(
        `api/shop?${queryString.stringify(queryParams)}`
      );
      console.log(queryParams);
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

// export const createType = async (type) => {
//   const { data } = await $authHost.post("api/type", type);
//   return data;
// };

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

// export const createBrands = async (brand) => {
//   const { data } = await $authHost.post("api/brand", brand);
//   return data;
// };
// export const fetchBrands = async () => {
//   const { data } = await $host.get("api/brand");
//   return data;
// };

// export const createDevices = async (device) => {
//   const { data } = await $authHost.post("api/device", device);
//   return data;
// };
// export const fetchDevices = async () => {
//   const { data } = await $host.get("api/device");
//   return data;
// };
// export const fetchOneDevices = async (id) => {
//   const { data } = await $host.get("api/device/" + id);
//   return data;
// };
