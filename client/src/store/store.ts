import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import { oneProductReducer } from "./oneProductSlice";
import { basketReducer } from "./basketSlice";
import { userReducer } from "./userSlice";
import { typesReducer } from "./typeSlice";
import { filterReducer } from "./filterSlice";
import { sizeReducer } from "./sizeSlice";
import { colorReducer } from "./colorSlice";
import { modelReducer } from "./modelSlise";

const rootReducer = combineReducers({
  productReducer,
  oneProductReducer,
  basketReducer,
  userReducer,
  typesReducer,
  colorReducer,
  modelReducer,
  sizeReducer,
  filterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
