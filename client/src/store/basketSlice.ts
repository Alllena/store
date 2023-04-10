import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketProduct } from "../models/IUsers";

interface IBasketState {
  baskets: IBasketProduct[];
  isLoading: boolean;
  error: unknown;
  totalProducts: number;
  isVisible: boolean;
}

const initialState: IBasketState = {
  baskets: [],
  isLoading: false,
  error: "",
  totalProducts: 0,
  isVisible: false,
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
      state.totalProducts = state.baskets.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.count;
        },
        0
      );
    },
    basketsFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateCountBasketProduct(
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) {
      state.baskets.forEach((basket) => {
        if (basket.id === action.payload.id) {
          basket.count = action.payload.count;
        }
      });
    },
    basketCreateSuccess(state, action: PayloadAction<IBasketProduct>) {
      state.baskets.push(action.payload);
      state.totalProducts = state.baskets.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.count;
        },
        0
      );
    },
    removeBasketProduct(state, action: PayloadAction<{ id: string }>) {
      state.baskets = state.baskets.filter((p) => p.id !== +action.payload.id);
      state.totalProducts = state.baskets.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.count;
        },
        0
      );
    },

    madeVisible(state, action: PayloadAction<boolean>) {
      state.isVisible = action.payload;
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const basketAction = basketSlice.actions;
