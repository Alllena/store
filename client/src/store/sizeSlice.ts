import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISize } from "../models/IProducts";

interface ISizesState {
  sizes: ISize[];
  isLoading: boolean;
  error: unknown | string;
}

const initialState: ISizesState = {
  sizes: [
    {
      id: 0,
      name: 0,
    },
  ],
  isLoading: false,
  error: "",
};

export const sizeSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    sizesFetching(state) {
      state.isLoading = true;
    },
    sizesFetchingSuccess(state, action: PayloadAction<ISize[]>) {
      state.isLoading = false;
      state.error = "";
      state.sizes = action.payload;
    },
    colorCreateSuccess(state, action: PayloadAction<ISize>) {
      state.isLoading = false;
      state.error = "";
      state.sizes.push(action.payload);
    },
    sizesFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const sizeReducer = sizeSlice.reducer;
export const sizeAction = sizeSlice.actions;
