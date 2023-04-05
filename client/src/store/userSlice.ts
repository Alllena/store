import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUsers";

interface IUserState {
  user: IUser;
  isLogin: boolean;
  isLoading: boolean;
  error: unknown | string;
  isSuccess: boolean;
}

const initialState: IUserState = {
  isLogin: false,
  isLoading: false,
  user: { id: 0, email: "", role: "" },
  error: "",
  isSuccess: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
    },
    userRegistrationSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.isLogin = true;
      state.error = "";
      state.user = action.payload;
      state.isSuccess = true;
    },
    userLoginSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.isLogin = true;
      state.error = "";
      state.user = action.payload;
      state.isSuccess = true;
    },
    userFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.isLogin = false;
      state.error = action.payload;
    },
    userIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    userIsSuccess(state) {
      state.isSuccess = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
