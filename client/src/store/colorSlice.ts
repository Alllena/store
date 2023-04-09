import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColor } from "../models/IProducts";

interface IColorsState {
  colors: IColor[];
  isLoading: boolean;
  error: unknown | string;
}

const initialState: IColorsState = {
  colors: [
    {
      id: 0,
      name: "",
    },
  ],
  isLoading: false,
  error: "",
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    colorsFetching(state) {
      state.isLoading = true;
    },
    colorsFetchingSuccess(state, action: PayloadAction<IColor[]>) {
      state.isLoading = false;
      state.error = "";
      state.colors = action.payload;
    },
    colorCreateSuccess(state, action: PayloadAction<IColor>) {
      state.isLoading = false;
      state.error = "";
      state.colors.push(action.payload);
    },
    colorsFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const colorReducer = colorsSlice.reducer;
export const colorAction = colorsSlice.actions;
