import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProducts";

interface IProductState {
  product: IProduct;
  isLoading: boolean;
  error: unknown;
  productColorSelected: null | number;
  productModelSelected?: null | number;
  productSizeSelected: null | number;
}

const initialState: IProductState = {
  product: {
    id: 0,
    price: 0,
    sales: 0,
    isNew: false,
    color: { id: 0, name: "" },
    imgs: [],
    sizes: [],
    model: { id: 0, name: "", colors: [] },
    type: { id: 0, name: "" },
  },
  isLoading: false,
  error: "",
  productColorSelected: null,
  productModelSelected: null,
  productSizeSelected: null,
};

export const oneProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productOneFetching(state) {
      state.isLoading = true;
    },
    productOneFetchingSuccess(state, action: PayloadAction<IProduct>) {
      state.isLoading = false;
      state.error = "";
      action.payload === null
        ? (state.product = state.product)
        : (state.product = action.payload);
    },
    productOneFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSelectedColor(state, action: PayloadAction<number>) {
      state.productColorSelected = action.payload;
    },
    setSelectedModel(state, action: PayloadAction<number | undefined>) {
      state.productModelSelected = action.payload;
    },
    setSelectedSize(
      state,
      action: PayloadAction<{ sizeId: number; productId: number }>
    ) {
      state.productSizeSelected = action.payload.sizeId;
      state.product.id = action.payload.productId;
    },
  },
});

export const oneProductReducer = oneProductSlice.reducer;
export const oneProductAction = oneProductSlice.actions;
