import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketProduct } from "../models/IUsers";

interface IBasketState {
  baskets: IBasketProduct[];
  isLoading: boolean;
  error: unknown;
  totalProducts: number;
  totalCash: number;
}

const initialState: IBasketState = {
  baskets: [],
  isLoading: false,
  error: "",
  totalProducts: 0,
  totalCash: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketsFetching(state) {
      state.isLoading = true;
    },
    basketsFetchingSuccess(state, action: PayloadAction<IBasketProduct[]>) {
      state.isLoading = false;
      state.error = "";
      state.baskets = action.payload;
    },
    basketsFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addCountBasketProduct(
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) {
      state.baskets.forEach((basket) => {
        if (basket.id === action.payload.id) {
          basket.count = action.payload.count;
        }
      });
    },
    addBasketProduct(state, action: PayloadAction<IBasketProduct>) {
      state.baskets.push(action.payload);
    },
    removeBasketProduct(state, action: PayloadAction<IBasketProduct>) {
      state.baskets.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const basketAction = basketSlice.actions;
