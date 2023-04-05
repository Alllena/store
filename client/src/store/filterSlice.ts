import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterState {
  typeId: string;
  colorId: string;
  sizeId: number;
}

const initialState: IFilterState = {
  typeId: "",
  colorId: "",
  sizeId: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTypeId(state, action: PayloadAction<number>) {
      state.typeId = String(action.payload);
    },
    removeTypeId(state) {
      state.typeId = "";
    },
    addColorId(state, action: PayloadAction<number>) {
      state.colorId = String(action.payload);
    },
    removeColorId(state) {
      state.colorId = "";
    },
    addSizeId(state, action: PayloadAction<number>) {
      state.sizeId = action.payload;
    },
    removeSizeId(state) {
      state.sizeId = 0;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterAction = filterSlice.actions;
