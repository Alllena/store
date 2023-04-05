import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import { oneProductReducer } from "./oneProductSlice";
import { basketReducer } from "./basketSlice";
import { userReducer } from "./userSlice";
import { typesReducer } from "./typeSlice";

const rootReducer = combineReducers({
  productReducer,
  oneProductReducer,
  basketReducer,
  userReducer,
  typesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
