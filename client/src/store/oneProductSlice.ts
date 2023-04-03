import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProducts";

// const initialState: IProduct[] = [];

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<IProduct>) => {
//       state.push(action.payload);
//     },
//     removeItem: (state, action: PayloadAction<{ id: number }>) => {
//       return state.filter((p) => p.id !== action.payload.id);
//     },
//   },
// });

// export const productReducer = productSlice.reducer;
// export const productAction = productSlice.actions;

interface IProductState {
  product: IProduct;
  isLoading: boolean;
  error: unknown;
  productColorSelected: null | number;
  productModelSelected: null | number;
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
      state.product = action.payload;
    },
    productOneFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSelectedColor(state, action: PayloadAction<number>) {
      state.productColorSelected = action.payload;
    },
    setSelectedModel(state, action: PayloadAction<number>) {
      state.productModelSelected = action.payload;
    },
  },
});

export const oneProductReducer = oneProductSlice.reducer;
export const oneProductAction = oneProductSlice.actions;
// export default productSlice.reducer;
