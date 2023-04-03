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
  products: IProduct[];
  isLoading: boolean;
  error: unknown;
}

const initialState: IProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload;
    },
    productsFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;
