import { IProduct } from "../models/IProducts";
import { oneProductSlice } from "../store/oneProductSlice";
import { productSlice } from "../store/productsSlice";
import { AppDispatch } from "../store/store";
import { $authHost, $host } from "./index";

interface IProductsResponse {
  count: number;
  rows: IProduct[];
}

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    const response = await $host.get<IProductsResponse>("api/shop");
    dispatch(productSlice.actions.productsFetchingSuccess(response.data.rows));
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
      if (e instanceof SyntaxError) {
        dispatch(oneProductSlice.actions.productOneFetchingError(e.message));
      }
    }
  };

// export const createType = async (type) => {
//   const { data } = await $authHost.post("api/type", type);
//   return data;
// };
// export const fetchTypes = async () => {
//   const { data } = await $host.get("api/type");
//   return data;
// };

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
