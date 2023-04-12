import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IType } from "../models/IProducts";

interface ITypesState {
  types: IType[];
  isLoading: boolean;
  error: unknown | string;
}

const initialState: ITypesState = {
  types: [],
  isLoading: false,
  error: "",
};

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    typesFetching(state) {
      state.isLoading = true;
    },
    typesFetchingSuccess(state, action: PayloadAction<IType[]>) {
      state.isLoading = false;
      state.error = "";
      state.types = action.payload;
    },
    typeCreateSuccess(state, action: PayloadAction<IType>) {
      state.isLoading = false;
      state.error = "";
      state.types.push(action.payload);
    },
    typesFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeType(state, action: PayloadAction<{ id: string }>) {
      state.types = state.types.filter(
        (type) => type.id !== +action.payload.id
      );
    },
    updateType(state, action: PayloadAction<{ id: number; name: string }>) {
      state.types.forEach((type) => {
        if (type.id === action.payload.id) {
          type.name = action.payload.name;
        }
      });
    },
  },
});

export const typesReducer = typesSlice.reducer;
export const typesAction = typesSlice.actions;
