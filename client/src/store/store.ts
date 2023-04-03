import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import { oneProductReducer } from "./oneProductSlice";

const rootReducer = combineReducers({
  productReducer,
  oneProductReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
