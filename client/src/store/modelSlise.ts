import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModel } from "../models/IProducts";

interface IModelsState {
  models: IModel[];
  isLoading: boolean;
  error: unknown | string;
}

const initialState: IModelsState = {
  models: [
    {
      id: 0,
      name: "",
      colors: [],
    },
  ],
  isLoading: false,
  error: "",
};

export const modelsSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    modelsFetching(state) {
      state.isLoading = true;
    },
    modelsFetchingSuccess(state, action: PayloadAction<IModel[]>) {
      state.isLoading = false;
      state.error = "";
      state.models = action.payload;
    },
    modelCreateSuccess(state, action: PayloadAction<IModel>) {
      state.isLoading = false;
      state.error = "";
      state.models.push(action.payload);
    },
    modelsFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeModel(state, action: PayloadAction<{ id: string }>) {
      state.models = state.models.filter(
        (model) => model.id !== +action.payload.id
      );
    },
    updateModel(state, action: PayloadAction<{ id: number; name: string }>) {
      state.models.forEach((model) => {
        if (model.id === action.payload.id) {
          model.name = action.payload.name;
        }
      });
    },
  },
});

export const modelReducer = modelsSlice.reducer;
export const modelAction = modelsSlice.actions;
