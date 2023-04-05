import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUsers";

interface IUserState {
  user: IUser;
  isLogin: boolean;
  isLoading: boolean;
  error: unknown;
}

const initialState: IUserState = {
  isLogin: false,
  user: { id: 0, email: "", role: "" },
  isLoading: false,
  error: "",
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
      state.error = "";
      state.user = action.payload;
      state.isLogin = true;
      console.log(state.user, state.isLogin);
      console.log(action.payload);
    },
    userLoginSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false;
      state.error = "";
      state.user = action.payload;
      console.log(state.user);
      console.log(action.payload);
    },
    userFetchingError(state, action: PayloadAction<unknown>) {
      state.isLoading = false;
      state.error = action.payload;
      console.log(state.error, state.isLogin);
      console.log(action.payload);
    },
    userIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
      console.log(state.isLogin);
      console.log(action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
